// Runs `npm` or `wdio` with Node 14 on any OS, downloading it first if needed.
// @wdio/sync (fibers) only works on Node <= 14, and HyperExecute's mac runners
// can't install Node 14 via `runtime`, so we fetch the x64 build ourselves.
// Usage: node scripts/node14.js npm install
//        node scripts/node14.js wdio wdio.conf.js --spec=Features/ToDo.feature:7
const { execFileSync, spawnSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const VERSION = 'v14.21.3';
const isWin = process.platform === 'win32';
const platform = { darwin: 'darwin', linux: 'linux', win32: 'win' }[process.platform];
const root = path.join(__dirname, '..');
const name = `node-${VERSION}-${platform}-x64`;
const dir = path.join(root, name);
const nodeBin = isWin ? path.join(dir, 'node.exe') : path.join(dir, 'bin', 'node');

if (!fs.existsSync(nodeBin)) {
  const ext = isWin ? 'zip' : 'tar.gz';
  const archive = path.join(root, `${name}.${ext}`);
  execFileSync('curl', ['-sSL', '-o', archive, `https://nodejs.org/dist/${VERSION}/${name}.${ext}`], { stdio: 'inherit' });
  execFileSync('tar', ['-xf', archive, '-C', root], { stdio: 'inherit' });
  fs.unlinkSync(archive);
}

const scripts = {
  npm: isWin
    ? path.join(dir, 'node_modules', 'npm', 'bin', 'npm-cli.js')
    : path.join(dir, 'lib', 'node_modules', 'npm', 'bin', 'npm-cli.js'),
  wdio: path.join(root, 'node_modules', '@wdio', 'cli', 'bin', 'wdio.js'),
};
const [cmd, ...args] = process.argv.slice(2);

// Put Node 14 first on PATH so npm install scripts (e.g. fibers) also use it
const env = { ...process.env };
const pathKey = Object.keys(env).find((k) => k.toUpperCase() === 'PATH') || 'PATH';
env[pathKey] = path.dirname(nodeBin) + path.delimiter + (env[pathKey] || '');

const result = spawnSync(nodeBin, [scripts[cmd] || cmd, ...args], { stdio: 'inherit', env });
process.exit(result.status === null ? 1 : result.status);
