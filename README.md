# Flat To Tree

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
    title: "node-1-2"
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
```

## Browser compatibility

- Chrome 60
