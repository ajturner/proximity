import readme from './readme.md'

/* radar-map.story.js */
export default function(stories, knobs) {
    const mainEl = document.createElement('div'); // do this OUTSIDE the render function below

    
    stories.add('Hub Follow Button', () => {
      const clientid = knobs.text('clientid', 'QVQNb3XfDzoboWS0');
      const initiativeid = knobs.text('initiativeid', '6f28b477336b46a889c16e4ceb61791e');
      
      // const type = knobs.select('Type', ['flat', 'outline'], 'flat');
      // const color = knobs.select('Color', ['default', 'primary', 'secondary'], 'default');
  
      mainEl.innerHTML = `<hub-follow-button class="child" clientid="${clientid}" initiativeid="${initiativeid}" orgurl="https://cityx.maps.arcgis.com"> </hub-follow-button>`
  
      return mainEl;
    }, { notes: readme });
  }