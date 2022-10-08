///  <referencec types = "cypress" />

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

         it('Existing Account',()=> {

            cy.contains('Accounts').click()
            cy.url().should('include','accounts')
            cy.contains('Profile').click()
            cy.wait(1000)
            cy.contains('Accounts').click()
            cy.contains('Create New Account').click()
                cy.get('body').then((body) => {
                if (body.find('wrongLocator').length > 0) {
            
                    cy.get('.py-24').click()
                     }
                else{
                       cy.contains('Cancel').should('be.visible').click() }
                })

            cy.url().should('include','accounts')        
            cy.contains('Create New Account').click()
            cy.get('.gap-3 > :nth-child(1) > .flex > .w-full').type('abc')      //Existing Comapny Name
            cy.get('.gap-3 > :nth-child(2) > .flex > .w-full').type('Test 1')
            cy.wait(8000)
            cy.get(':nth-child(3) > .rounded-md').type('424242424242424242424242')        // Manually enter card no.
            cy.get(':nth-child(2) > .transition-colors').click()
            cy.contains('Account is already exist').should('be.visible')



         })

        it('New Account',()=> {

              cy.contains('Accounts').click()
              cy.url().should('include','accounts')
              cy.contains('Profile').click()
              cy.wait(1000)
              cy.contains('Accounts').click()
              cy.contains('Create New Account').click()
              cy.get('body').then((body) => {
                if (body.find('wrongLocator').length > 0) {
            
                    cy.get('.py-24').click()
                     }
                else{
                       cy.contains('Cancel').should('be.visible').click() }
                 })

              cy.url().should('include','accounts')        
              cy.contains('Create New Account').click()
              cy.get('.gap-3 > :nth-child(1) > .flex > .w-full').type('abc')      //Comapny Name
              cy.get('.gap-3 > :nth-child(2) > .flex > .w-full').type('Test 1')
              cy.wait(8000)
              cy.get(':nth-child(3) > .rounded-md').type('424242424242424242424242')        // Manually enter card no.
              cy.get(':nth-child(2) > .transition-colors').click()

     cy.contains('Active Accounts', { timeout: 10000 }).should('be.visible');  
           cy.get('.w-full > .flex-1').type("qwe")           //search icon (search account)
           expect(cy.get('.divide').children().length <=0,true)
           cy.get('.divide').first().click()

           cy.get('.gap-3 > .text-lg').should('have.text','qwert')      // Account name verify
           cy.url().should('include','projects')
           cy.contains('Create Project').click()
           cy.url().should('include','create project')
               cy.get('.gap-3 > :nth-child(1) > .flex > .w-full').type('pop')     //Name
               cy.get('.gap-3 > :nth-child(2) > .flex > .w-full').type('345')      //Project id
               cy.get('.css-10bl27q-indicatorContainer').select('Bangaluru').should('have.value','Bangaluru')
               cy.get(':nth-child(4) > .flex > .w-full').type('testing')
               cy.contains('create').click()
               cy.contains('Project create successfully').should('be.visible')
               cy.url().should('include','projects')

//TODO: home project container pick 
               




             close()

    })
        })
    
