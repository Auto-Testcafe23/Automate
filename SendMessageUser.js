import { Selector } from "testcafe";

fixture('MS Teams Automation Testing')
.page('https://www.microsoft.com/en-us/microsoft-teams/log-in')
.skipJsErrors();


test('send a message by user1',async t => {

     // Login to outlook
    await t.click(Selector('a').withAttribute('aria-label','Sign in and get started with Microsoft Teams'))
    //.click(Selector('a').withText('Use the web app instead'))
    .maximizeWindow()
    .typeText('#i0116', 'Automation_TestCafe@outlook.com')
    .click('#idSIButton9')

    .typeText('#i0118','AutomateTestcafe@123')
     .click('#idSIButton9')
.wait(5000)
.click('#idSIButton9')

.click(Selector('a').withText('Use the web app instead'))
.wait(10000)

//click on New Chat button
.click(Selector('button').withAttribute('aria-label','New Chat (Alt+N)'))
.wait(10000)
.debug()
//click on new chat message box
.click(Selector('span').withText('New chat'))
.wait(10000)
.debug()
.switchToIframe('.embedded-electron-webview.embedded-page-content')

.wait(5000)
//Add new email id
.typeText(Selector('input').withAttribute('placeholder','Enter name, email or phone number'),'Automation_TestCafe2@outlook.com')
.wait(10000)
.pressKey('Enter')
.wait(10000)

//Type a new message
.typeText(Selector('div').withAttribute('aria-placeholder','Type a new message'),'Hello I am Sender!')
.wait(5000)
.click('button[data-tid="newMessageCommands-send"]')
//.pressKey('Enter')
.wait(10000)

})




/*
test('Sending Message by User1', async t => {
await t
.wait(2000)
.maximizeWindow()
// login into msteams
.typeText('input[name="loginfmt"]', 'Automation_TestCafe@outlook.com')
.click('input[id="idSIButton9"]')
.typeText('input[name="passwd"]', 'AutomateTestcafe@123')
.click('input[id="idSIButton9"]')
.click('input[id="idSIButton9"]')
.click('.use-app-lnk')
.wait(15000)
// click on new chat
.click(Selector('span').withText('Chat'))
.wait(2000)
 .click('button[title="New Chat (Alt+N)"]')
.wait(10000)
 // getting into iframe
 .switchToIframe('.embedded-electron-webview.embedded-page-content')
// add User email id 
//.typeText('input[id="people-picker-input"]', 'Automation_TestCafe2@outlook.com')
.typeText(Selector('input').withAttribute('placeholder','Enter name, email or phone number'),'Automation_TestCafe2@outlook.com')
 .wait(3000)
 .pressKey('Enter')
// send message
.typeText('div[data-tid="ckeditor"]', 'Hello I am Sender!')
.click('button[data-tid="newMessageCommands-send"]')
.wait(5000)

});
*/