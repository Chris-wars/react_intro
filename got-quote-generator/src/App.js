import './App.css';

const quote = "Der Winter naht.";
const charakter = "Eddard Stark";

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
        <blockquote style={quotestyle}>
          <p>{quote}</p>
          <footer style={characterStyle}> — {charakter}</footer>
        </blockquote>
      </main>
      <footer className="App-footer">
        <p>© 2025 Game of Thrones Zitat-Generator Deine Mutter Edition</p>
      </footer>
    </div>
  );
}

export default App;
