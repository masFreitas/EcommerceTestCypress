/// <reference types="cypress"/>
import loc from '../support/locators'
import utils from '../support/utils'

beforeEach(() => {
    cy.visit('/');
})

describe('Create account', () => {
    it('Create account with success', () => {
        cy.xpath(loc.HOME.loginBtn).click();
        cy.get(loc.CREATEACCOUNT.nameInput).type(utils.getRandomName());
        cy.get(loc.CREATEACCOUNT.emailInput).type(utils.getRandomEmail());
        cy.get(loc.CREATEACCOUNT.signUpBtn).click();
        cy.xpath(loc.CREATEACCOUNT.genderBtn(2)).click(); //male -> 1 or female -> 2
        cy.get(loc.CREATEACCOUNT.passwordInput).type('12345', { log: false });
        cy.get(loc.CREATEACCOUNT.daysSelect).select('10');
        cy.get(loc.CREATEACCOUNT.monthsSelect).select('August');
        cy.get(loc.CREATEACCOUNT.yearsSelect).select('1983');
        cy.get(loc.CREATEACCOUNT.addressFirstNameInput).type(utils.getRandomName());
        cy.get(loc.CREATEACCOUNT.addressLastNameInput).type(utils.getRandomName());
        cy.get(loc.CREATEACCOUNT.companyInput).type(utils.getRandomName());
        cy.get(loc.CREATEACCOUNT.addressInput).type(utils.getRandomName());
        cy.get(loc.CREATEACCOUNT.address2Input).type(utils.getRandomName());
        cy.get(loc.CREATEACCOUNT.countrySelect).select('Israel');
        cy.get(loc.CREATEACCOUNT.stateInput).type(utils.getRandomName());
        cy.get(loc.CREATEACCOUNT.cityInput).type(utils.getRandomName());
        cy.get(loc.CREATEACCOUNT.zipcodeInput).type('123123123');
        cy.get(loc.CREATEACCOUNT.mobileNumberInput).type('123123123');
        cy.get(loc.CREATEACCOUNT.createAccountBtn).click();
        cy.contains('Account Created!').should('exist');
    })
})