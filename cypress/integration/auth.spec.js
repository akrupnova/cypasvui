import LoginPage from '../pages/login.page';
import ProfilePage from '../pages/profile.page';

describe('Auth', function () {
    beforeEach(() => {
        LoginPage.open();
    });

    it('successful log in', function () {
       LoginPage.login('anna.krupnovaa@gmail.com', '123zxc!!');
       ProfilePage.iconAvatar.should('be.visible');
    });

    it('wrong credentials throws error', function () {
        LoginPage.login('wrong@mail.com', 'wrong');
        LoginPage.notification.should('contain.text', 'Auth failed');
    });

    it('email validation error', function () {
        LoginPage.inputEmail.type('wrong');
        LoginPage.emailValidation.should('contain.text', '\'email\' is not a valid email');
    });

    it('email required validation', function ()  {
        LoginPage.inputEmail.type('wrong@wrong.com');
        LoginPage.inputEmail.smartClear();
        LoginPage.emailValidation.should('have.text', 'Required');
    });

    it('password required validation', function ()  {
        LoginPage.inputPassword.type('wrong');
        LoginPage.inputPassword.clear();
        LoginPage.passwordValidation.should('have.text', 'Required');
    });
});
