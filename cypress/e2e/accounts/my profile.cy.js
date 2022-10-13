///  <referencec types = "cypress" />

describe('Check Functionality',function (){

beforeEach (function()  {
    cy.visit("https://auth.kloudlite.io")
    cy.url().should('include','auth.kloudlite.io/login')
     cy.contains('Login With Email').click()
       cy.get('.gap-3 > :nth-child(1) > .flex > .w-full').type('shashwat@plaxonic.com')
       cy.get('.gap-3 > :nth-child(2) > .flex').type('1234567890')
       cy.contains('Sign in').click()
       cy.wait(1000)
       cy.url().should('include','/home')
       cy.get('.bg-neutral-100 > svg').click()   // Account dropdown click
       cy.contains('My Profile').click()
       cy.contains('Accounts').click()
       cy.url().should('include','accounts')
       cy.contains('Profile').click()
       cy.url().should('include','profile')
       cy.wait(1000)
})
    
it( 'General Section', function() {

   cy.url().should('include','profile')

//Profile Name change
cy.get('.gap-3 > :nth-child(1) > .border').contains('Shashwat Singh')

//Your Email change
cy.get('.gap-3 > :nth-child(2) > .border').contains('shashwat@plaxonic.com')

//User Id
cy.get(':nth-child(3) > .border > div').contains('usr-u9ie-da-s9ekvsl6a4kvqc3md0m3')
     
//Login Conection
cy.get(':nth-child(1) > .gap-1 > .transition-colors').click()                                     //Github  button click
cy.wait(2000)
cy.get(':nth-child(2) > .gap-1 > .transition-colors').click()                                    //Gitlab button click

 
   })

it('Devices Section',function() {

    cy.contains('Devices').click()
    cy.url().should('include','device')
    //cy.get('.css-10bl27q-indicatorContainer').click()                          // Select Account dropdown
    //cy.get('. css-yxvrel-singleValue').contains('plaxonic').click()           // Select account
    cy.contains('Add Devices').click({force: true})
    cy.get('.gap-6 > .flex-col > .flex > .w-full').type('apd')                                      // Change the type value all time before running
    cy.contains('Cancel').click()
   cy.contains('Add Devices').focus().click({force: true})
    cy.get('.gap-6 > .flex-col > .flex > .w-full').clear().type('aopklf')
    cy.get('.bg-neutral-50 > .justify-between > :nth-child(2) > .transition-colors').click()
    cy.contains('Device added successfully').should('be.visible')
    cy.wait(1000)
    cy.contains('aopklf').should('be.visible')
    
    })

          it('Duplicate Devices Create ',function() {

              cy.contains('Devices').click()
              cy.url().should('include','device')
            //cy.get('.css-10bl27q-indicatorContainer').click()                          // Select Account dropdown
            //cy.get('. css-yxvrel-singleValue').contains('plaxonic').click()           // Select account
             cy.contains('Add Devices').click({force: true})
             cy.get('.gap-6 > .flex-col > .flex > .w-full').type('apd')                                     
             cy.contains('Cancel').click()
             cy.contains('Add Devices').focus().click({force: true})
             cy.get('.gap-6 > .flex-col > .flex > .w-full').clear().type('aop')                                 // Change the type value all time before running
             cy.get('.bg-neutral-50 > .justify-between > :nth-child(2) > .transition-colors').click()
              cy.contains('duplicate key error').should('be.visible')
      
      })
  
                it('device details verifiv=cation',function(){
                     cy.contains('Devices').click()
                     cy.url().should('include','device')
                    cy.contains('aop').click()
                     cy.get('.relative > .outline-none').clear().type('aooph')          //Existing name
                     cy.contains('Update').click({force: true})
                     cy.contains('name already occupied').should('be.visible')
                     cy.wait(6000)
                                             
                          cy.get('.relative > .outline-none').focus({force: true}).clear().type('aoola')        //New Name                         
                          cy.contains('Update').click({force: true})
                          cy.contains('Name updated').should('be.visible')
                         // cy.contains('aoola').click({force: true})
                     //cy.get('[style="transform: none;"] > .flex > .absolute').click()          //region update  
                    // cy.contains('Region Update').should('be.visible')
                     cy.contains('aoola').click({force: true}) 
                     cy.get('[placeholder="Port"]').type('12')                               // Port
                          cy.get('[placeholder="TargetPort"]').type('14')                        // Target Port
                          cy.get('.justify-end > .transition-colors').click({force: true})
                          cy.contains('Port added').should('be.visible')
                          cy.wait(1000)
                          cy.reload()
                           
})

// Password Change

it('Wrong Old Password',function(){
   cy.contains('Password').click()
   cy.url().should('include','password')
   cy.get('.gap-3 > :nth-child(1) > .flex > .w-full').type('3478983467')          // Enter Wrong Old Password
   cy.get('.gap-3 > :nth-child(2) > .flex > .w-full').type('bhb679834')       // New Password
   cy.get('.gap-3 > :nth-child(3) > .flex > .w-full').type('bhb679834')       // Confirm Password
   cy.get(':nth-child(2) > .transition-colors').click()                         // Update Password
   cy.contains('invalid credentials').should('be.visible')
   cy.wait(1000)
})

 it ('Correct Old Passord',function() {
   cy.contains('Password').click()
   cy.url().should('include','password')
   cy.get('.gap-3 > :nth-child(1) > .flex > .w-full').type('1234567890');            //  Enter Correct Old Password
   cy.get('.gap-3 > :nth-child(2) > .flex > .w-full').type('123456789')        // New Password
   cy.get('.gap-3 > :nth-child(3) > .flex > .w-full').type('123456789')       // Confirm Password
   cy.get(':nth-child(2) > .transition-colors').click()                            // Update Password
   cy.contains('Password changed successfully').should('be.visible')
   cy.wait(3000) 

   cy.reload()
   cy.get('.gap-3 > :nth-child(1) > .flex > .w-full').type('1234567890');            //  Enter Correct Old Password
   cy.get('.gap-3 > :nth-child(2) > .flex > .w-full').type('123456789')        // New Password
   cy.get('.gap-3 > :nth-child(3) > .flex > .w-full').type('123456789')       // Confirm Password
   cy.get(':nth-child(2) > .transition-colors').click()                            // Update Password
   cy.contains('Password changed successfully').should('be.visible')

   cy.url().should('include','password')                        //forgot button check
   cy.get('a > .transition-colors > .flex').click()
   cy.url().should('include','forgot-password')

 })


})