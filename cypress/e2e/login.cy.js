/// <reference types="cypress"/>
import loc from '../support/locators'

describe('Login', () => {
    it('Login with success', () => {
        cy.visit('/');
        cy.login();
    });

    it.only('Login with invalid data', () => {
        cy.visit('/');
        cy.xpath(loc.HOME.loginBtn).click();
        cy.get(loc.LOGIN.emailInput).type('invlaid@email.com');
        cy.get(loc.LOGIN.passwordInput).type('123123', { log: false });
        cy.get(loc.LOGIN.doLoginBtn).click();
        cy.contains('Your email or password is incorrect!').should('exist')
        
    })
})