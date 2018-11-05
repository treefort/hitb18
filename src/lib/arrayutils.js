import { isArray, clamp } from 'lodash';

const isArrayAlright = yourGloriousArray => {
  if (!isArray(yourGloriousArray)) {
    console.warn(`This is not an array: ${ yourGloriousArray }.`);
    return false;
  }
  return true;
}

export const getNextIndex = (currentIndex, yourGloriousArray, loop = false) => {
  if (!isArrayAlright(yourGloriousArray)) return 0;
  const lastIndex = yourGloriousArray.length - 1;
  const nextIndex = currentIndex + 1;
  
  return nextIndex > lastIndex ?
    (loop ? 0 : lastIndex) 
    : 
    nextIndex;
}

export const getPreviousIndex = (currentIndex, yourGloriousArray, loop = false) => {
  if (!isArrayAlright(yourGloriousArray)) return 0;
  const lastIndex = yourGloriousArray.length - 1;
  const previousIndex = currentIndex - 1;
  
  return previousIndex < 0 ?
    (loop ? lastIndex : 0) 
    : 
    previousIndex;
}