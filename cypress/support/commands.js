Cypress.Commands.add('login', (username, password) => {
    cy.get('input[name="username"]').type(username)
    cy.get('input[name="password"]').type(password)
    cy.get('input[value="Log In"]').click()
  })
  