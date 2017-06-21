import { GuitarAppPage } from './app.po';

describe('guitar-app App', () => {
  let page: GuitarAppPage;

  beforeEach(() => {
    page = new GuitarAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
