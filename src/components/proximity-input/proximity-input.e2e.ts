import { newE2EPage } from '@stencil/core/testing';

describe('hub-proximity-input', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<hub-proximity-input></hub-proximity-input>');

    const element = await page.find('hub-proximity-input');
    expect(element).toHaveClass('hydrated');
  });
});
