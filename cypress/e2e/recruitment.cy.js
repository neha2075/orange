import Recruitment from './pageObject/recruitmentPO'
import Admin from "./pageObject/adminPO"
describe('Recruitment', () => {
    let login = new Admin()
    let recruitment = new Recruitment()
    beforeEach('should login and open recruitment tab', () => {
        login.visit(),
            login.username(),
            login.password(),
            login.submit(),
            login.url(),
            login.header()
        recruitment.recuitmentTab()
    })
    it('should search candidates', () => {
        recruitment.jobTitleDropdown()
        recruitment.accountAssistant().contains('Account Assistant').click()
        // recruitment.jobTitleName().click()
        // recruitment.candidateName()
        recruitment.startDateOfApplication()
        recruitment.endDateOfApplication()
        recruitment.keywords()
        recruitment.applyMethod()
        recruitment.applyMethodDropdown()
        recruitment.manual()
        recruitment.searchButton()
        recruitment.resetButton()
    })
    it('should add candidates', () => {
        recruitment.addButton()
        recruitment.addCandidate()
        recruitment.firstName()
        recruitment.middleName()
        recruitment.lastName()
        recruitment.vacancyDropdown()
        // recruitment.email()
        // recruitment.browse()
        recruitment.keywords()
        recruitment.dateOfApplication()
        recruitment.notes()
        recruitment.consentCheckbox()
        recruitment.saveButton()
        recruitment.cancelButton().should('include', '/web/index.php/recruitment/viewCandidates')
    })
    it('should sort candidates in ascending order', () => {
        recruitment.sortAscendingVacancy()
        recruitment.sortAscendingJobTitle()
        recruitment.sortAscendingHiringManager()
        recruitment.sortAscendingDateOfApplication()
        recruitment.sortAscendingStatus()
    })
    it('should sort candidates in descending order', () => {
        recruitment.sortDescendingVacancy()
        recruitment.sortDescendingJobTitle()
        recruitment.sortDescendingHiringManager()
        recruitment.sortDescendingDateOfApplication()
        recruitment.sortDescendingStatus()
    })
    it('should remove candidates', () => {

    })
    it('should edit candidates', () => {

    })
    it('should search vacancies', () => {
        recruitment.vacancyTab()
        recruitment.vacancy()
        recruitment.vacancyDropdown()
        recruitment.hiringManager()
        recruitment.hiringManagerDropdown()
        recruitment.status()
        recruitment.statusDropdown()
        recruitment.searchButton()
        recruitment.resetButton()
    })
    it('should add vacancies', () => {
        recruitment.vacancyTab()
        recruitment.addButton()
        recruitment.addVacancy()
        recruitment.vacancyName()
        recruitment.vacancy()
        recruitment.vacancyDropdown() // this should be Job Title but the code is same for both
        recruitment.notes() // this should be Description
        // recruitment.candidateName() //this should be Hiring Manager
        recruitment.hiringManagerName()
        recruitment.numberOfPositions()
        recruitment.activeCheckboxSwitch()
        recruitment.publishInRssFeedAndWebPage()
        // recruitment.saveButton()
        // recruitment.editVacancy()
        // recruitment.saveButton() // clicking the save Button again leads to the same page
        recruitment.cancelButton().should('include', '/web/index.php/recruitment/viewJobVacancy')
    })
    it.only('should sort vacancies in ascending order', () => {
        recruitment.vacancyTab()
        recruitment.sortAscendingVacancy()
        recruitment.sortAscendingJobTitle()
        recruitment.sortAscendingHiringManager()    //bug
        recruitment.sortAscendingStatus()           //bug
    })
    it('should sort vacancies in descending order', () => {
        recruitment.vacancyTab()
        recruitment.sortDescendingVacancy()
        recruitment.sortDescendingJobTitle()
        recruitment.sortDescendingHiringManager()   //bug
        recruitment.sortDescendingStatus()          //bug
    })
    it('should remove vacancies', () => {

    })
    it('should edit vacancies', () => {

    })
})