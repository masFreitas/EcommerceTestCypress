const locators = {
    HOME: {
        loginBtn: `//*[@class='fa fa-lock']/..`,
    },

    LOGIN: {
        emailInput: '[data-qa="login-email"]',
        passwordInput: '[data-qa="login-password"]',
        doLoginBtn: '[data-qa="login-button"]',
    },
    
    CREATEACCOUNT: {
        nameInput: '[data-qa="signup-name"]',
        emailInput: '[data-qa="signup-email"]',
        signUpBtn: '[data-qa="signup-button"]',
        genderBtn: (value) => `//*[@id="id_gender${value}"]`,
        passwordInput: '[data-qa="password"]',
        daysSelect: '[data-qa="days"]',
        monthsSelect: '[data-qa="months"]',
        yearsSelect: '[data-qa="years"]',
        addressFirstNameInput: '[data-qa="first_name"]',
        addressLastNameInput: '[data-qa="last_name"]',
        companyInput: '[data-qa="company"]',
        addressInput: '[data-qa="address"]',
        address2Input: '[data-qa="address2"]',
        countrySelect: '[data-qa="country"]',
        stateInput: '[data-qa="state"]',
        cityInput: '[data-qa="city"]',
        zipcodeInput: '[data-qa="zipcode"]',
        mobileNumberInput: '[data-qa="mobile_number"]',
        createAccountBtn: '[data-qa="create-account"]',

    },
}

export default locators