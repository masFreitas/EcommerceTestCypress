const locators = {
    HOME: {
        loginBtn: `//*[@class='fa fa-lock']/..`,
    },

    LOGIN: {
        emailInput: '[data-qa="login-email"]',
        passwordInput: '[data-qa="login-password"]',
        doLoginBtn: '[data-qa="login-button"]',
    },
}

export default locators