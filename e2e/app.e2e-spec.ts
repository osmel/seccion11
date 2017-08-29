import { Seccion11Page } from './app.po';

describe('seccion11 App', function() {
  let page: Seccion11Page;

  beforeEach(() => {
    page = new Seccion11Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
