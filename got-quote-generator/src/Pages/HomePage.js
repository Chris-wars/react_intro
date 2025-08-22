
// =============================================
// HomePage – Startseite mit Zufallszitaten
// =============================================

// Importiere das CSS-Modul für Home-spezifische Styles
import styles from '../components/Home.module.css';

// Importiere React und benötigte Hooks
import React, { useEffect, useState } from 'react';

// Importiere die Komponente für einzelne Zitatkarten
import QuoteCard from './../components/QuoteCard';

  // =====================
  // Beispielhafte Game of Thrones Zitate als Array von Objekten
  // =====================
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
  // Hier könnte man z.B. ein Analytics-Event senden
  console.log(`${characterName} Zitat wurde geliked!`);
}





// =====================
// Hauptkomponente der Startseite
// =====================
function Homepage() {



  // State für den aktuellen Zitat-Index
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  // Funktion zum Anzeigen des nächsten Zitats
  function showNextQuote() {
    setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % gotQuotes.length);
  };

  // Das aktuell angezeigte Zitat-Objekt (wird für spätere Features bereitgehalten)
  const currentQuote = gotQuotes[currentQuoteIndex];


  // State und Funktion für die Anzeige der epischen Nachricht
  const [showEpicMessage, setShowEpicMessage] = useState(true);
  function toggleEpicMessage() {
    setShowEpicMessage(!showEpicMessage);
  };


  // State für Ladevorgang, Fehler und das "abgerufene" Zitat
  // isLoading: Zeigt an, ob gerade geladen wird
  // error: Fehlertext, falls das Laden fehlschlägt
  // fetchedQuote: Das aktuell geladene Zitat-Objekt
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [fetchedQuote, setFetchedQuote] = useState(null);


  // Simuliere das Laden eines Zitats (z.B. von einer API)
  // useEffect sorgt dafür, dass bei jedem Wechsel des Index ein neues Zitat geladen wird
  useEffect(() => {
    const fetchQuote = async () => {
      setIsLoading(true);
      setError(null);
      try {
        // Simulierte Ladezeit (1 Sekunde)
        await new Promise(resolve => setTimeout(resolve, 1000));
        // Hier könnte ein echter API-Call stehen
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


  // =====================
  // JSX-Return: Aufbau der Seite
  // =====================
  return (
    <div className="App">
      {/* Overlay für dunklen Hintergrund */}
      <div className="App-bg-overlay"></div>

      {/* Kopfbereich (leer, da global in App.js) */}
      <header className="App-header"></header>

      <main className={styles.appMainContent}>
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

        {/* Epische Nachricht anzeigen, wenn aktiviert */}
        {!error && showEpicMessage && fetchedQuote && fetchedQuote.epic && (
          <div className={styles.epicMessageBlock}>
            <p className={styles.epicMessage} style={{ marginBottom: '8px' }}>
              Das ist ein wahrlich episches Zitat! 👑
            </p>
            <button
              className="Button"
              onClick={toggleEpicMessage}
              style={{ marginTop: 0, marginBottom: '10px', fontSize: '0.9em' }}
            >
              {showEpicMessage ? 'Epische Nachricht ausblenden' : 'Epische Nachricht anzeigen'}
            </button>
          </div>
        )}

        {/* Button anzeigen, wenn episch aber Nachricht ausgeblendet */}
        {!error && fetchedQuote && fetchedQuote.epic && !showEpicMessage && (
          <button
            className="Button"
            onClick={toggleEpicMessage}
            style={{ marginTop: '10px', marginBottom: '10px', fontSize: '0.9em' }}
          >
            {showEpicMessage ? 'Epische Nachricht ausblenden' : 'Epische Nachricht anzeigen'}
          </button>
        )}

        {/* Abstand */}
        <p></p>

        {/* Button für nächstes Zitat */}
        <button
          className="Button"
          onClick={showNextQuote}
          style={{ marginTop: '20px', fontSize: '1.1em' }}
        >
          Nächstes Zitat »
        </button>
      </main>
    </div>
  );
}


// Exportiere die Startseiten-Komponente
export default Homepage;
