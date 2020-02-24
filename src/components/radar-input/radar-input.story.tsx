// /* radar-map.story.js */
// export default function(stories, knobs) {
//     const mainEl = document.createElement('div'); // do this OUTSIDE the render function below
  
//     knobs: {
//       // This will result in the following call to knobs:
//       // knobs.number('b-number', 46, { range: true, min: 46, max: 47, step: 1 });
//       'zoom': {
//         type: 'number',
//         args: [16, { range: true, min: 1, max: 20, step: 1 }]
//       }
//     },

    
//     stories.add('radar-map', () => {
//       mainEl.innerHTML = '';
//       /** 
//       * Append things to the mainEl here. You can insert knob values
//       * anywhere you want.
//       */
//       return mainEl;
//     });
//   }

/* radar-map.story.js */
import readme from './readme.md'
export default {
    notes: readme,

    knobs: {
      // This will result in the following call to knobs:
      // knobs.number('b-number', 46, { range: true, min: 46, max: 47, step: 1 });
      'address': {
        type: 'text',
        args: ['']
      }
    },
    states: [
        {
            title: 'Search by address',
            description: 'Recommends locations within the geographic extent.',
            props: {
              address: '1600 Pennsylvania Ave',
              extent: '[[-77.24, 38.80], [-76.86, 38.99]]'
            }
          }
    ]

  }