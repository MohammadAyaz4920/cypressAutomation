describe('My Second Test',()=>{

    it('My Second Test',()=>{

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get("input[placeholder='Username']").type("Admin")
        cy.get("input[placeholder='Password']").type("admin123")
        cy.get("button[type='submit']").click()
        let expName="Seema dsxfcdsff"
        cy.get(".oxd-userdropdown-tab").then((x)=>{
            let actName=x.text()

        //BDD Style
        expect(actName).to.equal(expName)
        expect(actName).to.not.equal(expName)

        //TDD Style
        assert.equal(actName,expName)
        assert.notEqual(actName,expName)
              
        })
    
    })
}
)