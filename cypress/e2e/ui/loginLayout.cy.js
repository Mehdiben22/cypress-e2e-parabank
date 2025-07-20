describe('UI - Login Page Layout', () => {
    it('should display login form fields and branding correctly', () => {
      cy.visit('/')
  
      cy.get('img[alt="ParaBank"]').should('be.visible')
      cy.get('input[name="username"]').should('be.visible').and('have.attr', 'type', 'text')
      cy.get('input[name="password"]').should('be.visible').and('have.attr', 'type', 'password')
      cy.get('input[value="Log In"]').should('be.enabled')
      cy.get('#leftPanel').should('be.visible')
      cy.get('#rightPanel').should('be.visible')
      cy.get('a[href*="register.htm"]').should('contain', 'Register')
    })
  })
  