

describe('home functionality',function(){

    it('login', function()  {
    
        cy.visit('https://auth.kloudlite.io')
        cy.contains('Login With Email').click()
           cy.get('.gap-3 > :nth-child(1) > .flex > .w-full').type('shashwat@plaxonic.com')
           cy.get('.gap-3 > :nth-child(2) > .flex').type('1234567890')
           cy.contains('Sign in').click()
           cy.wait(1000)
           cy.url().should('include','/home')

           cy.get('[href="/apps/?projectId=proj-d8-xal5hi-rrxlfxet1bll2uzpqz&accountId=acc-49cslf3qe3bi-fcqyg7shwrnuvqq"] > .bg-white > .gap-4 > .flex-col > .font-semibold').click()
           cy.contains('Configs & Secrrets').click()
           cy.get('[href="/configs-secrets/configs"] > .w-full').click()
           Cy.contains('Create Config').click()
           cy.get('.gap-3 > :nth-child(1) > .flex > .w-full').type(Abcd)



    })


})