

describe('User Onboarding', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    // here go our variable declarations

    const name = () => cy.get('input[name="name"]')
    const email = () => cy.get('input[name="email"]')
    const password = () => cy.get('input[name="password"]')
    const checkbox = () => cy.get('input[name="checkbox"]')
    const submit = () => cy.get('.submitButton')

    // here go our tests
    // it('sanity check', () => {
    //     expect(2 + 2).to.equal(4)
    //     expect(2 + 2).not.to.equal(5)
    // })

    it('validate form fields', () => {
        submit().should('be.disabled') // Validating that we cannot submit form with empty inputs

        name()
        .should('exist')
        .should('have.value', '')
        .type('Your Name')
        .should('have.value', 'Your Name')
        

        email()
        .should('exist')
        .should('have.value', '')
        .type('Your@Email.com')
        .should('have.value', 'Your@Email.com')

        password()
        .should('exist')
        .should('have.value', '')
        .type('password')
        .should('have.value', 'password')

        checkbox()
        .should('exist')
        .should('not.be.checked')
        .click()
        .should('be.checked')

        submit()
        .should('exist')
        .click()

    })

})