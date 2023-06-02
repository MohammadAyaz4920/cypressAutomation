class login {

    setUserName(username)
    {
        cy.get("#ap_email").type(username)
       

    }

    usernamesubmit()
    {
        cy.get('#continue').click()
        
    }

    setpassword(password)
    {
        cy.get('#ap_password').type(password)
        
    }

    passwordsubmit()
    {
        cy.get('.a-button-input').click()
       
    }
}

   export default login;