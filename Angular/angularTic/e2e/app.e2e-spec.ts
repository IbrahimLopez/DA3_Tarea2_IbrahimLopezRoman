import { AngularTicPage } from './app.po';

describe('angular-tic App', function() {
  let page: AngularTicPage;

  beforeEach(() => {
    page = new AngularTicPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
