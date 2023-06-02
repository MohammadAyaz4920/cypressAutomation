describe('text validation',()=>{

    it('text validation',()=>{

        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('.search-keyword').type('ca')
        cy.wait(3000)
        cy.get('.product').should('have.length',5)
        //parent child chaining
        cy.get('.products').find('.product').should('have.length',4)
        cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click()
        cy.get('.products').find('.product').each(($e1, index, $list)=>{

            const textveg=$e1.find('h4.product-name').text()
                if(textveg.includes('Cashews'))
                {
                    cy.wrap($e1).find('button').click()
                }


        })

    })
})