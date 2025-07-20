describe('Security - Injection in Login Fields', () => {
    it('should prevent script injection in username field', () => {
      cy.visit('/')
      cy.get('input[name="username"]').type('<script>alert("XSS")</script>')
      cy.get('input[name="password"]').type('test')
      cy.get('input[value="Log In"]').click()
  
      cy.contains('error', { matchCase: false }).should('exist')
    })
  
    it('should reject SQL-like input', () => {
      cy.visit('/')
      cy.get('input[name="username"]').type("' OR 1=1 --")
      cy.get('input[name="password"]').type('whatever')
      cy.get('input[value="Log In"]').click()
  
      cy.contains('error', { matchCase: false }).should('exist')
    })
  })
  