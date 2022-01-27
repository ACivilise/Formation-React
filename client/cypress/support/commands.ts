Cypress.Commands.add('customGet', (name: string): any => {
  return cy.get(`[data-cy="${name}"]`);
});

export {};
