import user from '../../fixtures/userData.json';

describe('Parabank - Login Test', () => {
  it('should login with valid credentials', () => {
    cy.visit('/')
    cy.get('input[name="username"]').type(user.username)
    cy.get('input[name="password"]').type(user.password)
    cy.get('input[value="Log In"]').click()
    //UI TESTS
    cy.get('#leftPanel').should('be.visible')
    cy.get('#rightPanel').should('be.visible')
    

    cy.contains('Accounts Overview').should('be.visible')
  });
});
