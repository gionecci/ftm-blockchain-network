import { AngularTestPage } from './app.po';
import { browser, element, by } from 'protractor';

describe('Starting tests for ftm-app', function() {
  let page: AngularTestPage;

  beforeEach(() => {
    page = new AngularTestPage();
  });

  it('website title should be ftm-app', () => {
    page.navigateTo('/');
    return browser.getTitle().then((result)=>{
      expect(result).toBe('ftm-app');
    })
  });

  it('navbar-brand should be ftm-blockchain-network@0.0.1',() => {
    var navbarBrand = element(by.css('.navbar-brand')).getWebElement();
    expect(navbarBrand.getText()).toBe('ftm-blockchain-network@0.0.1');
  });

  
    it('BankAccountAsset component should be loadable',() => {
      page.navigateTo('/BankAccountAsset');
      var assetName = browser.findElement(by.id('assetName'));
      expect(assetName.getText()).toBe('BankAccountAsset');
    });

    it('BankAccountAsset table should have 4 columns',() => {
      page.navigateTo('/BankAccountAsset');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(4); // Addition of 1 for 'Action' column
      });
    });

  

});
