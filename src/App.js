import './App.css';
import { useState } from 'react';

function App() {
  const [phrase, setPhrase] = useState();
  const [phraseList, setPhraseList] = useState([]);

  function savePhrase(event) {
    event.preventDefault();
    if(phrase.length < 20) {
      alert("Ops... phrases of less than 20 characters are not allowed.")
      return
    }

    if(phraseList.includes(phrase)) {
      alert("Duplicated phrases are not allowed.")
      return
    }
    setPhraseList([...phraseList, phrase])
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
          </blockquote>
        )
      })}
    </div>
  );
}

export default App;
