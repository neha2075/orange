class Admin {
   visit() {
      return cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  }

  enterUsername() {
      return cy.get('input[name="username"]').type('Admin')
  }

  enterPassword() {
      return cy.get('input[name="password"]').type('admin123');
  }

  clickLoginButton() {
      return cy.get('button[type="submit"]').click();
  }

  verifyUrl() {
      return cy.url().should('include', '/dashboard/index');
  }

  header() {
      return cy.get('h6').should('contain', 'Dashboard');
  }
}

export default Admin