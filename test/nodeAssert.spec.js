const InternetPage = require('../pages/internet.page');
const InputsPage = require('../pages/inputs.page');
const assert = require('assert');

describe('Node Assertion Test', () => {
  it.skip('should display correct text for headings', () => {
    browser.url('');

    assert.equal(
      InternetPage.mainHeadingText.getText(),
      'Welcome to the-internet',
      "The heading text doesn't match"
    );
  });

  it('should navigate to new page and enter some text', () => {
    browser.url('');
    InternetPage.inputsLink.click();
    //console.log('XXXXXXXXXXXXX' + InputsPage.inputField.getText());

    assert.equal(
      browser.getUrl(),
      'http://the-internet.herokuapp.com/inputs',
      'The URL are not the same'
    );

    // Check if initial value is empty
    assert.equal(InputsPage.inputField.getValue(), '', 'The value is not null');

    InputsPage.inputField.setValue('8');
    assert.equal(InputsPage.inputField.getValue(), '9', 'The value is not 9');
  });
});
