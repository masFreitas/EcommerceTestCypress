import loc from '../support/locators'

Cypress.Commands.add('login', () => {
    cy.xpath(loc.HOME.loginBtn).click();
    cy.get(loc.LOGIN.emailInput).type(Cypress.env('email'));
    cy.get(loc.LOGIN.passwordInput).type(Cypress.env('password'), { log: false });
    cy.get(loc.LOGIN.doLoginBtn).click();
    cy.contains('Delete Account').should('exist');
})