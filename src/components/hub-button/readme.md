# hub-button

Simple button that can be used in other components. 

<!-- Auto Generated Below -->


## Properties

| Property | Attribute | Description                                  | Type       | Default                       |
| -------- | --------- | -------------------------------------------- | ---------- | ----------------------------- |
| `action` | --        | action to trigger when the button is clicked | `Function` | `function() { return 'foo' }` |
| `icon`   | `icon`    | Icon to display alongside the text           | `any`      | `undefined`                   |
| `text`   | `text`    | Button text to display                       | `string`   | `"Click Me"`                  |


## Dependencies

### Used by

 - [hub-card](../hub-card)
 - [hub-follow-button](../hub-follow-button)

### Graph
```mermaid
graph TD;
  hub-card --> hub-button
  hub-follow-button --> hub-button
  style hub-button fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
