describe('Does URL work correctly', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3001/')
    })
    it('Ensure that goes to correct Page', () => {
        cy.url().should('include', 'localhost')
        cy.url().should('include', 3001)
    })
})

describe('Ensure inputs work', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3001/')
    })
    it('Ensure that name input is present and works correctly.', () => {
        cy.get('#name').should('have.value', '').type('John Doe')
        cy.get('[type="email"]').should('have.value', '').type('jdoe@email.com')
        cy.get('[type="password"]').should('have.value', '').type('password123')
        cy.get('[type="checkbox"]').check()
    })
})

describe('Ensure that submit button works', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3001/')
    })
    it('ensure that the submit button works appropriately.', () => {
        cy.get('#name').should('have.value', '').type('John Doe')
        cy.get('[type="email"]').should('have.value', '').type('jdoe@email.com')
        cy.get('[type="password"]').should('have.value', '').type('password123')
        cy.get('[type="checkbox"]').check()
        cy.get('[type="submit"]').click()
    })
})

describe('Ensure that submit button remains disabled if all fields are not filled out.', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3001/')
    })
    it('Ensure that name input is present and works correctly.', () => {
        cy.get('#name').should('have.value', '').type('John Doe')
        cy.get('[type="email"]').should('have.value', '').type('jdoe@email.com')
        cy.get('[type="checkbox"]').check()
        cy.get('[type="submit"]').should('be.disabled')
    })
})
describe('Ensure that submit button remains disabled if the terms button is not checked.', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3001/')
    })
    it('Ensure that name input is present and works correctly.', () => {
        cy.get('#name').should('have.value', '').type('John Doe')
        cy.get('[type="email"]').should('have.value', '').type('jdoe@email.com')
        cy.get('[type="password"]').should('have.value', '').type('password123')
        cy.get('[type="submit"]').should('be.disabled')
    })
})
