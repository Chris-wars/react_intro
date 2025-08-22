
// ===============================
//   Game of Thrones Zitat-Generator
//   Haupt-App-Komponente
// ===============================

// Globale Styles importieren
import './App.css';

// React Router für Navigation importieren
import { Routes, Route, Link } from 'react-router-dom';

// Seiten-Komponenten importieren
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';



// Die Hauptfunktion der App
function App() {
  return (
    <div className='App'>
      {/*
        =====================
        Header-Bereich mit Titel, Untertitel und Navigation
        =====================
      */}
      <header className='App-header'>
        {/* App-Titel */}
        <h1>Game of Thrones Zitat-Generator</h1>

        {/* Kurzer Untertitel für Inspiration */}
        <p className='App-subtitle'>Lass dich von den klügsten oder dümmsten Köpfen Westeros inspirieren!</p>

        {/* Navigation: Buttons zu Home und Über uns */}
        <nav className='main-nav'>
          <Link to="/" className="nav-link Button">Home</Link>
          <Link to="/about" className="nav-link Button">Über uns</Link>
        </nav>
      </header>

      {/*
        =====================
        Hauptbereich mit Routing zu den Seiten
        =====================
      */}
      <main className='app-main-content'>
        <Routes>
          {/* Startseite mit Zufallszitaten */}
          <Route path="/" element={<HomePage />} />
          {/* Über uns Seite */}
          <Route path="/about" element={<AboutPage />} />
          {/* Fallback für nicht gefundene Seiten */}
          <Route path="*" element={<h2>404 Seite nicht gefunden</h2>} />
        </Routes>
      </main>
    </div>
  );
}


// Exportiere die Haupt-App-Komponente
export default App;
