/// <reference types="cypress"/>
import loc from '../support/locators'
import utils from '../support/utils'

beforeEach(() => {
    cy.visit('/');
})

describe('Create account', () => {
    it('Create account with success', () => {
        cy.createAccount();
    })
})