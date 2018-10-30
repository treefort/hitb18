import { createSelector } from 'reselect'

import { getDisplayLanguages } from 'selectors/languages';

const getContent = ({ content }) => content;

export const getContentById = createSelector(
  getContent,
  getDisplayLanguages,
  (state, id) => id,
  (content, languages, id) => {
    return languages.reduce(
      (allLanguages, lang) => ({
        ...allLanguages,
        [lang]: content[id][lang],
      }), {})
  }
);

window.addEventListener('storage', data => console.warn(data), false);
