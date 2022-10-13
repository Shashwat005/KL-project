
describe('home functionality',function(){

beforeEach ( ()=>  {

    cy.visit('https://auth.kloudlite.io')
    cy.contains('Login With Email').click()
       cy.get('.gap-3 > :nth-child(1) > .flex > .w-full').type('shashwat@plaxonic.com')
       cy.get('.gap-3 > :nth-child(2) > .flex').type('1234567890')
       cy.contains('Sign in').click()
       cy.wait(1000)
       cy.url().should('include','/home')
       cy.wait(1000)
})


    it( 'New project Id', ()=>{
       cy.get('[href="https://accounts.kloudlite.io/accounts/acc-49cslf3qe3bi-fcqyg7shwrnuvqq/create-project"] > .bg-white').click()                  // Create new project block link
       cy.get('.p-8 > .gap-3 > :nth-child(1) > .flex').type('ookm')                     //Create project Name
       cy.get('.gap-3 > :nth-child(2) > .flex > .w-full').clear().type('ookm-123')        // Project id
       cy.get('.css-10bl27q-indicatorContainer').click().click()
       cy.get(':nth-child(4) > .flex > .w-full').type('test')
       cy.get(':nth-child(2) > .transition-colors').click()
       cy.contains('Project created successfully').should('be.visible')
       cy.url().should('include','https://console.kloudlite.io/apps')
       cy.contains('ookm').should('be.visible')

})

    it('Duplicate Project Id', ()=>{
      cy.get('[href="https://accounts.kloudlite.io/accounts/acc-49cslf3qe3bi-fcqyg7shwrnuvqq/create-project"] > .bg-white').click()
      cy.get('.p-8 > .gap-3 > :nth-child(1) > .flex').type('qwert')          //Create project Name
      cy.get('.gap-3 > :nth-child(2) > .flex > .w-full').clear().type('qwert-123')  // Project id
      cy.get('.css-10bl27q-indicatorContainer').click().click()
      cy.get(':nth-child(4) > .flex > .w-full').type('test')
      cy.get(':nth-child(2) > .transition-colors').click()
      cy.contains('duplicate key error').should('be.visible')

})

   it('Project Search',()=>{
      cy.get('.overflow-hidden > .flex-1').focus().type('qwert-123')
      cy.get('[href="/apps/?projectId=proj-0gnvqewsdccc7sorszlkuslti2bu&accountId=acc-49cslf3qe3bi-fcqyg7shwrnuvqq"] > .bg-white > .gap-4 > .flex-col > .font-medium').click()
      cy.url().should('include','https://console.kloudlite.io/apps')
      cy.contains('qwert').should('be.visible')

}) 
     
   it('Account should not be search',()=>{
      cy.get('.overflow-hidden > .flex-1').focus().type('Plaxonic')
      cy.get('.overflow-hidden > .flex-1').focus().clear().type('kmkoijijii')
      cy.contains('No accounts or projects found').should('be.visible')



})



})



