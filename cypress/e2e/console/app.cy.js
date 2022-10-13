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
         cy.get('.pb-3 > :nth-child(1) > .flex > .w-full').type('App1')                            // APP NAME
         cy.get('.pb-3 > :nth-child(2) > .flex > .w-full').type('App1-123')                         //App ID
         cy.get('.pb-3 > :nth-child(3) > .flex > .w-full').type('Description')
         cy.get('.py-6 > .transition-colors').click()                                                 // Let's get started button

         




    })
    
})
