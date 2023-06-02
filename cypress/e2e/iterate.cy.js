describe("iterate",()=>{

    it("iterate",()=>{

        cy.visit("https://www.jiomart.com/c/groceries/2?prod_mart_groceries_products_popularity%5Bpage%5D=2")
        cy.selectProduct('Surf Excel Easy Wash Detergent Powder 5 kg')
        cy.selectProduct('Maaza Mango Drink 1.2 L')

            
    })
})