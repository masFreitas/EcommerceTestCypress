/// <reference types="cypress"/>
import loc from '../support/locators'
import utils from '../support/utils'

beforeEach(() => {
    cy.visit('/');
});

describe('Newsletter', () => {
    it('Subscribe to newsletter with success', () => {
        cy.get(loc.HOME.newsletterInput).type(utils.getRandomEmail());
        cy.get(loc.HOME.newsletterSubmitBtn).click();
        cy.get(loc.HOME.newsletterSuccessMessage).should('contain', 'You have been successfully subscribed!');
    });
});