describe('Auth', function () {
    it('successful login', function () {
       cy.visit('/user/login');
       cy.get('#normal_login_email')
           .type('anna.krupnovaa@gmail.com')
        cy.get('#normal_login_password')
            .type('123zxc!!')
        cy.get('.login-form-button')
          .click();
       cy.get('.ant-avatar-square')
           .should('be.visible');




    });
});