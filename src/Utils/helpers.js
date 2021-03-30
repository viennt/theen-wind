import { v4 as uuidv4 } from 'uuid';

// a little function to help us with reordering the result
export const reorderDnD = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

// Moves an item from library to editor.
export const moveDnD = (source, destination, droppableSource, droppableDestination) => {
  const sourceClone = Array.from(source);
  const destClone = Array.from(destination);
  const [removed] = sourceClone.splice(droppableSource.index, 1);

  destClone.splice(droppableDestination.index, 0, {...removed, id: uuidv4()});

  return {
    [droppableSource.droppableId]: source,
    [droppableDestination.droppableId]: destClone
  };
};

// Removes an item from editor.
export const removeDnD = (source, droppableSource) => {
  const sourceClone = Array.from(source);
  const [] = sourceClone.splice(droppableSource.index, 1);

  return sourceClone;
};
