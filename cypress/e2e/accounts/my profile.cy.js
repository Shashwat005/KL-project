

describe(Functionality,function (){

it('Valid Credentials', function()  {
    cy.visit("https://auth.dev.kloudlite.io")
    cy.url().should('include','auth.dev.kloudlite.io/login')
     cy.contains('Login With Email').click()
       cy.get('.gap-3 > :nth-child(1) > .flex > .w-full').type('shashwat@plaxonic.com')
       cy.get('.gap-3 > :nth-child(2) > .flex').type('1234567890')
       cy.contains('Sign in').click()
       cy.wait(1000)
       cy.url().should('include','/home')
       cy.get('.bg-neutral-100 > svg').click()
       cy.get(':nth-child(5) > a > .gap-2 > .flex').click()
       cy.url().should('include','login')
    close()
   })
})