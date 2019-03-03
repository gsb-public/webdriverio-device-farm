describe('gsbpublic experience page', function() {
  it('should have the right title', function () {

    browser.url('https://gsb.stanford.edu/experience');

    const title = browser.getTitle();
    console.log('Title was: ' + title);

    browser.saveDocumentScreenshot(process.env.DEVICEFARM_SCREENSHOT_PATH + '/exp-page.png');
    console.log('After screenshot');

  });
});