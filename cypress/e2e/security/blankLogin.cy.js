describe('Security - Blank Login Attempt', () => {
    it('should not allow empty login form submission', () => {
      cy.visit('/')
      cy.get('input[value="Log In"]').click()
  
      cy.contains('error', { matchCase: false }).should('exist')
    })
  })
  