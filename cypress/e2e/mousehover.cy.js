describe('mouse hover', ()=>{

    it('mouse hover',()=>{

        cy.visit('https://www.flipkart.com/')
        cy.wait(4000)
        cy.get('.xtXmba').each(($el,index,$list)=>{

            if($el.text()==="Fashion")
            {
                cy.wrap($el).trigger('mouseover');
                cy.contains('Kids').click()
                
            }
            cy.url()
        })
        

    })
})