import user from '../../fixtures/userData.json';

describe('Transfer Funds - Negative Tests', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.login(user.username, user.password)
    cy.contains('Transfer Funds').click()
  })

  it('should prevent transferring negative amounts', () => {
    cy.get('#amount').type('-500')
    cy.get(':nth-child(4) > .button').click()
    cy.contains('error', { matchCase: false }).should('exist')
  })

  it('should show error for non-numeric input', () => {
    cy.get('#amount').type('abc')
    cy.get(':nth-child(4) > .button').click()
    cy.contains('error', { matchCase: false }).should('exist')
  })
})
