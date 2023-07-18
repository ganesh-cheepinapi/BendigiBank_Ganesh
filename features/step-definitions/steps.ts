import { Given, When, Then } from "@cucumber/cucumber";
import BendigoHomepage from "../../features/pageobjects/bankingpage";

Given(/^I am on the login page$/, async function () {
  console.log("Before opening browser..");
  await browser.url("https://www.bendigobank.com.au/");
  //https://applynow.bendigobank.com.au/
  await browser.pause(5000);
  console.log("After opening browser..");
  await browser.maximizeWindow();
});

Then(/^Click on Banking$/, async function () {
  const link = await $('//button[@name="banking"]');
  link.waitForExist();
  link.moveTo();
  link.click;
  await browser.pause(5000);

  // BendigoHomepage.clickBankingBtn()
});

Then(/^I Select CreditCards$/, async function () {
  const cc = await $('(//a[contains(text(),"Credit cards")])[1]');
  cc.click();
  await browser.pause(5000);
});

Then(/^Click on Applynow$/, async function () {
  await $("(//a[@id='Button-232952'])[2]").scrollIntoView();
  await browser.pause(4000);
  // await $("#Button-232952").moveTo();
  // await browser.pause(3000);
  await $("(//a[@id='Button-232952'])[2]").click();
  await browser.pause(3000);
});

Then(/^Click on ContinueApply$/, async function () {
  const capply = await $('(//a[contains(text(),"Continue to apply")])[1]');
  capply.click();
  await browser.pause(15000);
  browser.switchWindow("https://applynow.bendigobank.com.au/");
});

When(/^Start to fill the details$/, async function () {
  const limit = await $('//input[@id="creditLimitAmountInput"]');
  limit.setValue(10000);
  await browser.pause(5000);

  const gp = await $('//button[contains(text(),"General purpose use")]');
  gp.click();
  await browser.pause(5000);
  const cont = await $('//button[contains(text(),"Continue")]');
  cont.click();
  await browser.pause(15000);

  const selectBox = await $('//select[@name="maritalStatus"]');
  await $(selectBox).selectByVisibleText("Single");
  await browser.pause(5000);

  const etb = await $(
    '//button[@name="isPrimaryApplicantExistingCustomer" and text()="No"]'
  );
  etb.click();
  await browser.pause(5000);

  const promo = await $('//span[text()="No"]//ancestor::button');
  promo.click();
  await browser.pause(5000);

  cont.click();
  await browser.pause(5000);
});

Then(/^I Fill Time & Eligibility screen$/, async function () {
  //17.	Select Yes for the question and click continue
  const eligible = await $(
    '//button[@name="hasApplicantConformToEligibilityCriteria" and text()="Yes"]'
  );
  // eligible.scrollIntoView();
  // await browser.pause(2000);
  // await eligible.moveTo();
  // await browser.pause(1000);
  await eligible.click();
  await browser.pause(2000);

  const cont = await $('//button[contains(text(),"Continue")]');
  cont.click();
  await browser.pause(15000);

  const location = await $('//input[@placeholder="Enter a location"]');
  location.setValue("Melbourne");
  await browser.pause(5000);

  await $("#branchSearch").click();
  await browser.pause(5000);

  let items = await $$("[class='ng-binding ng-scope']");

  for (var i = 0; i < (await items.length); i++) {
    if ((await items[i].getText()).startsWith("Clifton Hill")) {
      items[i].click();
      break;
    }
  }
  await browser.pause(15000);
});

Then(/^click on Continue and Fill the details$/, async function () {
  const cont = await $('//button[contains(text(),"Continue")]');
  cont.scrollIntoView();
  await browser.pause(2000);
  cont.moveTo();
  await browser.pause(2000);
  await cont.click();
  await browser.pause(15000);

  const selectBox = await $('//select[@name="employmentStatus"]');
  await $(selectBox).selectByVisibleText("Casual");
  await browser.pause(5000);

  const occu = await $('//input[@name="occupationSearch"]');
  occu.setValue("Professional");
  await browser.pause(5000);

  let items = await $$("[class='ng-binding ng-scope']");
  for (var i = 0; i < (await items.length); i++) {
    if ((await items[i].getText()).startsWith("Social Professionals (general)")) {
      items[i].click();
      break;
    }
  }
  await browser.pause(5000);


  const amount = await $('//input[@name="incomeAmount"]');
  amount.setValue(20000);
  await browser.pause(5000);



});
