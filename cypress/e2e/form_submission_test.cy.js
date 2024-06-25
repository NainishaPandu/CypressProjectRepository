describe("Form Submission Test", () => {
  it("Submit the details in the form", () => {
    //cy.viewPort(1440,900)
    //Navigate to the URL by using cy.visit
    cy.visit(
      "https://docs.google.com/forms/d/e/1FAIpQLScPfEbpaoUu3WVwSDM9wIFX5uo1XQ1xpuHNtP7cF_rkR-o8Zg/viewform"
    );
    //In the form, enter your name in the “Your Name” field.
    cy.get(".whsOnd").type("Nainisha Pandu");
    //Select the “18 and above” radio button.
    cy.get("#i12.Od2TWd").click();
    //Select “Yes” from the “Do you exercise every week?” dropdown.
    cy.get('div[class="e2CuFe eU809d"]').click();
    cy.get('div[role="option"]').contains("Yes").click();
    //Submit the form.
    cy.get('div[role="button"]').contains("Submit").click();
    //Verify that the form submission is successful (look for a confirmation message or achange in the URL).
    cy.url().should("include", "formResponse");
    cy.contains("our response has been recorded.").should("be.visible");
  });
});
