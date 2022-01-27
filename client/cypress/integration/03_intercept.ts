import { WithAxiosRoute } from 'src/4.reactRouter/paths';
import { UserDescription } from 'src/5.axios/models/types';

describe('mon premier test', () => {

  it('ceci est un test', () => {
    cy.intercept('GET', '**/users', { fixture: 'users.json' }).as('users');
    cy.visit('/');
    cy.get(`#${WithAxiosRoute.replace('/', '')}`).click();
    cy.wait('@users');
    cy.wait(500);
    let index = 0;
    cy.fixture('users.json').then((users: UserDescription[]) => {
      users.forEach((user) => {
        cy.customGet(`test-${index}`).contains(user.info.firstName);
        index++;
      })
    })
  });
});

export { };
