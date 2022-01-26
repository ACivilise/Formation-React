import { WithAxiosRoute } from "src/reactRouter/paths";


describe('mon premier test', () => {

  beforeEach(() => {
    cy.intercept('GET', '**/users', { fixture: 'users.json' }).as('users');
  });

  it('ceci est un test', () => {
    cy.visit('/');
    cy.get(`#${WithAxiosRoute.replace('/', '')}`).click();
    cy.wait(500);

  });
});

export { };
