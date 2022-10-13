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


    // Goes to Account Setting
            cy.contains('Accounts').click()
            cy.url().should('include','accounts')
            cy.contains('Profile').click()
            cy.wait(1000)
            cy.contains('Accounts').click()
            cy.get('[placeholder="Search for the accounts here"]').focus({force: true}).type('plaxonic')
            expect(cy.get('.divide').children().length <=0,true)
            cy.get('.divide').first().click()
            cy.contains('Settings').should('be.visible').click()

    })
        
   it('General section', ()=>{
      //cy.get('.gap-3 > :nth-child(1) > .flex > .w-full').contains('acc-49cslf3qe3bi-fcqyg7shwrnuvqq')
      cy.get('.gap-3 > :nth-child(2) > .flex').contains('plaxonic')                          //Should be remove Save button

      cy.get(':nth-child(2) > .bg-neutral-50 > .justify-between > :nth-child(2) > .transition-colors').click()      //Deactivate account

})

     it('Member Section', ()=>{
         cy.contains('Members').click({force: true})
         cy.get('.grid > :nth-child(1) > .flex > .w-full').type('abj@mailinator.com')
        // cy.get('.css-yxvrel-singleValue').contains('Admin').click()
        cy.get(':nth-child(2) > .transition-colors').click({force: true})               // click invite button
         cy.contains('Invite sent').should('be.visible')
         cy.reload()
                    cy.get('.flex flex-col divide divide-y').children('text-neutral-400 text-xs').contains('szzemailinator.com').should('be.visible')
                    .contains('Remove').click()


         

})
      it('Domain Section', ()=>{
         cy.contains('Domains').click({force: true})
         cy.contains('Add Domain').click({force: true})
         cy.get('.gap-3 > .flex-col > .flex > .w-full').type(abc.com)
         cy.get('.flex-1 > .transition-colors > .flex').click()                   //click cancel button
         cy.contains('Add Domain').click({force: true})
         cy.get('.gap-3 > .flex-col > .flex > .w-full').clear().type(abc.com)
         cy.contains('Add').click()
         cy.contains('Domain added successfully').should('be.visible')


         

      })






        })


