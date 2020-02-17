import { newE2EPage } from '@stencil/core/testing';

describe('hub-proximity-map', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<hub-proximity-map></hub-proximity-map>');

    const element = await page.find('hub-proximity-map');
    expect(element).toHaveClass('hydrated');
  });
});
