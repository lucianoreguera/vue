describe('Post Test Feature', () => {
    // Estrategias de refactorizacion
    // 1-BeforeEach - Ejecuta antes de cada it() esta secuencia de pasos
    // beforeEach(() => {
    //     cy.visit('/login')
    //     cy.get('#email').type('admin@admin.com')
    //     cy.get('#password').type('12345678')
    //     cy.get('button').click()
    //     cy.url().should('eq', 'http://localhost:8080/')
    // }),
    // 2 - Creando nustro propios comandos cy.myComand, esto en el archivo test/e2e/support/commands.js
    beforeEach(() => {
        cy.login('admin@admin.com', '12345678')
        cy.url().should('eq', 'http://localhost:8080/')
    }),
    it('logged user can access to page posts and view the post list', () => {
        // cy.visit('/login')
        // cy.get('#email').type('admin@admin.com')
        // cy.get('#password').type('12345678')
        // cy.get('button').click()
        // cy.url().should('eq', 'http://localhost:8080/')
        cy.contains('h1', 'Posts List')
        cy.contains('sunt aut facere repellat provident occaecati excepturi optio reprehenderit')
    })

    it('logged user can access to detail post view', () => {
        // cy.visit('/login')
        // cy.get('#email').type('admin@admin.com')
        // cy.get('#password').type('12345678')
        // cy.get('button').click()
        // cy.url().should('eq', 'http://localhost:8080/')
        cy.contains('sunt aut facere repellat provident occaecati excepturi optio reprehenderit').click()
        cy.url().should('eq', 'http://localhost:8080/detail/1')
        cy.contains('quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto')
    })

    it('logged user can go back from detail post view', () => {
        // cy.visit('/login')
        // cy.get('#email').type('admin@admin.com')
        // cy.get('#password').type('12345678')
        // cy.get('button').click()
        // cy.url().should('eq', 'http://localhost:8080/')
        cy.contains('sunt aut facere repellat provident occaecati excepturi optio reprehenderit').click()
        cy.url().should('eq', 'http://localhost:8080/detail/1')
        cy.contains('quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto')
        cy.get('.link').click()
        cy.url().should('eq', 'http://localhost:8080/')
    })
})