import ComponentPo from '@/cypress/integration/po/components/component.po';

export default class AsyncButtonPO extends ComponentPo {
  click(): Cypress.Chainable {
    return this.self().click();
  }
}
