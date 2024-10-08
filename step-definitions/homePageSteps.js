const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')
import homePage from '../pageobjects/home.page'

Given("I am on the home page", async function (){
    homePage.openBrowser();
    await browser.pause(3000); 
});

When("I set where I want to begin my journey from", async function (){
   homePage.setFromField();
   await browser.pause(3000); 
});

When("I set where I want to go", async function (){   
    homePage.setToField();
    await browser.pause(3000);
});

When("I select the date", async function (){
    homePage.selectDate();
    await browser.pause(5000); 
});

When("I click the search button", async function (){   
    homePage.searchBuses();
    await browser.pause(3000);   
});

When("I view the seats", async function (){   
    homePage.viewSeats();
    await browser.pause(3000);   
});

When("I select the seats", async function (){   
    homePage.selectSeats(356,70);
    await browser.pause(5000);   
});

When("I choose my boarding point", async function (){   
    homePage.selectBoardingPoint();
    await browser.pause(5000);   
});

When("I choose my dropping point", async function (){   
    homePage.selectDroppingPoint();
    await browser.pause(5000);   
});

When("I enter my details", async function (){   
    homePage.enterDetails();
    await browser.pause(10000);   
});

Then("I get my bus ticket", async function (){   
    
    await browser.pause(15000);   
});
