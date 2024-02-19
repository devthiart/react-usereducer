import './App.css';
import { useReducer, useState } from 'react';
import reducer, { ADD_PHRASE, DELETE_PHRASE } from './reducer';

function App() {
  const [phrase, setPhrase] = useState();
  // const [phraseList, setPhraseList] = useState([]);
  const [phraseList, dispatch] = useReducer(reducer, []); // phraseList = state (./reducer.js)

  function savePhrase(event) {
    event.preventDefault();
    //setPhraseList([...phraseList, phrase])
    dispatch({
      type: ADD_PHRASE,
      phrase: phrase
    })
  }

  function deletePhrase(phraseToDelete) {
    dispatch({
      type: DELETE_PHRASE,
      phrase: phraseToDelete
    })
  }

  return (
    <div className="App">
      <form onSubmit={savePhrase}>
        <textarea
          value={phrase}
          onChange={event => setPhrase(event.target.value)}
          required
        />
        <br />
        <button>Save phrase</button>
      </form>
      {phraseList.map((currentPhrase, index) => {
        return (
          <blockquote key={index}>
            <p>{currentPhrase}</p>
            <button onClick={() => deletePhrase(currentPhrase)}>Delete</button>
          </blockquote>
        )
      })}
    </div>
  );
}

export default App;
