import './App.css';
import { Routes, Route, Link} from 'react-router-dom';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';


function App() {

  return(
    <div className='App'>
      <header className='App-header'>
        <h1>Game of Thrones Zitat-Generator</h1>
        <nav className='main-nav'>
          <Link to="/" className="nav-link Button">Home</Link>
          <Link to="/about" className="nav-link Button">Über uns</Link>
        </nav>
      </header>

      <main className='app-main-content'>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<h2>404 Seite nicht gefunden</h2>} />
        </Routes>
      </main>

    </div>
  )

}

export default App;
