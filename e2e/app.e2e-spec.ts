import { DentalPage } from './app.po';

describe('dental App', () => {
  let page: DentalPage;

  beforeEach(() => {
    page = new DentalPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
