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
            cy.contains('Computes').should('be.visible').click()
            cy.url().should('include','computes')
            cy.contains('Add Provider').should('be.visible').click()
             cy.get('body').then((body) => {
                if (body.find('wrongLocator').length > 0) {
            
                    cy.get('.fixed').click()
                     }
                else{
                       cy.contains('Cancel').should('be.visible').click() }
             })

            cy.contains('Add Provider').should('be.visible').click()

            cy.get('.w-full > .flex-1').type('kloudlite').click()     //search icon not working

               expect(cy.get('.divide').children().length <=0,true)  
               cy.get('.divide').first().click()






         })

        })


