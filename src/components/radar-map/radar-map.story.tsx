import readme from './readme.md'

/* radar-map.story.js */
export default function(stories, knobs) {
    const mainEl = document.createElement('div'); // do this OUTSIDE the render function below

    
    stories.add('RadarMap', () => {
      const zoom = knobs.number('zoom', 9);
      // const type = knobs.select('Type', ['flat', 'outline'], 'flat');
      // const color = knobs.select('Color', ['default', 'primary', 'secondary'], 'default');
  
      mainEl.innerHTML = `<div style="height: 500px"><hub-radar-map center="[-77, 38.9]" zoom="${zoom}"></hub-radar-map>testing</div>`
      // mainEl.innerHTML = `<custom-button type="${type}" color="${color}">${buttonContent}</custom-button>`;
  
      return mainEl;
    }, { notes: readme });
  }