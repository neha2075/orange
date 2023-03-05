import Admin from './pageObject/adminPo'
import Recruitment from './pageObject/recruitmentPO'


describe('Admin', () => {

let admin = new Admin()
let recruitment = new Recruitment()


  it('verify the presence of the admin tab', () => {
    admin.visit();
    admin.enterUsername();
    admin.enterPassword();
    admin.clickLoginButton();
    admin.verifyUrl();
    
  })
})