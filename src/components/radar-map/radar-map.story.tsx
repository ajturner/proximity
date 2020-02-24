import readme from './readme.md'

/* radar-map.story.js */
export default function(stories, knobs) {
    const mainEl = document.createElement('div'); // do this OUTSIDE the render function below

    
    stories.add('radar-map', () => {
      const zoom = knobs.text('number', 9);
      // const type = knobs.select('Type', ['flat', 'outline'], 'flat');
      // const color = knobs.select('Color', ['default', 'primary', 'secondary'], 'default');
  
      mainEl.innerHTML = `<div style="height: 500px"><hub-radar-map center="[-77, 38.9]" zoom="${zoom}"></hub-radar-map>testing</div>`
      // mainEl.innerHTML = `<custom-button type="${type}" color="${color}">${buttonContent}</custom-button>`;
  
      return mainEl;
    }, { notes: readme });
  }

// /* radar-map.story.js */
// import readme from './readme.md'
// export default {
//   notes: readme,

//   knobs: {
//     // This will result in the following call to knobs:
//     // knobs.number('b-number', 46, { range: true, min: 46, max: 47, step: 1 });
//     'zoom': {
//       type: 'number',
//       args: [16, { range: true, min: 1, max: 20, step: 1 }]
//     }
//   },
//   states: [        
//     // {
//     //   title: 'Here it is in a different state',
//     //   description: ' Note, the knobs only affect the "default" state at the top.',
//     //   props: {
//     //     zoom: 12
//     //   }
//     // },
//     // {
//     //   title: 'This is yet another state',
//     //   description: 'Note, the knobs only affect the "default" state at the top.',
//     //   props: {
//     //     zoom: 2
//     //   }
//     // }
//   ]
// }