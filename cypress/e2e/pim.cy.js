import Admin from './pageObject/adminPo'
import PIM from './pageObject/pimPO'


describe('PIM', () => {
  let admin = new Admin()
  let pim = new PIM()

  it('should successfully login', () => {
    admin.visit();  
    admin.enterUsername();
    admin.enterPassword();
    admin.clickLoginButton();
   admin.verifyUrl();
   admin.header();
    
   // pim.clickPIM();
   
   pim.checkPIM();
  });
  it.only('should display employee information', () => {
    admin.visit();  
    admin.enterUsername();
    admin.enterPassword();
    admin.clickLoginButton();
   admin.verifyUrl();
   admin.header();
    
   pim.checkPIM();
   
   
    // pim.AddemployeeTab();
   
    // pim.ReportTab();
    pim.employeetab();
    pim.employeeName();
    pim.employeeId();
  
    pim.employmentDropdown()
    pim.search();

    
    
   // pim.clickPIM();
   
   
  });
});