export const ADD_PHRASE = "ADD_PHRASE";
export const DELETE_PHRASE = "DELETE_PHRASE";

const reducer = (state, action) => {
  // state = phraseList (./App.js)
  switch(action.type) {
    case ADD_PHRASE: 
      if(action.phrase.length < 20) {
        alert("Ops... phrases of less than 20 characters are not allowed.")
        return state
      }
      if(state.includes(action.phrase)) {
        alert("Duplicated phrases are not allowed.")
        return state
      }
      return [...state, action.phrase]

    case DELETE_PHRASE: 
      return state.filter(
        currentPhrase => { 
          return currentPhrase !== action.phrase
        }
      )

    default:
      return state;
  }
}

export default reducer
