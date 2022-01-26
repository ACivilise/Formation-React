import { NameWithRoutesAdvanced } from "src/allExemples/14.withAll/const"
import { WithAxiosRoute, WithConditionRoute, WithDispatchToChildRoute, WithMapRoute, WithMobxRoute, WithPropsRoute, WithStateRoute, WithUseCallBackRoute, WithUseEffectRoute, WithUseMemoRoute } from "src/reactRouter/paths"


describe('mon premier test', () => {

  it('ceci est un test', () => {
    cy.visit('/');

    cy.customGet(NameWithRoutesAdvanced);

    cy.get(`#${WithPropsRoute.replace('/', '')}`).click();
    cy.wait(500);
    cy.get(`#${WithConditionRoute.replace('/', '')}`).click();
    cy.wait(500);
    cy.get(`#${WithMapRoute.replace('/', '')}`).click();
    cy.wait(500);
    cy.get(`#${WithStateRoute.replace('/', '')}`).click();
    cy.wait(500);
    cy.get(`#${WithUseEffectRoute.replace('/', '')}`).click();
    cy.wait(500);
    cy.get(`#${WithUseMemoRoute.replace('/', '')}`).click();
    cy.wait(500);
    cy.get(`#${WithUseCallBackRoute.replace('/', '')}`).click();
    cy.wait(500);
    cy.get(`#${WithDispatchToChildRoute.replace('/', '')}`).click();
    cy.wait(500);
    cy.get(`#${WithMobxRoute.replace('/', '')}`).click();
    cy.wait(500);


    // cy.customGet(`link-${WithPropsRoute}`).click();


  });
});

export { };
