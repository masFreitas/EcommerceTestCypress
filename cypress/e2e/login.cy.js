/// <reference types="cypress"/>
import loc from '../support/locators'

beforeEach(() => {
    cy.visit('/');
});

describe('Login', () => {
    it('Login with success', () => {
        cy.login();
    });

    it('Login with invalid data', () => {
        cy.xpath(loc.HOME.loginBtn).click();
        cy.get(loc.LOGIN.emailInput).type('invalid@email.com');
        cy.get(loc.LOGIN.passwordInput).type('123123', { log: false });
        cy.get(loc.LOGIN.doLoginBtn).click();
        cy.contains('Your email or password is incorrect!').should('exist');
    })

    it('Login without filling fields', () => {
        cy.xpath(loc.HOME.loginBtn).click();
        cy.get(loc.LOGIN.doLoginBtn).click();
        cy.url().should('contain', '/login');
    })
});