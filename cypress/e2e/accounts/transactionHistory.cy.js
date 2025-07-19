import user from '../../fixtures/userData.json';

describe('Parabank - Transaction History', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.login(user.username, user.password)
  });

  it('should display transaction history for an account', () => {
    cy.contains('Accounts Overview').click()
    cy.get('tbody > :nth-child(1) > :nth-child(1)').first().click()
    cy.contains('Transactions').click()

    cy.get('#transactionTable').should('exist')
  });
});
