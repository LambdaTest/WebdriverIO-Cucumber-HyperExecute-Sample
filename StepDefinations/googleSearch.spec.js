const { Given, When, Then, Before, BeforeAll, After, AfterAll, setDefaultTimeout }= require("@cucumber/cucumber");

Given(/^I am at google search page$/, function () {
    browser.url("https://www.google.com");
    
    for( var i=0; i<600; i++){
        browser.getTitle()
        browser.getTitle()
    }
        
    
  


});

Then(/^I click on google serach box$/, function () {
    const searchBOx= $('//*[@id="APjFqb"]');
    searchBOx.click();
});

Then(/^Type LambdaTest in search box$/, function () {
    const TypeLambdatest= $('//*[@id="APjFqb"]');
    TypeLambdatest.setValue('Lambdatest');

});


