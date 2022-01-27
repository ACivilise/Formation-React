import { NameWithRoutesAdvanced } from 'src/7.allExemples/7.1.withAll/const';
import {
  WithAxiosRoute,
  WithConditionRoute,
  WithDispatchToChildRoute,
  WithMapRoute,
  WithMobxRoute,
  WithPropsRoute,
  WithStateRoute,
  WithUseCallBackRoute,
  WithUseEffectRoute,
  WithUseMemoRoute,
} from 'src/4.reactRouter/paths';

describe('mon premier test', () => {
  it('ceci est un test', () => {
    cy.visit('/');

    cy.customGet(NameWithRoutesAdvanced);
    const pages = [WithPropsRoute, WithConditionRoute, WithMapRoute, WithStateRoute, WithUseEffectRoute];
    pages.forEach((page) => {
      cy.customGet(page.replace('/', '')).click();
      cy.wait(500);
    })
  });
});

export { };
