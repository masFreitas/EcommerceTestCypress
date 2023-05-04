/// <reference types="cypress"/>
import loc from '../support/locators'

describe('Login', () => {
    it('Login with success', () => {
        cy.visit('/');
        cy.login();

    })
})