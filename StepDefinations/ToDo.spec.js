const { Given, When, Then, Before, BeforeAll, After, AfterAll, setDefaultTimeout }= require("@cucumber/cucumber");

Given(/^I am at the ToDo Page$/, async function () {
    await browser.url("https://ltqa-frontend.lambdatestinternal.com/sample-todo-app/");
});

Then(/^First Item selected$/, async function () {
    const firstItem= await $('body > div > div > div > ul > li:nth-child(1) > input');
    await firstItem.click();
});

Then(/^Second Item selected$/, async function () {
    const secondItem= await $('body > div > div > div > ul > li:nth-child(2) > input');
    await secondItem.click();

});

Given(/^Third item selected$/, async function () {
    const thirditem= await $('body > div > div > div > ul > li:nth-child(3) > input');
    await thirditem.click();


});

When(/^add the new Item$/, async function () {
    const addvalue= await $('#sampletodotext');
    await addvalue.setValue('Add new item');

});

Then(/^New Item added$/, async function () {
    const itemadded= await $('#addbutton');
    await itemadded.click();

});
