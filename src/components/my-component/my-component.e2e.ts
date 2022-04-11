import { newE2EPage } from '@stencil/core/testing';

describe('my-component', () => {
  it('testing the event', async () => {
    const page = await newE2EPage();
    
    await page.setContent('<my-component></my-component>');
    const element = await page.find('my-component');
    expect(element).toHaveClass('hydrated');
    const eventSpy = await element.spyOnEvent("doEvent");
    element.setProperty("last","updated")
    
    await page.waitForChanges();
    
    expect(eventSpy).toHaveReceivedEvent();
    const keys = Object.keys(eventSpy.lastEvent.detail);
    //THESE WILL SUCCEED
    expect(keys).toContain("foo");
    expect(keys).toContain("test");
    //THESE WILL FAIL
    expect(keys).toContain("successHandler");
    expect(keys).toContain("errorHandler");
  });
});
