const { Given, When, Then, Before, BeforeAll, After, AfterAll, setDefaultTimeout }= require("@cucumber/cucumber");

Given(/^I am at the ToDo Page$/, function () {
    browser.url("https://lambdatest.github.io/sample-todo-app/");
});

Then(/^First Item selected$/, function () {
    const firstItem= $('body > div > div > div > ul > li:nth-child(1) > input');
    firstItem.click();
});

Then(/^Second Item selected$/, function () {
    const secondItem= $('body > div > div > div > ul > li:nth-child(2) > input');
    secondItem.click();

});

Given(/^Third item selected$/, function () {
    const thirditem= $('body > div > div > div > ul > li:nth-child(3) > input');
    thirditem.click();


});

When(/^add the new Item$/, function () {
    const addvalue= $('#sampletodotext');
    addvalue.setValue('Add new item');

});

Then(/^New Item added$/, function () {
    const itemadded= $('#addbutton');
    itemadded.click();

});
