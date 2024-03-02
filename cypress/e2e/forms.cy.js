describe("Form tests", () => {
  beforeEach(() => {
    cy.visit("/forms");
  });
  it("Test Subscribe form", () => {
    cy.getDataTest("formpage-header").should("contain.text",'Testing Forms');
    cy.getDataTest('subscribe-form').find('input').as('subscribe-input')
    cy.get('@subscribe-input').type('srinu123@gmail.com');
    cy.contains(/Successfully subbed: srinu123@gmail.com!/i).should('not.exist')
    cy.getDataTest('subscribe-button').click();
    cy.contains(/Successfully subbed: srinu123@gmail.com!/i).should('exist')
    cy.wait(3000);
    cy.contains(/Successfully subbed: srinu123@gmail.com!/i).should('not.exist')

    cy.get('@subscribe-input').type('srinurach.io');
    cy.contains(/invalid email: srinurach.io!/i).should('not.exist');
    cy.getDataTest('subscribe-button').click();
    cy.contains(/invalid email: srinurach.io!/i).should('exist');
    cy.wait(3000);
    cy.contains(/invalid email: srinurach.io!/i).should('not.exist');
    
    cy.contains(/fail!/i).should('not.exist');
    cy.getDataTest('subscribe-button').click();
    cy.contains(/fail!/i).should('exist');

  });
});
