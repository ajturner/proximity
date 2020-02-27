# hub-radar



<!-- Auto Generated Below -->


## Properties

| Property      | Attribute       | Description | Type      | Default     |
| ------------- | --------------- | ----------- | --------- | ----------- |
| `address`     | `address`       |             | `string`  | `undefined` |
| `mapCenter`   | `map-center`    |             | `string`  | `undefined` |
| `mapItem`     | `map-item`      |             | `any`     | `undefined` |
| `mapItemData` | `map-item-data` |             | `any`     | `undefined` |
| `mapZoom`     | `map-zoom`      |             | `number`  | `undefined` |
| `messages`    | `messages`      |             | `any`     | `undefined` |
| `showmap`     | `showmap`       |             | `boolean` | `true`      |
| `webmap`      | `webmap`        |             | `string`  | `undefined` |


## Dependencies

### Depends on

- [hub-input](../hub-input)
- [hub-map](../hub-map)
- calcite-loader
- [hub-card](../hub-card)

### Graph
```mermaid
graph TD;
  hub-radar --> hub-input
  hub-radar --> hub-map
  hub-radar --> calcite-loader
  hub-radar --> hub-card
  hub-input --> hub-suggest-input
  style hub-radar fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
