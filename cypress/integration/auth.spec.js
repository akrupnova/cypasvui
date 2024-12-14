import LoginPage from '../pages/login.page';
import ProfilePage from '../pages/profile.page';

describe('Auth', function () {
    beforeEach(() => {
        LoginPage.open();
    });

    it('C6: successful log in', function () {
       LoginPage.login('anna.krupnovaa@gmail.com', '123zxc!!');
       ProfilePage.iconAvatar.should('be.visible');
    });

    it('C7: wrong credentials throws error', function () {
        LoginPage.login('wrong@mail.com', 'wrong');
        LoginPage.notification.should('contain.text', 'Auth failed');
    });

    it('C8: email validation error', function () {
        LoginPage.inputEmail.type('wrong');
        LoginPage.emailValidation.should('contain.text', '\'email\' is not a valid email');
    });

    it('C9: email required validation', function ()  {
        LoginPage.inputEmail.type('wrong@wrong.com');
        LoginPage.inputEmail.smartClear();
        LoginPage.emailValidation.should('have.text', 'Required');
    });

    it('C10: password required validation', function ()  {
        LoginPage.inputPassword.type('wrong');
        LoginPage.inputPassword.clear();
        LoginPage.passwordValidation.should('have.text', 'Required');
    });
});
