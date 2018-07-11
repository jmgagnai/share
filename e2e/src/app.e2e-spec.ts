import { AppPage } from './app.po';

var fs = require('fs');
 
// abstract writing screen shot to a file
function writeScreenShot(data, filename) {
    var stream = fs.createWriteStream(filename);
    stream.write(new Buffer(data, 'base64'));
    stream.end();
}



describe('workspace-project App', () => {
  let page: AppPage;
  let self = this;
  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', (done) => {

    // simple protractor test
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
    // end test

    // set window size for screenshot
    browser.driver.manage().window().setSize(800, 600);
    // set browser zoom factor for screenshot
    browser.executeScript("document.body.style.zoom='100%';");

    
    // capture the web page and end the test
    browser.takeScreenshot().then(function (png) {
        writeScreenShot(png, 'screenshot2.png');
    }).then(done(), done()); 
    
  });
});
