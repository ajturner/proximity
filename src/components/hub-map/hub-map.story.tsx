import readme from './readme.md'
// import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";

// /* hub-map.story.js */
export default function(stories, knobs) {
    const mainEl = document.createElement('div'); // do this OUTSIDE the render function below

    
    stories.add('Map/Hub Map', () => {
      const zoom = knobs.number('zoom', 9);
      const center = knobs.text('center', '[-77, 38.9]');

      mainEl.innerHTML = `<div style="height: 500px"><hub-map center="${center}" zoom="${zoom}"></hub-map></div>`
  
      return mainEl;
    }, { notes: readme });
  }


// export default {
//   title: 'HubMap',
//   decorators: [ withKnobs ],
//   parameters: { notes: readme }
// }

// // Knobs as dynamic variables.
// export const asDynamicVariables = () => {
//   const zoom = number('zoom', 9);
//   const center = text('center', '[-77, 38.9]');

//   return `<div style="height: 500px"><hub-map center="${center}" zoom="${zoom}"></hub-map></div>`;
// };