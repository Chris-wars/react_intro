
// Haupt-CSS für das App-Layout und Styling importieren
import './App.css';
// React und benötigte Hooks importieren
import React, { useEffect, useState } from 'react';
// Die Komponente für einzelne Zitatkarten importieren
import QuoteCard from './QuoteCard';

  // Beispielhafte Game of Thrones Zitate als Array von Objekten
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


// Beispiel-Funktion für Like-Events (kann für Analytics genutzt werden)
function handleLike(characterName) {
  console.log(`${characterName} Zitat wurde geliked!`);
}




// Hauptkomponente der App
function App() {


  // State für den aktuellen Zitat-Index
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  // Funktion zum Anzeigen des nächsten Zitats
  function showNextQuote() {
    setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % gotQuotes.length);
  };
  // Das aktuell angezeigte Zitat-Objekt
  const currentQuote = gotQuotes[currentQuoteIndex];

  // State und Funktion für die Anzeige der epischen Nachricht
  const [showEpicMessage, setShowEpicMessage] = useState(true);
  function toggleEpicMessage() {
    setShowEpicMessage(!showEpicMessage);
  };

  // State für Ladevorgang, Fehler und das "abgerufene" Zitat
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [fetchedQuote, setFetchedQuote] = useState(null);

  // Simuliere das Laden eines Zitats (z.B. von einer API)
  useEffect(() => {
    const fetchQuote = async () => {
      setIsLoading(true);
      setError(null);
      try {
        // Simulierte Ladezeit (1 Sekunde)
        await new Promise(resolve => setTimeout(resolve, 1000));
        // if (Math.random() < 0.7) {
        //   throw new Error("Netzwerkfehler");
        // }
        // Wähle das aktuelle Zitat aus dem Array
        const selectedQuote = gotQuotes[currentQuoteIndex];
        setFetchedQuote(selectedQuote);
      } catch (err) {
        // Fehlerbehandlung
        console.error("Fehler beim Abrufen des Zitats", err);
        setError("Fehler beim Laden des Zitats. Bitte versuchen Sie erneut.");
      } finally {
        setIsLoading(false);
      }
    };
    fetchQuote();
  }, [currentQuoteIndex, gotQuotes]);

  // JSX-Return: Aufbau der App
  return (
    <div className="App">
      {/* Overlay für dunklen Hintergrund */}
      <div className="App-bg-overlay"></div>
      {/* Kopfbereich */}
      <header className="App-header">
        <h1>Game of Thrones Zitat-Generator</h1>
        <p>Ein Ort für Weisheit (und Sarkasmus) aus Westeros.</p>
      </header>
      <main>
        {/* Ladeanzeige */}
        {isLoading && (
          <p style={{ color: '#ccc', fontSize: '1.2em' }}>
            Lade Zitat..<span role="img" aria-label="loading spinner">⏳</span>
          </p>
        )}

        {/* Fehleranzeige */}
        {error && (
          <p style={{ color: '#ff6347', fontSize: '1.2em' }}>
            Fehler: {error} <span role="img" aria-label="error icon">❌</span>
          </p>
        )}

        {/* Zitatkarte anzeigen, wenn geladen */}
        {!isLoading && !error && fetchedQuote && (
          <QuoteCard 
            key={fetchedQuote.id}
            quoteText={fetchedQuote.quote}
            characterName={fetchedQuote.character}
            isQuoteEpic={fetchedQuote.epic}
          />
        )}
        
        {/* Button zum Ein-/Ausblenden der epischen Nachricht */}
        {!error && currentQuoteIndex !== null && fetchedQuote && fetchedQuote.epic && (
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

        {/* Epische Nachricht anzeigen, wenn aktiviert */}
        {!error && showEpicMessage && fetchedQuote && fetchedQuote.epic && (
          <p style={{ color: '#F8C471', fontStyle: 'italic', fontSize: '1.2em' }}>
            Das ist ein wahrlich episches Zitat! 👑
          </p>
        )}

        {/* Abstand */}
        <p></p>

        {/* Button für nächstes Zitat */}
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
