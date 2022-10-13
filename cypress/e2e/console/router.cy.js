

describe('home functionality',function(){

    it('login', function()  {
    
        cy.visit('https://auth.dev.kloudlite.io')
        cy.contains('Login With Email').click()
           cy.get('.gap-3 > :nth-child(1) > .flex > .w-full').type('shashwat@plaxonic.com')
           cy.get('.gap-3 > :nth-child(2) > .flex').type('1234567890')
           cy.contains('Sign in').click()
           cy.wait(1000)
           cy.url().should('include','/home')

           cy.get('.overflow-hidden > .flex-1').focus().type('single-67714')                     //Search
           cy.get('.gap-4 > .flex-col > .font-medium').click()
           cy.url().should('include','https://console.kloudlite.io/apps')
           cy.contains('single').should('be.visible')
           cy.get('[href="/routers"] > .relative').click()                               // Select Router  

    })


})