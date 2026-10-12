const { Given, When, Then, Before, BeforeAll, After, AfterAll, setDefaultTimeout }= require("@cucumber/cucumber");

Given(/^I am at google search page$/, async function () {
    await browser.url("https://www.google.com");
    
    for( var i=0; i<600; i++){
        await browser.getTitle()
        await browser.getTitle()
    }
        
    
  


});

Then(/^I click on google serach box$/, async function () {
    const searchBOx= await $('[name="q"]');
    await searchBOx.click();
});

Then(/^Type LambdaTest in search box$/, async function () {
    const TypeLambdatest= await $('[name="q"]');
    await TypeLambdatest.setValue('Lambdatest');

});


