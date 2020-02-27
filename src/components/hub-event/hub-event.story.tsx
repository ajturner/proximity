import readme from './readme.md'

/* hub-event.story.js */
export default function(stories, knobs) {
    const mainEl = document.createElement('div'); // do this OUTSIDE the render function below

    
    stories.add('Hub Event', () => {
      const clientid = knobs.text('clientid', 'QVQNb3XfDzoboWS0');
      const eventtitle = knobs.text('Event Title', 'Maryland Ave NE Streetscape Project Groundbreaking');
      
      // const type = knobs.select('Type', ['flat', 'outline'], 'flat');
      // const color = knobs.select('Color', ['default', 'primary', 'secondary'], 'default');
  
      mainEl.innerHTML = `<hub-event class="child" clientid="${clientid}" eventtitle="${eventtitle}"></hub-event>`
  
      return mainEl;
    }, { notes: readme });
  }