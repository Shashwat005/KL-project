///  <referencec types = "cypress" />



describe('home functionality',function(){

    it('login', function()  {
    
        cy.visit('https://auth.kloudlite.io')
        cy.contains('Login With Email').click()
           cy.get('.gap-3 > :nth-child(1) > .flex > .w-full').type('shashwat@plaxonic.com')
           cy.get('.gap-3 > :nth-child(2) > .flex').type('1234567890')
           cy.contains('Sign in').click()
           cy.wait(1000)
           cy.url().should('include','/home')


           //cy.get('.overflow-hidden > .flex-1').type('xyz').click()
          // cy.get('.gap-4 > .flex-col > .font-semibold').click()
           //cy.get(".font-semibold text-base leading-6 text-neutral-800 capitalize").select('Xyz').click()
cy.get('.flex flex-col leading-normal').select('Xyz').click()





    })

})