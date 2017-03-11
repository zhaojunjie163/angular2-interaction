import { Angular2InteractionPage } from './app.po';

describe('angular2-interaction App', () => {
  let page: Angular2InteractionPage;

  beforeEach(() => {
    page = new Angular2InteractionPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
