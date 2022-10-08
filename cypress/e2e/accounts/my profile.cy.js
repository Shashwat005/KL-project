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
   cy.get(':nth-child(1) > .p-8 > .gap-3 > .flex-col > .flex > .w-full').clear().type('Singh')
   cy.contains('Save changes').click()
   cy.wait(1000)

//Your Email change
   cy.get(':nth-child(2) > .p-8 > .gap-3 > .flex-col > .flex > .w-full').clear().type('abc@mailinator.com')
   cy.get(':nth-child(2) > .bg-neutral-50 > .justify-between > :nth-child(2) > .transition-colors').click()
   cy.wait(1000)
     
// Delete Account
   cy.get(':nth-child(4) > .bg-neutral-50 > .justify-between > :nth-child(2) > .transition-colors').click()
   cy.contains('Successfully Deete').should('be.visible')
 cy.wait(1000)

   })

it('Devices Section',function() {

    cy.contains('Devices').click()
    cy.url().should('include','device')
    cy.contains('Add Devices').click()
    cy.get('.gap-6 > .flex-col > .flex > .w-full').type('apd')  // Change the type value all time before running
    cy.contains('Cancel').click()
    cy.contains('Add Devices').click()
    cy.get('.gap-6 > .flex-col > .flex > .w-full').type('aop')
    cy.get('.bg-neutral-50 > .justify-between > :nth-child(2) > .transition-colors').click()
    cy.contains('Device added successfully').should('be.visible')
    cy.contains('aop').should('be.visible')

    cy.get('.css-10bl27q-indicatorContainer').select('Cutr').should('have.value','Cutr')  // Select Account dropdown

// TODO: device detail verification pending 


    })

it('Login Connection',function(){

   cy.get('[href="/profile/login-connections"] > .flex').click()
   cy.url(),should('include','login-connection')
    
// TODO: Not complete


})

// Password Change

it('Wrong Old Password',function(){
   cy.contains('Password').click()
   cy.url().should('include','Password')
   cy.get('.gap-3 > :nth-child(1) > .flex > .w-full').type('3478983467')          // Enter Wrong Old Password
   cy.get('.gap-3 > :nth-child(2) > .flex > .w-full').tyype('bhb679834')       // New Password
   cy.get('.gap-3 > :nth-child(3) > .flex > .w-full').type('bhb679834')       // Confirm Password
   cy.get(':nth-child(2) > .transition-colors').click()                         // Update Password
   cy.contains('Password change successfully').should('be.visible')
   cy.wait(1000)
})

 it ('Correct Old Passord',function() {
   cy.contains('Password').click()
   cy.url().should('include','password')
   cy.get('.gap-3 > :nth-child(1) > .flex > .w-full').type('123456789');            //  Enter Correct Old Password
   cy.get('.gap-3 > :nth-child(2) > .flex > .w-full').type('mkonj654321')        // New Password
   cy.get('.gap-3 > :nth-child(3) > .flex > .w-full').type('mkonj7654321')       // Confirm Password
   cy.get(':nth-child(2) > .transition-colors').click()                            // Update Password
   cy.contains('Shhould be correct old password').should('be.visible')
   cy.wait(1000)

   

   
 
 })


})