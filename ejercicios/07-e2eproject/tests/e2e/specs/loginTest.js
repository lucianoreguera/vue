describe('Login Test Feature', () => {
  it('user can not access to protected routed when is not logged in', () => {
    cy.visit('/')
    cy.url().should('eq', 'http://localhost:8080/login')
  })

  it('user with wrong credentials can not pass', () => {
    // cy.visit('/login')
    // cy.get('#email').type('demo@demo.com')
    // cy.get('#password').type('112345667')
    // cy.get('button').click()
    // refactor con el comando login
    cy.login('demo@demo.com', '112345667')
    cy.contains('p', 'Wrong email or password')
    cy.visit('/')
    cy.url().should('eq', 'http://localhost:8080/login')
  })

  it('user can successfully login', () => {
    // cy.visit('/login')
    // cy.get('#email').type('admin@admin.com')
    // cy.get('#password').type('12345678')
    // cy.get('button').click()
    cy.login('admin@admin.com', '12345678')
    cy.url().should('eq', 'http://localhost:8080/')
  })
})
