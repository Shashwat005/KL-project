///  <referencec types = "cypress" />

describe("SignIn Validation",() =>
{ 
    beforeEach ( function()  {
      cy.visit("https://auth.kloudlite.io")
     cy.url().should('include','auth.kloudlite.io/login')
     cy.clearCookies()
})

  it("Unvalid Email", function() {
     cy.contains('Login With Email').click()
     cy.get('.gap-3 > :nth-child(1) > .flex > .w-full').type('shashwat@gmail.com')
     cy.get('.gap-3 > :nth-child(2) > .flex').type('Singh!@05')
     cy.contains('Sign in').click()
     cy.contains("not valid credentials").should("be.visible")
     cy.wait(1000)
     
     
 } )
   
 it('Unvalid Password',function () {
  cy.contains('Login With Email').click()
     cy.get('.gap-3 > :nth-child(1) > .flex > .w-full').type('shashwat@plaxonic.com')
     cy.get('.gap-3 > :nth-child(2) > .flex').type('Singh05')
     cy.contains('Sign in').click()
     cy.contains("not valid credentials").should("be.visible")
     cy.wait(1000)

    })

 it('Valid Credentials', function()  {
  cy.contains('Login With Email').click()
     cy.get('.gap-3 > :nth-child(1) > .flex > .w-full').type('shashwat@plaxonic.com')
     cy.get('.gap-3 > :nth-child(2) > .flex').type('1234567890')
     cy.contains('Sign in').click()
     cy.wait(1000)
     cy.url().should('include','/home')
     cy.get('.bg-neutral-100 > svg').click()
     cy.get(':nth-child(5) > a > .gap-2 > .flex').click()     //Logout
     cy.url().should('include','login')




        close()
 })

   /*it('SignIn thriough Github', function() {
    cy.contains('Login with Github').click()
    cy.url().should('include','home')

 })

  it('SignIn thriough Gitlab', function() {
    cy.contains('Login with Gitlab').click()
    cy.url().should('include','home')

 })

   it('SignIn thriough Google', function() {
    cy.contains('Login with Google').click()
    cy.url().should('include','home')

 })

*/



})


