/// <reference types="cypress"/>
import loc from '../support/locators'

describe('Login', () => {
    it('Login with success', () => {
        cy.visit('/');
        cy.xpath(loc.HOME.loginBtn).click();
        cy.get(loc.LOGIN.emailInput).type(Cypress.env('email'));
        cy.get(loc.LOGIN.passwordInput).type(Cypress.env('password'));

    })
})