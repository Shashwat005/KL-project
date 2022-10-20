///  <referencec types = "cypress" />

describe("signUp Flow",() =>
{ 
    beforeEach ( function()  {
      cy.visit("https://auth.kloudlite.io")
     cy.url().should('include','auth.kloudlite.io/login')
     cy.clearCookies()

    })
it('existing email',function()
{
    cy.contains('Sign Up').click()
    cy.contains('SignUp With Email').click()
    cy.get('.flex-col.items-center > :nth-child(1) > .transition-colors > .flex').click() // back button
    cy.contains('SignUp With Email').click()
    cy.wait(1000)
    cy.get('.gap-3 > :nth-child(1) > .flex > .w-full').type('shtt')
    cy.get('.gap-3 > :nth-child(2) > .flex > .w-full').type('shashwat@plaxonic.com')
    cy.get(':nth-child(3) > .flex > .w-full').type(123456789)
    cy.get(':nth-child(4) > .flex > .w-full').type(123456789)
    cy.contains('Sign Up').click()
    cy.contains('user registration failed because user(email=shashwat@plaxonic.com) already exists').should('be.visible')
    cy.url().should('include','signup')

})
it('New email',function()
{
    cy.contains('Sign Up').click()
    cy.contains('SignUp With Email').click()
    cy.get('.flex-col.items-center > :nth-child(1) > .transition-colors > .flex').click()  // back button
    cy.contains('SignUp With Email').click()
    cy.get('.gap-3 > :nth-child(1) > .flex > .w-full').type('shtt')
    cy.get('.gap-3 > :nth-child(2) > .flex > .w-full').type('spf@mailinator.com')
    cy.get(':nth-child(3) > .flex > .w-full').type(123456789)
    cy.get(':nth-child(4) > .flex > .w-full').type(123456789)
    cy.contains('Sign Up').click()
    cy.contains('Successfully registered').should('be.visible')
    cy.url().should('include','email')
    cy.wait(1000)
    cy.contains('Resend verification email').click()
    cy.contains('sent you a new verification email').should('be.visible')

  
    
   

   




})

})