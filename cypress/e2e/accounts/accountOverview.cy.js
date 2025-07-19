import user from '../../fixtures/userData.json';

describe('Parabank - Account Overview', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.login(user.username, user.password)
  });

  it('should display account balances and numbers', () => {
    cy.contains('Accounts Overview').click()
    cy.get('#accountTable').should('contain', 'Balance').and('contain', 'Account').and('contain','Balance')
  });
});
