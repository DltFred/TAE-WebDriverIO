
describe('my awesome website', () => {
    before('optional description', async () => {
        console.log("runs once before the first test in this block")
        await browser.url('https://webdriver.io')
    });

    after('optional description', async () => {
        console.log("runs once after the last test in this block")
    });

    beforeEach('optional description', async () => {
        console.log("runs before each test in this block")
       
    });

    afterEach('optional description', async () => {
        console.log("uns after each test in this block")
    });

    it('should do some assertions', async () => {
        await expect(browser).toHaveUrl('https://webdriver.io');
        await expect(browser).toHaveUrlContaining('webdriver');
        await expect(browser).toHaveTitle('WebdriverIO · Next-gen browser and mobile automation test framework for Node.js | WebdriverIO');
        await expect(browser).toHaveTitleContaining('WebdriverIO');
    })

    it('Expect', async () => {

        const elem = $("//a[text()='Why WebdriverIO?']")
        await elem.waitForClickable();
        await expect(elem).toBeDisplayed();
        await expect(elem).toExist();
        await expect(elem).toBePresent();
        await expect(elem).toBeClickable();
        await expect(elem).toBeDisabled();
    })


    it('expect the same title with chai', async () => {
        expectChai(await browser.getTitle()).to.equal('WebdriverIO · Next-gen browser and mobile automation test framework for Node.js | WebdriverIO');
    })

    it('test case 3', async () => {
        // ...
    });

    it.only('test case 3', async () => {
        // ...
    });

    it.skip('test case 4', async () => {
        // ...
    }); 
    
    it('pending');
})