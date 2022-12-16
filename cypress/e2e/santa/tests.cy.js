/// <reference types="cypress" />

context("example to enter the site", () => {
  before(() => {
    cy.visit("https://staging.lpitko.ru");
  });

  it("displays the site", () => {
    cy.get(".header-item__text span").should("be.visible");
  });
});
