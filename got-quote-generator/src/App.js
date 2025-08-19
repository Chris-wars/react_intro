import './App.css';

const quote = "Der Winter naht.";
const author = "Eddard Stark";

function App() {
  return (
    <div className="App">
      <div className="App-bg-overlay"></div>
      <header className="App-header">
        <h1>Game of Thrones Zitat-Generator</h1>
        <p>Ein Ort für Weisheit (und Sarkasmus) aus Westeros.</p>
      </header>
      <main>
        <blockquote>
          <p>{quote}</p>
          <footer>— {author}</footer>
        </blockquote>
      </main>
      <footer className="App-footer">
        <p>© 2025 Game of Thrones Zitat-Generator Deine Mutter Edition</p>
      </footer>
    </div>
  );
}

export default App;
