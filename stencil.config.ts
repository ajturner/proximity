import { Config } from '@stencil/core';
import '@esri/calcite-components';

export const config: Config = {
  namespace: 'proximity',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader'
    },
    {
      type: 'docs-readme'
    },
    {
      type: 'www',
      serviceWorker: null // disable service workers
    }
  ]
};
