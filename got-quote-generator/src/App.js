import './App.css';

  const gotQuotes = [
    { id: 1, quote: "Der Winter naht.", character: "Ned Stark", epic: true },
    { id: 2, quote: "Ein Lannister begleicht stets seine Schulden.", character: "Tyrion Lannister", epic: false },
    { id: 3, quote: "Wenn du das Spiel der Throne spielst, gewinnst du oder du stirbst. Es gibt keinen Mittelweg.", character: "Cersei Lannister", epic: true },
    { id: 4, quote: "Die Nacht ist dunkel und voller Schrecken.", character: "Melisandre", epic: false },
    { id: 5, quote: "Ich trinke und ich weiß Dinge.", character: "Tyrion Lannister", epic: true },
    { id: 6, quote: "Das Chaos ist keine Grube. Das Chaos ist eine Leiter.", character: "Petyr Baelish", epic: false },
    { id: 7, quote: "Hodor!", character: "Hodor", epic: false },
    { id: 8, quote: "Valar Morghulis.", character: "Jaqen H'ghar", epic: true },
  ]

const quotestyle = {
  fontStyle: "italic",
  color: "#61dafb",
  fontSize: "1.5em",
  marginBottom: "10px",
  borderLeft: "4px solid #00c8ffff",
  paddingLeft: "16px",
  margin: "10px 0",
};

const characterStyle = {
    fontSize: '0.8em',
    color: '#ffd375ff',
    marginTop: '5px',
    display: 'block'
  };

function App() {
  return (
    <div className="App">
      <div className="App-bg-overlay"></div>
      <header className="App-header">
        <h1>Game of Thrones Zitat-Generator</h1>
        <p>Ein Ort für Weisheit (und Sarkasmus) aus Westeros.</p>
      </header>
      <main>
        {gotQuotes.map(q => (
          <blockquote key={q.id} style={quotestyle}>
            "{q.quote}"
            <footer style={characterStyle}>
              - {q.character}
              {q.epic && <span style={{ marginLeft: '10px' }}>🌟</span>}
            </footer>
          </blockquote>
        ))}
      </main>
      <footer>
        <p>© 2025 Game of Thrones Zitat-Generator Deine Mutter Edition</p>
      </footer>
    </div>
  );
}

export default App;
