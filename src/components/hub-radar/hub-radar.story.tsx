import readme from './readme.md'

/* radar-map.story.js */
export default function(stories, knobs) {
    const mainEl = document.createElement('div'); // do this OUTSIDE the render function below

    
    stories.add('Hub Radar', () => {
      const webmap = knobs.text('webmap', '2e725f2d5b7640b28121af931048894c');
      const address = knobs.text('address', '4321 12th St NE');
      const showmap = knobs.boolean('Show Map', true)
      // const type = knobs.select('Type', ['flat', 'outline'], 'flat');
      // const color = knobs.select('Color', ['default', 'primary', 'secondary'], 'default');
  
      mainEl.innerHTML = `<hub-radar showmap=${showmap} webmap="${webmap}" address="${address}">
      <strong style="margin-left: 8px;" slot="before-input">Search your DC address</strong>
      <!-- <em slot="before-results">Local information</em> -->
      <em slot="after-results">Visit <a href="https://opendata.dc.gov">OpenData</a></em>
    </hub-radar>`
  
      return mainEl;
    }, { notes: readme });
  }