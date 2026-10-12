const { Given, When, Then, Before, BeforeAll, After, AfterAll, setDefaultTimeout } = require("@cucumber/cucumber")

Given(/^I am at login page$/, async function () {
    await browser.url('https://www.lambdatest.com/automation-demos/')
    for( var i=0; i<600; i++){
        await browser.getTitle()
        await browser.getTitle()
    }
    
});

Then(/^Enter the username and accesskey$/, async function () {
    const username = await $('#username')
    await username.setValue('lambda')
    const password = await $('#password')
    await password.setValue('lambda123')
});

Then(/^I perform action at Demo Page$/, async function () {
    const loginbutton = await $('/html/body/div[1]/div[1]/section[2]/div/div/form/div[3]/button')
    await loginbutton.click()
    const displaypage = await $('#developer-name')
    await displaypage.isDisplayed()
    await displaypage.setValue('demo@lambdatest.com');
    const random= await $('/html/body/div[1]/div[1]/section[2]/div/div/div[1]/p[4]/label/input')
    await random.click()
    const other = await $('#others')
    await other.click()
    const checkbox= await $('#tried-ecom')
    await checkbox.click()
    const textArea= await $('#comments')
    await textArea.setValue('Hi This is LambdaTest automation Demo')

});
