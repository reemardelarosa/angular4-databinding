import { CpmDatabindingWipPage } from './app.po';

describe('cpm-databinding-wip App', function() {
  let page: CpmDatabindingWipPage;

  beforeEach(() => {
    page = new CpmDatabindingWipPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
