import { v4 as uuidv4 } from 'uuid';

// a little function to help us with reordering the result
export const reorderDnD = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

// Moves an item from library to editor.
export const moveFromLibToEditor = (source, destination, droppableSource, droppableDestination) => {
  const sourceClone = Array.from(source);
  const destClone = Array.from(destination);

  const index = droppableSource.index;
  const removed = sourceClone[index.groupIndex]?.blocks[index.itemIndex];

  destClone.splice(droppableDestination.index, 0, {...removed, id: uuidv4()});
  return destClone;
};

// Removes an item from editor.
// export const removeDnD = (source, droppableSource) => {
//   const sourceClone = Array.from(source);
//   sourceClone.splice(droppableSource.index, 1);
//
//   return sourceClone;
// };


export const getMenuByGroupAndBlocks = (groups, blocks) => {
  const menuObject = {};
  Object.keys(groups).forEach(groupKey => { menuObject[groupKey] = { name: groups[groupKey], blocks: [] }})
  Object.keys(blocks).forEach(blockKey => {
    const blockGroup = blockKey.split('::')[1];
    if (menuObject[blockGroup]) {
      menuObject[blockGroup].blocks = [...menuObject[blockGroup].blocks, { id: uuidv4(), block: blockKey }];
    }
  });
  return Object.values(menuObject).map(menu => ({ id: uuidv4(), ...menu }))
}