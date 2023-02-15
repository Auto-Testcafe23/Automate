import { Selector } from "testcafe";

fixture('Outlook Testing')
.page('https://outlook.live.com/owa/')


test('login to Outlook',async t => {

     // Login to outlook
    await t.click(Selector('a').withText('Sign in'))
    .typeText('#i0116', 'hcltest00@outlook.com')
    .click('#idSIButton9')

   
.typeText('#i0118','India@123456')
.click('#idSIButton9')
.click("#KmsiCheckboxField")
.click('#idSIButton9')

// maximize the window
.maximizeWindow()

//create a new folder
/*.click(Selector('div').withAttribute('title','Create new folder'))
.click(Selector('span').withText('Create new folder'))*/

//create a calender event

/*.click(Selector('div').withAttribute('title','Calendar'))
.click(Selector('i').withText(''))
//.click(Selector('i').withAttribute('fill','#0F6CBD'))
.wait(10000)
.click(Selector('div').withAttribute('data-automation-type','RibbonSplitButton'))
.click(Selector('span').withText('New event'))*/


// create a new mail
/*.wait(10000)
.click(Selector('button').withAttribute('aria-label', 'New mail'))
.wait(10000)
.typeText(Selector('div').withAttribute('aria-label', 'To'), 'testid17@outlook.com')
.wait(10000)
.pressKey('Enter')
.typeText(Selector('input').withAttribute('aria-label', 'Add a subject'), 'Outlook Messaging Poc')
.typeText(Selector('div').withAttribute('aria-label', 'Message body, press Alt+F10 to exit'), 'Hi, Message Automation is done')
.click(Selector('div').withAttribute('aria-label', 'Send'))
.wait(5000)*/

//click on three dots
/*.click(Selector('i').withText(''))
.wait(10000)

// Click on sent Items
.click(Selector('span').withText('Sent Items'))

//click on three dots
.click(Selector('i').withText(''))
.wait(10000)
       //click on Junk Email button
       .click(Selector('span').withText('Junk Email'))*/

//.wait(1000)

// Add a note (Side bars)



/*.click(Selector('span').withText('Notes'))

.click(Selector('span').withText('New note'))

.typeText(Selector('div').withAttribute('aria-label','Editing note'), 'Hello Testers')*/



// Add a note(upper menu)

/*.click('.root-159')

.click(Selector('span').withText('Add a note'))

.typeText(Selector('div').withAttribute('aria-label','Editing note'), 'Notes Automation Testing is completed')

.expect(Selector('span').innerText).contains('Notes Automation Testing is completed')



// Using Bullets

.click(Selector('i').withAttribute('data-icon-name', 'BulletedList'))



//change color of Note

.click(Selector('i').withAttribute('data-icon-name', 'More'))

.hover(Selector('span').withText('Change color'))

.click(Selector('span').withText('Green'))*/

       //click on three dots
/*.click(Selector('i').withText(''))

.wait(10000)

.click(Selector('span').withText('Notes'))

.click(Selector('span').withText('New note'))

.wait(1000)

.typeText(Selector('div').withAttribute('aria-label','Editing note'), 'Hello New Note')*/

//delete the  1st message from Inbox
//.click(Selector('div').withAttribute('title','Inbox'))

    });