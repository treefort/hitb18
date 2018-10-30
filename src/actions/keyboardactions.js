export const HANDLE_KEYPRESS = 'HANDLE_KEYPRESS'
export function handleKeypress({ key, shiftKey, ctrlKey }) {
  return {
    type: HANDLE_KEYPRESS,
    key,
    shiftKey,
    ctrlKey,
  }
}
