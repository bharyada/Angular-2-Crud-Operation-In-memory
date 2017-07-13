import { ACMEPage } from './app.po';

describe('acme App', () => {
  let page: ACMEPage;

  beforeEach(() => {
    page = new ACMEPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
