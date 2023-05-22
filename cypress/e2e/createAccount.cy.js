/// <reference types="cypress"/>
import loc from '../support/locators'
import utils from '../support/utils'

beforeEach(() => {
    cy.visit('/');
})

describe('Create account', () => {
    it('Create account with success', () => {
        cy.createAccount();
    });

    it('Create account without fill required fields', () => {
        cy.xpath(loc.HOME.loginBtn).click();
        cy.get(loc.CREATEACCOUNT.nameInput).type(utils.getRandomName());
        cy.get(loc.CREATEACCOUNT.emailInput).type(utils.getRandomEmail());
        cy.get(loc.CREATEACCOUNT.signUpBtn).click();
        cy.get(loc.CREATEACCOUNT.createAccountBtn).click();
        cy.url().should('contain', '/signup')
    });

    it.only('Create account without filling name and email', () => {
        cy.xpath(loc.HOME.loginBtn).click();
        cy.get(loc.CREATEACCOUNT.signUpBtn).click();
        cy.url().should('contain', '/login')
    });
})