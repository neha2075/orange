class Recruitment {

    recuitmentTab() {
        return cy.get(".oxd-main-menu-item--name").contains('Recruitment').click().url().should('include', '/recruitment/viewCandidates')
    }

    vacancyTab() {
        return cy.get(".oxd-topbar-body-nav-tab-item").contains('Vacancies').click({ force: true }).url().should('include', '/recruitment/viewJobVacancy')
    }

    jobTitle() {
        // return cy.get('oxd-select-text--arrow').select('Account Assisstant').click();
        return cy.get('.oxd-select-text-input:first').should('be.visible')
    }

    jobTitleDropdown() {
        return cy.get('.oxd-select-text--active:first').click()
    }

    accountAssistant() {
        return cy.get('.oxd-select-dropdown')
        // return cy.get('.oxd-select-dropdown').contains('Account Assistant')
        //yo contains lai dynamic kasari banaune?
    }

    jobTitleName() {
        // return cy.get('.oxd-select-dropdown').then(($jobTitle)=>{
        //     const jobTitles = $jobTitle
        //     const job = 'Account Assistant'
        //     expect(jobTitles).eq(job)
        // })
        // const job = 'Account Assistant'
        return cy.get('.oxd-select-dropdown > :nth-child(2) > span') ||
            cy.get('.oxd-select-dropdown > :nth-child(3) > span')
    }

    candidateName() {
        const inputCandidateName = cy.get('.oxd-autocomplete-text-input').type('a')
        return inputCandidateName.and(cy.get('.oxd-autocomplete-dropdown > :nth-child(1) > span').click({ force: true })).get('.oxd-layout-context').click()
        //this throws out a chainers split is not a function error
    }

    startDateOfApplication() {
        // const start = cy.get('.oxd-input oxd-input--active') 
        // return cy.get('.oxd-date-input').and(cy.get('.oxd-input'))
        return cy.get('input[placeholder="From"]').click().get('.--offset-4 > .oxd-calendar-date').click()
    }

    endDateOfApplication() {
        // const end = cy.get('input[placeholder="To"]') 
        return cy.get('input[placeholder="To"]').click().get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input-calendar > .oxd-calendar-wrapper > .oxd-calendar-dates-grid > :nth-child(3) > .oxd-calendar-date').click()
    }

    applyMethod() {
        return cy.get('.oxd-select-text-input:last').should('be.visible')
    }

    applyMethodDropdown() {
        return cy.get('.oxd-select-text--active:last').click()
    }

    manual() {
        return cy.get('.oxd-select-dropdown').contains('Manual').click()
        //yo contains lai dynamic kasari banaune?
    }

    online() {
        return cy.get('.oxd-select-dropdown').contains('Online').click()
        //yo contains lai dynamic kasari banaune?
    }

    searchButton() {
        return cy.get('.orangehrm-left-space').click({ force: true })
    }

    resetButton() {
        return cy.get('button[type="reset"]').click({ force: true })
    }

    addButton() {
        return cy.get('.orangehrm-header-container > .oxd-button').click({ force: true })
    }

    addCandidate() {
        return cy.get('h6').should('contain', 'Add Candidate').url().should('include', '/addCandidate')
    }

    firstName() {
        return cy.get('input[name="firstName"]').type('Jay')
    }

    middleName() {
        return cy.get('input[name="middleName"]').type('Man')
    }

    lastName() {
        return cy.get('input[name="lastName"]').type('Shrestha')
    }

    vacancyDropdown() {
        return cy.get('.oxd-select-text--active:first').click().get(':nth-child(5) > span').click()
    }

    email() {
        return cy.get('input[fdprocessedid="gyfcpk"]').type('jay@gmail.com')
        return cy.get('.data-v-2fe357a6').type('jay@gmail.com')
        //Same class name for multiple input feilds
    }

    browse() {
        return cy.get('.oxd-file-div--active').click({ force: true })
        //How does this work?
    }

    keywords() {
        return cy.get('input[placeholder="Enter comma seperated words..."]').type('new,hr,associate')
    }

    dateOfApplication() {
        return cy.get('input[placeholder="yyyy-mm-dd"]').click().get('.--offset-4 > .oxd-calendar-date').click()
    }

    notes() {
        return cy.get('.oxd-textarea--resize-vertical').type('lorem impsum')
    }

    consentCheckbox() {
        return cy.get('.oxd-checkbox-input').click()
    }

    saveButton() {
        return cy.get('button[type="submit"]').click()
    }

    cancelButton() {
        return cy.get('.oxd-button--ghost').click().url()
    }

    sortAscendingVacancy() {
        var heading = cy.get('h6')
        if (heading == 'Add Candidate') {
            return cy.get(':nth-child(2) > .oxd-table-header-sort > .bi-arrow-down-up').click({ force: true }).get('.--active > ul > :nth-child(1) > .oxd-text').click()
        }
        else
            return cy.get(':nth-child(2) > .oxd-table-header-sort > .oxd-icon-button__icon').click({ force: true }).get('.--active > ul > :nth-child(1) > .oxd-text').click()
    }

    sortDescendingVacancy() {
        var heading = cy.get('h6')
        if (heading == 'Add Candidate')
            return cy.get(':nth-child(2) > .oxd-table-header-sort > .bi-arrow-down-up').click({ force: true }).get('.--active > ul > :nth-child(2) > .oxd-text').click()
        else
            return cy.get(':nth-child(2) > .oxd-table-header-sort > .oxd-icon-button__icon').click({ force: true }).get('.--active > ul > :nth-child(2) > .oxd-text').click()
    }

    sortAscendingJobTitle() {
        return cy.get(':nth-child(3) > .oxd-table-header-sort > .bi-arrow-down-up').click({ force: true }).get('.--active > ul > :nth-child(1) > .oxd-text').click()
    }

    sortDescendingJobTitle() {
        return cy.get(':nth-child(3) > .oxd-table-header-sort > .bi-arrow-down-up').click({ force: true }).get('.--active > ul > :nth-child(2) > .oxd-text').click()
    }

    sortAscendingHiringManager() {
        return cy.get(':nth-child(4) > .oxd-table-header-sort > .bi-arrow-down-up').click({ force: true }).get('.--active > ul > :nth-child(1) > .oxd-text').click()
    }

    sortDescendingHiringManager() {
        return cy.get(':nth-child(4) > .oxd-table-header-sort > .bi-arrow-down-up').click({ force: true }).get('.--active > ul > :nth-child(2) > .oxd-text').click()
    }

    sortAscendingDateOfApplication() {
        return cy.get(':nth-child(5) > .oxd-table-header-sort > .bi-arrow-down-up').click({ force: true }).get('.--active > ul > :nth-child(1) > .oxd-text').click()
    }

    sortDescendingDateOfApplication() {
        return cy.get(':nth-child(5) > .oxd-table-header-sort > .bi-arrow-down-up').click({ force: true }).get('.--active > ul > :nth-child(2) > .oxd-text').click()
    }

    sortAscendingStatus() {
        var heading = cy.get('h6')
        if (heading == 'Add Candidate')
            return cy.get(':nth-child(6) > .oxd-table-header-sort > .bi-arrow-down-up').click({ force: true }).get('.--active > ul > :nth-child(1) > .oxd-text').click()
        else
            return cy.get(':nth-child(5) > .oxd-table-header-sort > .bi-arrow-down-up').click({ force: true }).get('.--active > ul > :nth-child(1) > .oxd-text').click()
    }

    sortDescendingStatus() {
        var heading = cy.get('h6')
        if (heading == 'Add Candidate')
            return cy.get(':nth-child(6) > .oxd-table-header-sort > .bi-arrow-down-up').click({ force: true }).get('.--active > ul > :nth-child(2) > .oxd-text').click()
        else
            return cy.get(':nth-child(5) > .oxd-table-header-sort > .bi-arrow-down-up').click({ force: true }).get('.--active > ul > :nth-child(2) > .oxd-text').click()
    }

    vacancy() {
        return cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').should('be.visible').click()
    }

    vacancyDropdown() {
        return cy.get('.oxd-select-dropdown > :nth-child(2) > span').click()
    }

    hiringManager() {
        return cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').should('be.visible').click()
    }

    hiringManagerDropdown() {
        return cy.get('.oxd-select-dropdown > :nth-child(2) > span').click()
    }

    status() {
        return cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').should('be.visible').click()
    }

    statusDropdown() {
        return cy.get('.oxd-select-dropdown > :nth-child(2) > span').click()
    }

    addVacancy() {
        return cy.get('h6').should('contain', 'Add Vacancy').url().should('include', '/addJobVacancy')
    }

    vacancyName() {
        return cy.get('.oxd-form > :nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').type('HR')
    }

    hiringManagerName() {
        const inputCandidateName = cy.get('.oxd-autocomplete-text-input').type('a')
        return inputCandidateName.get('.oxd-autocomplete-dropdown > :nth-child(1) > span').click({ force: true }).get('.oxd-layout-context').click()
    }

    numberOfPositions() {
        return cy.get('.oxd-grid-2 > .oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input').type('4')
    }

    activeCheckboxSwitch() {
        return cy.get(':nth-child(4) > .oxd-grid-item > .oxd-switch-wrapper > label > .oxd-switch-input').click()
    }

    publishInRssFeedAndWebPage() {
        return cy.get(':nth-child(6) > .oxd-grid-item > .oxd-switch-wrapper > label > .oxd-switch-input').click()
    }

    editVacancy() {
        return cy.get('h6').should('contain', 'Edit Vacancy').url().should('include', '/addJobVacancy')
    }

}
export default Recruitment