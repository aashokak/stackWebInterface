'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {


  it('should automatically redirect to /stackApp when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/stackApp");
  });


  describe('stackApp', function() {

    beforeEach(function() {
      browser.get('index.html#!/stackApp');
    });


    it('should render stackApp when user navigates to /stackApp', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 1/);
    });

  });
});
