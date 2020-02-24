# hub-suggest-input



<!-- Auto Generated Below -->


## Properties

| Property      | Attribute     | Description                                             | Type       | Default                               |
| ------------- | ------------- | ------------------------------------------------------- | ---------- | ------------------------------------- |
| `extent`      | `extent`      | Geographic extent limit for geocoding                   | `any`      | `undefined`                           |
| `placeholder` | `placeholder` | Value for input placeholder                             | `string`   | `'Search...'`                         |
| `query`       | `query`       | Default search                                          | `string`   | `''`                                  |
| `submit`      | `submit`      | Value for submit button                                 | `string`   | `'Search'`                            |
| `suggestions` | --            | Values that the auto-complete textbox should search for | `string[]` | `['Alpha', 'Beta', 'Gamma', 'Delta']` |


## Events

| Event         | Description                         | Type               |
| ------------- | ----------------------------------- | ------------------ |
| `queryInput`  |                                     | `CustomEvent<any>` |
| `querySelect` | Emits the query of the input result | `CustomEvent<any>` |


## Dependencies

### Used by

 - [hub-radar-input](../radar-input)
 - [hub-search](../search)

### Graph
```mermaid
graph TD;
  hub-radar-input --> hub-suggest-input
  hub-search --> hub-suggest-input
  style hub-suggest-input fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
