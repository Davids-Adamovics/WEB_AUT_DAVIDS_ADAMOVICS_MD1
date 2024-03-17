import { SelectablePage } from "../pageObjects/selectable.page";

describe("DemoQA", () => {
  context("Grid", () => {
    beforeEach(() => {
      SelectablePage.visit();
    });

    it("Grid", () => {
      //selects the grid
      SelectablePage.selectGrid.click();
      // selects two,Four,Six,Eight
      SelectablePage.selectSquare("Two").click();
      SelectablePage.selectSquare("Four").click();
      SelectablePage.selectSquare("Six").click();
      SelectablePage.selectSquare("Eight").click();
      // check if buttons are active(blue)
      SelectablePage.selectSquare("Two").should('have.class', 'active');
      SelectablePage.selectSquare("Four").should('have.class', 'active');
      SelectablePage.selectSquare("Six").should('have.class', 'active');
      SelectablePage.selectSquare("Eight").should('have.class', 'active');
      // check if buttons are not active(grey)
      SelectablePage.selectSquare("One").should('not.have.class', 'active');
      SelectablePage.selectSquare("Three").should('not.have.class', 'active');
      SelectablePage.selectSquare("Five").should('not.have.class', 'active');
      SelectablePage.selectSquare("Seven").should('not.have.class', 'active');
      SelectablePage.selectSquare("Nine").should('not.have.class', 'active');
    });
  })
})