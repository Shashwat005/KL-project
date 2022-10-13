

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
           cy.get('[href="/configs-secrets"] > .relative').click()                            //Select config & secrets

    })

 /*       it('New Config Create', () => {
             
              cy.get('[href="/configs-secrets/configs"] > .w-full').click({force: true})                   //select configs
              cy.url().should('include','/configs-secrets/configs')
              cy.wait(1000)
              cy.contains('Create Config').focus().click({force: true})      
              cy.get('.bg-neutral-50 > .justify-between > :nth-child(2) > .transition-colors').click()      //Submit
              cy.contains('contain only lowercase').should('be.visible')
              cy.get('.justify-between > .flex-1 > .transition-colors > .flex').click()                                          // Cancel
              cy.contains('Create Config').click({force: true}) 
              cy.get('.gap-3 > :nth-child(1) > .flex > .w-full').type('test00')         //   Config Name
              cy.get('.gap-3 > :nth-child(2) > .flex > .w-full').type('Cool')
              cy.get('.bg-neutral-50 > .justify-between > :nth-child(2) > .transition-colors').click()
              cy.contains('Entry created successfully').should('be.visible')

        })

       it('Duplicate Config', ()=>{

        cy.get('[href="/configs-secrets/configs"] > .w-full').click({force: true})                   //select configs
        cy.url().should('include','/configs-secrets/configs')
        cy.wait(1000)
        cy.contains('Create Config').click({force: true})      
        cy.get('.bg-neutral-50 > .justify-between > :nth-child(2) > .transition-colors').click()      //Submit
        cy.contains('contain only lowercase').should('be.visible')
        cy.get('.justify-between > .flex-1 > .transition-colors > .flex').click()                                          // Cancel
        cy.contains('Create Config').click({force: true}) 
        cy.get('.gap-3 > :nth-child(1) > .flex > .w-full').type('test1')         //   Config Name
        cy.get('.gap-3 > :nth-child(2) > .flex > .w-full').type('Cool')
        cy.get('.bg-neutral-50 > .justify-between > :nth-child(2) > .transition-colors').click()
        cy.contains('duplicate key error').should('be.visible')


       })

    it('Search Config', ()=>   { 

        cy.get('.w-full > .flex-1').focus().type('test1')
        expect(cy.get('.divide').children().length <=0,true)
        cy.get('.divide').first().click()
        cy.wait(1000)
        cy.get('a > .relative > .flex > svg').click()              //back button
        cy.wait(1000)
        cy.get('.w-full > .flex-1').focus().type('tmkokkm')
        cy.contains('No configs found').should('be.visible')
    })
 

    // it('Delete Config', ()=> {

    Working on it
   // })



    it('Uncomplete detail Congfig Entry', () =>{

        cy.get('.w-full > .flex-1').focus().type('test1')
        expect(cy.get('.divide').children().length <=0,true)
        cy.get('.divide').first().click()
        cy.wait(1000)
        cy.contains('Add Enry').focus().click({force: true})                                                              
        cy.contains('Cancel').click()
        cy.wait(1000)
        cy.contains('Add Enry').focus().click({force: true}) 
        cy.contains('Create').focus().click()                                             //TODO: No error show its looking, button is not working
         cy.wait(1000)
        cy.get('.gap-3 > :nth-child(1) > .flex > .w-full').type('abcdhg')             // key entry
        cy.get('.gap-3 > :nth-child(2) > .flex > .w-full')                            //TODO: without fill Value entry it accepted, validation issue
        cy.get(':nth-child(2) > .transition-colors').click({force: true})                  // Create button
        cy.contains('Commit Changes').focus().click({force: true})
        cy.contains('got invalid value').should('be.visible')

    })

    it('Complete detail Congfig Entry', () =>{

        cy.get('.w-full > .flex-1').focus({force: true}).type('test1')
        expect(cy.get('.divide').children().length <=0,true)
        cy.get('.divide').first().click()
        cy.contains('Add Enry').click({force: true})                                                  //TODO:Spelling mistake Entry       
        cy.contains('Cancel').click()
        cy.wait(1000)
        cy.contains('Add Enry').click({force: true})
        cy.contains('Create').focus().click()                                           //TODO: No error show its looking, button is not working
        cy.wait(1000)
        cy.get('.gap-3 > :nth-child(1) > .flex > .w-full').type('abcd')                                   // key entry
        cy.get('.gap-3 > :nth-child(2) > .flex > .w-full').type('123456')                  // Value entry 
        cy.get(':nth-child(2) > .transition-colors').click()
        cy.contains('Commit Changes').click({force: true})
        cy.contains('Config updated successfully').should('be.visible')

        
    })

    it('Duplicate Congfig Entry', () =>{

        cy.get('.w-full > .flex-1').focus({force: true}).type('test1')
        expect(cy.get('.divide').children().length <=0,true)
        cy.get('.divide').first().click()
        cy.contains('Add Enry').click({force: true})                                                                                
        cy.contains('Cancel').click()
        cy.contains('Add Enry').click({force: true})
        cy.contains('Create').focus().click() 
        cy.get('[placeholder="Key"]').type('abcd')                                 // key entry
        cy.get('.gap-3 > :nth-child(2) > .flex > .w-full').type('123456')                  // Value entry 
        cy.get(':nth-child(2) > .transition-colors').click()
        cy.contains('Commit Changes').click({force: true})
        cy.contains('duplicate key error').should('be.visible')                      //Duplicate key create

    })
*/
    it('Search config details', () =>{

        cy.get('.w-full > .flex-1').focus({force: true}).type('test1')                        // Search config
        expect(cy.get('.divide').children().length <=0,true)
        cy.get('.divide').first().click()
        cy.contains('Config: test1', { timeout: 10000 }).should('be.visible')
       /* cy.get('.w-full > .flex-1').focus({force: true}).type('abcd1')                                  //TODO: Search config details- not working
        expect(cy.get('.divide').children().length <=0,true)
        cy.get('.divide').first().click()                                                                        //  Errror
       */cy.wait(1000)
        cy.get(':nth-child(1) > .gap-4 > :nth-child(1) > .flex > .py-2 > .text-lg').click()                  // 3 dots
        cy.contains('Edit Entry').click()                                                                      //Edit Entry
        cy.get('.gap-3 > :nth-child(2) > .flex > .w-full').click().type('xyz')
        cy.contains('Create').click()
        cy.contains('Commit Changes').click({force: true})
        cy.contains('Config updated successfully').should('be.visible')
        cy.wait(5000)
        cy.get(':nth-child(3) > .gap-4 > :nth-child(1) > .flex > .py-2 > .text-lg').click()                   //3 dots
        cy.contains('Delete Entry').click()                                                                // Delete Entry
        cy.wait(1000)
        cy.contains('Commit Changes').click({force: true})
        cy.contains('Config updated successfully').should('be.visible')
        cy.wait(5000)
        cy.get(':nth-child(1) > .gap-4 > .p-1 > .text-lg').click()                                       // click config dropdown
        cy.get('.gap-3 > .bg-transparent').focus({force: true}).type('gftrx')                                // Search bar
       
      // Working on it
        cy.get('div.gap-3 > .gap-4 > .justify-center > svg').focus().click()   




       
       
    
       
       
       



    })

})

