describe("framework",()=>{

    it("framework",()=>{

        cy.visit("https://www.rahulshettyacademy.com/angularpractice/")
        cy.get("input[name='name']:nth-child(2)").type("Mohammad Ayaz")
        cy.get('input[name="email"]').type('ayazm726@gmail.com')
        cy.get('#exampleInputPassword1').type('Ayaz@123')
        cy.get('select').select('Female')
       
        cy.get("input[name='name']:nth-child(1)").should('have.value','Mohammad Ayaz')
    })
})