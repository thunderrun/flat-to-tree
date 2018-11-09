# Flat To Tree

Convert flat array into tree structure. O(n) time complexity.

## Installation

```
npm i flat-to-tree
```

## Example

```javascript
import flatToTree from "flat-to-tree";

const flat = [
  {
    id: 2,
    parentId: 1,
    title: "node-1-2" // any properties
  },
  {
    id: 3,
    parentId: 2,
    title: "node-1-2-3"
  },
  {
    id: 1,
    parentId: null,
    title: "root"
  }
];

const tree = flatToTree(flat);

/*
tree = [
  {
    id: 1,
    parentId: null,
    title: "root",
    children: [
      {
        id: 2,
        parentId: 1,
        title: "node-1-2",
        children: [
          {
            id: 3,
            parentId: 2,
            title: "node-1-2-3",
            children: []
          }
        ]
      }
    ]
  }
];
*/

const flat2 = [
  {
    key: 2,
    pId: 1,
    name: "node-1-2" // any properties
  },
  {
    key: 3,
    pId: 2,
    name: "node-1-2-3"
  },
  {
    key: 1,
    pId: null,
    name: "root"
  }
];

const tree2 = flatToTree(flat2, {
  id: "key",
  parentId: "pId",
  children: "sub"
});

/*
tree2 = [
  {
    key: 1,
    pId: null,
    title: "root",
    sub: [
      {
        key: 2,
        pId: 1,
        title: "node-1-2",
        sub: [
          {
            key: 3,
            pId: 2,
            title: "node-1-2-3",
            sub: []
          }
        ]
      }
    ]
  }
];
*/
```

## API

### `flatToTree(data, [options])`

#### Parameters

- `data: Array`: Flat array to convert
- `options: Object`: Config options:
  - `id: string` : Property name of unique node identifier. Default: 'id'.
  - `parentId: String` : Property name of parent node id. Default: 'parentId'.
  - `children: String` : Property name of an array to store child nodes. Default: 'children'.

#### Return

- `Array`: Converted tree structure

## Browser compatibility

- Chrome 60+

Use Babel for better browser support
