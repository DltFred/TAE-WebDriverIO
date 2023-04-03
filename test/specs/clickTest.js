
describe('Excercise test clicking',()=>{
  it('button is clicked', async()=>{
    await browser.url('http://uitestingplayground.com/click');
    await expect(browser).toHaveTitleContaining('Click');
  
    const $button = $('#badButton');
    $button.waitForExist();
    await $button.click();

    //when we click the button the button going to be background = green
    $button.waitForDisplayed({ timeout: 5000, reverse: true });
    const buttonClicked = await $button.getCSSProperty('background-color')
    const isClicked = await expect(buttonClicked.value).toEqual('rgba(0,255,0,1)')
  
  });
})

