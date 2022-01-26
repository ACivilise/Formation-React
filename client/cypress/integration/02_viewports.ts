import { NameWithRoutesAdvanced } from "src/allExemples/14.withAll/const";
import { WithPropsRoute, WithConditionRoute, WithMapRoute, WithStateRoute, WithUseEffectRoute, WithUseMemoRoute, WithUseCallBackRoute, WithDispatchToChildRoute, WithMobxRoute } from "src/reactRouter/paths";


describe('mon premier test', () => {

  it('ceci est un test où on change de taille d\'écran', () => {
    cy.viewport('iphone-6');
    cy.visit('/');
    cy.customGet(NameWithRoutesAdvanced);
    cy.get(`#${WithPropsRoute.replace('/', '')}`).click();
    cy.wait(500);
    cy.get(`#${WithConditionRoute.replace('/', '')}`).click();
    cy.wait(500);
    cy.viewport('macbook-16');
    cy.get(`#${WithMapRoute.replace('/', '')}`).click();
    cy.wait(500);
    cy.get(`#${WithStateRoute.replace('/', '')}`).click();
    cy.wait(500);
    cy.viewport('samsung-note9');
    cy.get(`#${WithUseEffectRoute.replace('/', '')}`).click();
    cy.wait(500);
    cy.get(`#${WithUseMemoRoute.replace('/', '')}`).click();
    cy.wait(500);
    cy.get(`#${WithUseCallBackRoute.replace('/', '')}`).click();
    cy.wait(500);
    cy.viewport('iphone-8');
    cy.get(`#${WithDispatchToChildRoute.replace('/', '')}`).click();
    cy.wait(500);
    cy.get(`#${WithMobxRoute.replace('/', '')}`).click();
    cy.wait(500);
  });
});

export { };
