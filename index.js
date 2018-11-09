const flatToTree = (flatArray, options) => {
  const tree = []; // the resulting tree to return
  const dictionary = {}; // a hash table mapping to the specific array objects with their ids as key
  flatArray.forEach(node => {
    // set up current node data in dictionary
    dictionary[node.id] = {
      children: [], // init a children property
      ...node, // add other propertys
      ...dictionary[node.id] // children will be replaced if this node already has children property which was set below
    };
    if (node.parentId) {
      // is parent node
      dictionary[node.parentId] = dictionary[node.parentId] || { children: [] }; // if it's not exist in dictionary, init an object with children property
      dictionary[node.parentId].children.push(dictionary[node.id]); // add reference to current node object in parent node object
    } else {
      // is root node
      tree.push(dictionary[node.id]);
    }
  });
  return tree;
};

export default flatToTree;
