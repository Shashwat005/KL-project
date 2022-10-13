///  <referencec types = "cypress" />

describe('Check Functionality',function (){

   it('Notification',function()  {
        cy.visit("https://auth.kloudlite.io")
        cy.url().should('include','auth.kloudlite.io/login')
         cy.contains('Login With Email').click()
           cy.get('.gap-3 > :nth-child(1) > .flex > .w-full').type('shashwat@plaxonic.com')
           cy.get('.gap-3 > :nth-child(2) > .flex').type('1234567890')
           cy.contains('Sign in').click()
           cy.wait(1000)
           cy.url().should('include','/home')
           cy.get('.bg-neutral-100 > svg').click()   // Account dropdown click
           cy.contains('Notification').click()
           cy.url().should('include','notification')
     
          
   })
})