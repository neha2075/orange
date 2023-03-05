class PIM {

    checkPIM(){
        return cy.get('.oxd-main-menu-item--name').contains('PIM').click()
    }
   
    // AddemployeeTab() {
    //     return cy.get('.oxd-topbar-body-nav > ul > :nth-child(3)').click().url().should('include', '/pim/addEmployee')
    // }
    
    employeetab() {
        return cy.get('.oxd-topbar-body-nav-tab-item').contains('Employee List').click().url().should('include', '/pim/viewEmployeeList')

    }
    // ReportTab() {
    //     return cy.get(".oxd-topbar-body-nav-tab-item").contains('Reports').click().url().should('include', '/pim/viewDefinedPredefinedReports')
    // }
    search(){
        return cy.get('.orangehrm-left-space').click({force:true})
    }

     employeeName(){
      return cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-autocomplete-wrapper > .oxd-autocomplete-text-input > input').type('a').get('.oxd-autocomplete-dropdown > :nth-child(1) > span').click()
    }

    employeeId(){
        return cy.get(':nth-child(2) > .oxd-input').type('0002').click();
    }

    employmentDropdown() {
        return cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click({force:true}).get('.oxd-select-dropdown').contains('Full-Time Permanent').click()
     
    }
    includeDropdown(){
        return cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click({force:true}).get('.oxd-select-dropdown').contain('Past Employees Only').click()
    }


   
    


   




}

export default PIM