///  <referencec types = "cypress" />

describe ('fogot flow', function(){

  beforeEach(function()  {
      cy.visit('https://auth.kloudlite.io/login')
      cy.clearCookies() 
  })
  

  it('Unregistered email',function(){
    cy.contains('Login With Email').click()
    cy.contains('Forgot Password').click()
    cy.contains('We will send you reset instructions to registered email.', { timeout: 10000 }).should('be.visible');
    cy.url().should('include','forgot-password')
    cy.get('.gap-3 > .flex-col > .flex > .w-full').type("shashwat@gmail.com")
    cy.contains('Send Reset Instruction').click()
    cy.contains('Email id deoes not exist').should('be.visible')
    cy.url().should('include','forgot-password')

  })

   it('Registered email',function(){
       cy.contains('Login With Email').click()
     cy.contains('Forgot Password').click()
  cy.contains('We will send you reset instructions to registered email.', { timeout: 10000 }).should('be.visible')
  cy.url().should('include','forgot-password')
     cy.get('.gap-3 > .flex-col > .flex > .w-full').type('shashwat@plaxonic.com')
     cy.contains('Send Reset Instruction').click()
     cy.contains('Password reset email sent').should('be.visible')
     cy.url().should('include','reset-email-sent')

     close()

    
  
  
   })
  
  
  })