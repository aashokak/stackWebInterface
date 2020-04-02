'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {


  it('should automatically redirect to /stackApp when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/stackApp");
  });


  describe('stackApp', function() {
    var buttons = element.all(by.css('button'));
    var stackSizeElement = element(by.model('ctrl.stackSize'));
    var insertElement = element(by.model('ctrl.newItem'));

    beforeEach(function() {
      browser.get('index.html#!/stackApp');
    });


    it('should display Application name', function() {
       expect(element(by.css('centerAlign')).getText()).toBe('Simple Stack with Web Interface');
    });

    it('should display all the buttons', function() {
      expect(buttons.get(0).getText()).
        toBe('Display Items');
      expect(buttons.get(1).getText()).
        toBe('Delete Item');
      expect(buttons.get(2).getText()).
        toBe('Insert Item to be added');
    });

    it('should validate all the buttons are disabled', function() {
      var buttons = element.all(by.css('button'));
      expect(buttons.get(0).getAttribute('disabled')).
        toEqual('disabled');
      expect(buttons.get(1).getAttribute('disabled')).
        toEqual('disabled');
      expect(buttons.get(2).getAttribute('disabled')).
        toEqual('disabled');  
    });

    it('should verify form fields and verify stack push', function() {
      expect(stackSizeElement.isPresent()).toBeTruthy();
      stackSizeElement.sendKeys(2);
      buttons.get(2).click();
      expect(insertElement.isPresent()).toBeTruthy();
      expect(buttons.get(3).getText()).
        toBe('Add Item to the stack');
      insertElement.sendKeys(1);
      buttons.get(3).click(); 
      expect(buttons.get(3).getText()).
        toBe('Click here to add more');
    });

    it('should verify display', function() {
      // As an element is already added in previous spec, will add only one lement now
      insertElement.clear().sendKeys(2);
      buttons.get(0).click();
      expect(element(by.css('.stackForm-infoText')).isPresent()).toBeTruthy();
      expect(insertElement.isPresent).toBeFalsy();
      expect(buttons.get(3).isPresent).toBeFalsy();
    });

    it('should verify stack overflow', function() {
      insertElement.clear().sendKeys(3);
      buttons.get(0).click();
      expect(element(by.css('.stackForm-infoText')).isPresent()).toBeTruthy();
      expect(insertElement.isPresent).toBeFalsy();
      expect(buttons.get(3).isPresent).toBeFalsy();
      expect(element(by.css('.stackForm-warningText')).isPresent()).toBeFalsy();
    });

    it('should verify stack pop', function() {
      // Click pop button 2 times
      buttons.get(1).click();      
      buttons.get(1).click();
      // Click display button to verify there are no items being displayed
      buttons.get(0).click();
      expect(element(by.css('.stackForm-infoText')).isPresent()).toBeFalsy();
    });

  });
});
