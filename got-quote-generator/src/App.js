import './App.css';
import React, { useState } from 'react';
import QuoteCard from './QuoteCard';

  const gotQuotes = [
    { id: 1, quote: "Der Winter naht.", character: "Ned Stark", epic: true },
    { id: 2, quote: "Ein Lannister begleicht stets seine Schulden.", character: "Tyrion Lannister", epic: false },
    { id: 3, quote: "Wenn du das Spiel der Throne spielst, gewinnst du oder du stirbst. Es gibt keinen Mittelweg.", character: "Cersei Lannister", epic: true },
    { id: 4, quote: "Die Nacht ist dunkel und voller Schrecken.", character: "Melisandre", epic: false },
    { id: 5, quote: "Ich trinke und ich weiß Dinge.", character: "Tyrion Lannister", epic: true },
    { id: 6, quote: "Das Chaos ist keine Grube. Das Chaos ist eine Leiter.", character: "Petyr Baelish", epic: false },
    { id: 7, quote: "Hodor!", character: "Hodor", epic: false },
    { id: 8, quote: "Valar Morghulis.", character: "Jaqen H'ghar", epic: true },
    { id: 9, quote: "Die Königin ist tot. Lang lebe die Königin.", character: "Daenerys Targaryen", epic: false },
    { id: 10, quote: "Ein Mann hat keine Namen.", character: "Jaqen H'ghar", epic: true },
  ]

function handleLike(characterName) {
  console.log(`${characterName} Zitat wurde geliked!`);

}



function App() {

  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  function showNextQuote() {
    setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % gotQuotes.length);
  };

  const currentQuote = gotQuotes[currentQuoteIndex];

  const [showEpicMessage, setShowEpicMessage] = useState(true);

  function toggleEpicMessage() {
    setShowEpicMessage(!showEpicMessage);
  };

  return (
    <div className="App">
      <div className="App-bg-overlay"></div>
      <header className="App-header">
        <h1>Game of Thrones Zitat-Generator</h1>
        <p>Ein Ort für Weisheit (und Sarkasmus) aus Westeros.</p>
      </header>
      <main>
        <QuoteCard 
          key={currentQuote.id}
          quoteText={currentQuote.quote}
          characterName={currentQuote.character}
          isQuoteEpic={currentQuote.epic}
        />
        {currentQuote.epic && (
          <button
            onClick={toggleEpicMessage}
            style={{
              backgroundColor: '#A0522D',
              color: 'white',
              padding: '8px 15px',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              marginTop: '10px',
              marginBottom: '10px',
              fontSize: '0.9em'
            }}
          >
           {showEpicMessage ? 'Epische Nachricht ausblenden' : 'Epische Nachricht anzeigen'} 
          </button>
        )}
        {currentQuote.epic && showEpicMessage && (
          <p style={{ color: '#F8C471', fontStyle: 'italic', fontSize: '1.2em' }}>
            Das ist ein wahrlich episches Zitat! 👑
          </p>
        )}
        <p></p>
        <button
          onClick={showNextQuote}
          style={{
            backgroundColor: '#DAA520',
            color: 'white',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            marginTop: '20px',
            fontSize: '1.1em',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
          }}
        >
          Nächstes Zitat »
        </button>
      </main>
    </div>
  );
}

export default App;
