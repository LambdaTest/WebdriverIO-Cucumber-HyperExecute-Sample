const { Given, When, Then, Before, BeforeAll, After, AfterAll, setDefaultTimeout } = require("@cucumber/cucumber")

Given(/^I am at login page$/, function () {
    browser.url('https://www.lambdatest.com/automation-demos/')
    for( var i=0; i<600; i++){
        browser.getTitle()
        browser.getTitle()
    }
    
});

Then(/^Enter the username and accesskey$/, function () {
    const username = $('#username')
    username.setValue('lambda')
    const password = $('#password')
    password.setValue('lambda123')
});

Then(/^I perform action at Demo Page$/, function () {
    const loginbutton = $('/html/body/div[1]/div[1]/section[2]/div/div/form/div[3]/button')
    loginbutton.click()
    const displaypage = $('#developer-name')
    displaypage.isDisplayed()
    displaypage.setValue('demo@lambdatest.com');
    const random= $('/html/body/div[1]/div[1]/section[2]/div/div/div[1]/p[4]/label/input')
    random.click()
    const other = $('#others')
    other.click()
    const checkbox= $('#tried-ecom')
    checkbox.click()
    const textArea= $('#comments')
    textArea.setValue('Hi This is LambdaTest automation Demo')

});
