describe('Getting Started', () => {
  it.skip('should open a web page', () => {
    // browser.url('http://the-internet.herokuapp.com/');
    //browser.url('abtest');
    browser.url('');

    console.log(browser.getUrl());

    browser.pause(5000);
  });

  it.skip('should click something', () => {
    browser.url('');

    var abTestLink = $('#content > ul > li:nth-child(1) > a');
    var availableElements = $('#content > h2');
    var h1Text = $('#content > h1');
    //abTestLink.click();
    console.log('H2 Text: ' + availableElements.getText());
    console.log('link Text: ' + abTestLink.getText());
    console.log('H1 Text: ' + h1Text.getText());
    browser.pause(3000);

    // #content > ul > li:nth-child(1) > a
    // document.querySelector("#content > ul > li:nth-child(1) > a")
    //$("#content > ul > li:nth-child(1) > a")
  });

  it.skip('should check check boxes', () => {
    browser.url('');
    var checkBoxLink = $('#content > ul > li:nth-child(6) > a');
    checkBoxLink.click();

    var checkbox1 = $('#checkboxes > input[type=checkbox]:nth-child(1)');
    var checkbox2 = $('#checkboxes > input[type=checkbox]:nth-child(3)');

    console.log('Check1 before: ' + checkbox1.getAttribute('checked'));
    console.log('Check2 before: ' + checkbox2.getAttribute('checked'));

    checkbox1.click();
    checkbox2.click();

    console.log('Checbox1 after: ' + checkbox1.getAttribute('checked'));
    console.log('Checbox2 after: ' + checkbox2.getAttribute('checked'));

    browser.pause(3000);
  });

  it('should test text field', () => {
    browser.url('');
    var inputLink = $('#content > ul > li:nth-child(27) > a');
    inputLink.click();
    var inputField = $('#content > div > div > div > input[type=number]');
    inputField.setValue('111');
    browser.pause(1000);
    console.log('XXXXXXXX = ' + inputField.getValue());
    inputField.setValue('123');
    browser.pause(3000);
    inputField.clearValue();
    browser.pause(2000);
  });
});
