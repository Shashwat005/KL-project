///  <referencec types = "cypress" />

describe('Create app',function(){


    it('Create App', ()=>   {
        cy.visit('https://auth.kloudlite.io')
        cy.contains('Login With Email').click()
        cy.get('.gap-3 > :nth-child(1) > .flex > .w-full').type('shashwat@plaxonic.com')
        cy.get('.gap-3 > :nth-child(2) > .flex').type('1234567890')
        cy.contains('Sign in').click()
        cy.wait(1000)
        cy.url().should('include','/home')
        cy.wait(1000)

        cy.get('.overflow-hidden > .flex-1').focus().type('single-67714')                     //Search Project
        cy.get('.gap-4 > .flex-col > .font-medium').click()
        cy.url().should('include','https://console.kloudlite.io/apps')
        cy.contains('single').should('be.visible')
        
         cy.contains('Create New App').click()
         cy.get('.pb-3 > :nth-child(1) > .flex > .w-full').clear().type('app1')                            // APP NAME
         cy.get('.pb-3 > :nth-child(2) > .flex > .w-full').clear().type('app1-123')                         //App ID
         cy.get('.pb-3 > :nth-child(3) > .flex > .w-full').type('Description')
         cy.get('.py-6 > .transition-colors > .flex').click()                                                 // Let's get started button
        cy.wait(1000)

     
     // Compute   

       // cy.url().should('include','/create-app/containers')
        cy.contains('Proceed').click()                                                          //TODO:Valiidation Error
     cy.wait(1000)
     cy.go('back')
        cy.get('.items-start > :nth-child(1) > .flex > .text-neutral-800').click()
         cy.contains('Github').click()
         
              cy.get('.css-g39bwg').click()                                          // Select manually Kloudlite
     cy.wait(2000)
         cy.get('[placeholder="Search for repo"]').focus({force: true}).type('demo-env')
           expect(cy.get('.divide').children().length <=0,true)
           cy.get('.divide').first().click()

           cy.get(':nth-child(2) > .flex > #id > .css-umybv7-control > .css-13c924m > .css-g39bwg').click({force: true})
//    Select manually choose stack
       cy.wait(1000)
       cy.get(':nth-child(3) > .justify-between > .flex').click({force: true}).click({force: true})                 //Build config
       cy.get('.pt-2 > .transition-colors > .flex').click({force: true})
       cy.wait(2000)
       cy.get('.pt-2 > .transition-colors > .flex').click({force: true})
       cy.get(':nth-child(2) > .gap-2 > .truncate').click({force: true})                      // Select Plan
       cy.get(':nth-child(9) > .justify-between > .flex > .transform').click({force: true})                 // Environment Varriables
       cy.get('.h-full > .flex-col > .flex > .w-full').type('50')
       cy.get('.gap-1.items-start > .flex-col > .border > .w-full').type('55')
       cy.get('.rounded-full > svg').click()
       cy.get(':nth-child(9) > .justify-between > .flex > .transform').click({force: true})                 // Environment Varriables dropdown close

           /*cy.get(':nth-child(11) > .justify-between > .flex > .transform').click({force: true})          // Config mounts
           cy.get('.h-full > .flex-col > .flex').type('asdf')
           cy.get('.rounded-md > .grid > :nth-child(1) > div').click({force: true})
           cy.get(':nth-child(1) > :nth-child(1) > .flex-col > .flex > .py-2').click({force: true})
           cy.get('.rounded-full > svg').click({force: true})
           cy.get(':nth-child(11) > .justify-between > .flex > .transform').click({force: true})          // Config mounts dropdown close


            //cy.get(':nth-child(13) > .justify-between > .flex > .transform').click()             // Managed Resources
*/
        cy.contains('Proceed').click({force: true})


        // Network Config

        cy.get(':nth-child(1) > .flex-col > .flex > .w-full').type('250')                      //target port
        cy.get('.gap-6 > :nth-child(2) > .flex-col > .flex > .w-full').type('400')              //Exposed port
        cy.get('.items-end > .transition-colors').click()
        cy.contains('Proceed').click({force: true})
        cy.contains('Go Live')







           })
    
})
