export const SET_LANGUAGES = 'SET_LANGUAGES';
export const setLanguages = languages => ({
  type: SET_LANGUAGES,
  languages,
});

export const SWAP_PRIMARY_LANGUAGE = 'SWAP_PRIMARY_LANGUAGE';
export const swapPrimaryLanguage = () => ({
  type: SWAP_PRIMARY_LANGUAGE,
})