
describe('home functionality',function(){

    beforeEach( function()  {
    
        cy.visit('https://auth.kloudlite.io')
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
           cy.get('[href="/configs-secrets"] > .relative').click()                     //Select configs & secrets

    })
/*
        it('New Secret Create', () => {

             
            cy.get('[href="/configs-secrets/secrets"] > .flex').click({force: true})              // Select secrets
              cy.url().should('include','/configs-secrets/secrets')
              cy.wait(1000)
              cy.contains('Create Secret').focus().click({force: true})      
              cy.get('.bg-neutral-50 > .justify-between > :nth-child(2) > .transition-colors').click()      //Submit button
              cy.contains('contain only lowercase').should('be.visible')
              cy.get('.justify-between > .flex-1 > .transition-colors > .flex').click()                                 // Cancel button
              cy.contains('Create Secret').click({force: true}) 
              cy.get('.gap-3 > :nth-child(1) > .flex > .w-full').type('test7')         //  Secret Name
              cy.get('.gap-3 > :nth-child(2) > .flex > .w-full').type('Cool')
              cy.get('.bg-neutral-50 > .justify-between > :nth-child(2) > .transition-colors').click()            //Submit
              cy.contains('Entry created successfully').should('be.visible')

        })

       it('Duplicate Secret', ()=>{

        cy.get('[href="/configs-secrets/secrets"] > .flex').click({force: true})              // Select secrets
        cy.url().should('include','/configs-secrets/secrets')
         cy.wait(1000)        
        cy.contains('Create Secret').click({force: true})      
        cy.get('.bg-neutral-50 > .justify-between > :nth-child(2) > .transition-colors').click()      //Submit
        cy.contains('contain only lowercase').should('be.visible')
        cy.get('.justify-between > .flex-1 > .transition-colors > .flex').click()                                          // Cancel
        cy.contains('Create Secret').click({force: true}) 
        cy.get('.gap-3 > :nth-child(1) > .flex > .w-full').type('test7')         //   Config Name
        cy.get('.gap-3 > :nth-child(2) > .flex > .w-full').type('Cool')
        cy.get('.bg-neutral-50 > .justify-between > :nth-child(2) > .transition-colors').click()
        cy.contains('duplicate key error').should('be.visible')


       })

    it('Search Secret', ()=>   { 

        cy.get('[href="/configs-secrets/secrets"] > .flex').click({force: true})              // Select secrets
        cy.url().should('include','/configs-secrets/secrets')
         cy.wait(1000)   
        cy.get('.w-full > .flex-1').focus().type('test7')
        expect(cy.get('.divide').children().length <=0,true)
        cy.get('.divide').first().click()
        cy.wait(2000)
        cy.get('a > .relative > .flex > svg').click()                     //secret back button
        cy.wait(2000)
        cy.get('.w-full > .flex-1').focus().type('tmkokkm')
        cy.contains('No secret found').should('be.visible')
    })
 

    // it('Delete Secret', ()=> {
   // })



    it('Uncomplete detail Secret Entry', () =>{
        
        cy.get('[href="/configs-secrets/secrets"] > .flex').click({force: true})              // Select secrets
        cy.url().should('include','/configs-secrets/secrets')
         cy.wait(1000)
        cy.get('.w-full > .flex-1').focus().type('test7')
        expect(cy.get('.divide').children().length <=0,true)
        cy.get('.divide').first().click()
        cy.wait(1000)
        cy.contains('Add Enry').focus().click({force: true})                                                               
        cy.contains('Cancel').click()
        cy.contains('Add Enry').focus().click({force: true}) 
        cy.get(':nth-child(2) > .transition-colors').click({force: true})                //TODO: No error show its looking, button is not working
        cy.get('.gap-3 > :nth-child(1) > .flex > .w-full').type('abcdeg')                // key entry
        //cy.get('.gap-3 > :nth-child(2) > .flex > .w-full')                            //TODO: without fill Value entry it accept validation issue
        cy.get(':nth-child(2) > .transition-colors').click({force: true})
        cy.contains('Commit Changes').focus().click()
        cy.contains('got invalid value').should('be.visible')

    })

    it('Complete detail Congfig Entry', () =>{
        cy.get('[href="/configs-secrets/secrets"] > .flex').click({force: true})              // Select secrets
        cy.url().should('include','/configs-secrets/secrets')
         cy.wait(1000)
        cy.get('.w-full > .flex-1').focus().type('test7')
        expect(cy.get('.divide').children().length <=0,true)
        cy.get('.divide').first().click()
        cy.wait(1000)
        cy.contains('Add Enry').focus().click({force: true})                                                               
        cy.contains('Cancel').click()
        cy.contains('Add Enry').focus().click({force: true})  
        cy.get(':nth-child(2) > .transition-colors').click({force: true})                //TODO: No error show its looking, button is not working
        cy.get('.gap-3 > :nth-child(1) > .flex > .w-full').type('abcdeg')                // key entry
        cy.get('.gap-3 > :nth-child(2) > .flex > .w-full').type('2345')                          
        cy.get(':nth-child(2) > .transition-colors').click({force: true})
        cy.contains('Commit Changes').focus().click()
        cy.contains('Secret updated successfully').should('be.visible')

        
    })

it('Duplicate Secret Entry', () =>{
    cy.get('[href="/configs-secrets/secrets"] > .flex').click({force: true})              // Select secrets
    cy.url().should('include','/configs-secrets/secrets')
     cy.wait(1000)
    cy.get('.w-full > .flex-1').focus({force: true}).type('test7')
    expect(cy.get('.divide').children().length <=0,true)
    cy.get('.divide').first().click()
    cy.contains('Add Enry').click({force: true})                                                                                
    cy.contains('Cancel').click()
    cy.contains('Add Enry').click({force: true})
    cy.contains('Create').focus().click() 
    cy.get('[placeholder="Key"]').type('abcdeg')                                          // key entry
    cy.get('.gap-3 > :nth-child(2) > .flex > .w-full').type('2345')                  // Value entry 
    cy.get(':nth-child(2) > .transition-colors').click()
    cy.contains('Commit Changes').click({force: true})
    cy.contains('duplicate key error').should('be.visible')                              ///Duplicate key create

    })
*/
    it('Search config details', () =>{

        cy.get('[href="/configs-secrets/secrets"] > .flex').click({force: true})              // Select secrets
        cy.url().should('include','/configs-secrets/secrets')
         cy.wait(1000)
        cy.get('.w-full > .flex-1').focus({force: true}).type('test7')                        // Search config
        expect(cy.get('.divide').children().length <=0,true)
        cy.get('.divide').first().click()
        cy.contains('Secret: test7', { timeout: 10000 }).should('be.visible')
       /* cy.get('.w-full > .flex-1').focus({force: true}).type('abcd1')                                  //TODO: Search config details- not working
        expect(cy.get('.divide').children().length <=0,true)
        cy.get('.divide').first().click()                                                                        //  Errror
       */cy.wait(1000)
        cy.get(':nth-child(1) > .gap-4 > :nth-child(1) > .flex > .py-2 > .text-lg').click()                  // 3 dots
        cy.contains('Edit Entry').click()                                                                      //Edit Entry
        cy.get('.gap-3 > :nth-child(2) > .flex > .w-full').click().type('xyz')
        cy.contains('Create').click()
        cy.contains('Commit Changes').click({force: true})
        cy.contains('Secret updated successfully').should('be.visible')
        cy.wait(5000)
        cy.get(':nth-child(3) > .gap-4 > :nth-child(1) > .flex > .py-2 > .text-lg').click()                   //3 dots
        cy.contains('Delete Entry').click()                                                                // Delete Entry
        cy.wait(1000)
        cy.contains('Commit Changes').click({force: true})
        cy.contains('Secret updated successfully').should('be.visible')
        cy.wait(5000)
        cy.get(':nth-child(1) > .gap-4 > .p-1 > .text-lg').click()                                       // click config dropdown
        cy.get('.gap-3 > .bg-transparent').focus({force: true}).type('gftrx')                                // Search bar
       
      // Working on it
        //cy.get('div.gap-3 > .gap-4 > .justify-center > svg').focus().click()               copy icon zoom icon









       
       
       
       
       
       



    })

})