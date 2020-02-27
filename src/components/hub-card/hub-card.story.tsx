import readme from './readme.md'

export default function(stories, knobs) {
    const mainEl = document.createElement('div'); // do this OUTSIDE the render function below

    stories.add('Hub Card', () => {
      const layout = knobs.select('layout', ['horizontal', 'vertical'], 'vertical');

      mainEl.innerHTML = `<hub-card layout=${layout}"></hub-card>`
  
      return mainEl;
    }, { notes: readme });
}