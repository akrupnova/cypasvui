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


});