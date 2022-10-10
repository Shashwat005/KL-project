describe('Check Functionality',function (){


    beforeEach( ()=>{  
    cy.visit("https://auth.kloudlite.io")
    cy.url().should('include','auth.kloudlite.io/login')
    cy.contains('Login With Email').click()
    cy.get('.gap-3 > :nth-child(1) > .flex > .w-full').type('shashwat@plaxonic.com')
    cy.get('.gap-3 > :nth-child(2) > .flex').type('1234567890')
    cy.contains('Sign in').click()
    cy.wait(1000)
    cy.url().should('include','/home')

    })

         it('Account Setting',()=> {

            cy.contains('Accounts').click()
            cy.url().should('include','accounts')
            cy.contains('Profile').click()
            cy.wait(1000)
            cy.contains('Accounts').click()

            expect(cy.get('.divide').children().length <=0,true)
            cy.get('.divide').first().click()
            cy.contains('Billing').should('be.visible').click()
            cy.url().should('include','billing')


        // Not Workng

cy.get('jhscswchw')

         })

        })


