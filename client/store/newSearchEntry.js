/* -----------------    ACTION TYPES ------------------ */

const WRITE_SEARCH_WORD = 'WRITE_SEARCH_WORD'

/* ------------   ACTION CREATORS     ------------------ */

export function writeSearchWord (searchWord) {
  const action = { type: WRITE_SEARCH_WORD, searchWord }
  return action
}

/* ------------       REDUCER     ------------------ */

export default function reducer (search = '', action) {
  switch (action.type) {
    case WRITE_SEARCH_WORD:
      return action.searchWord
    default:
      return search
  }
}
