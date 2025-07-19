import user from '../../fixtures/userData.json';

describe('Parabank - Fund Transfer', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.login(user.username, user.password)
  });

  it('should transfer funds successfully', () => {
    cy.contains('Transfer Funds').click()
    cy.get('#amount').type('500')
    cy.get('#fromAccountId').select(0)
    cy.get('#toAccountId').select(1)
    cy.get(':nth-child(4) > .button').click()

    cy.contains('Transfer Complete!').should('be.visible')
  });
});
