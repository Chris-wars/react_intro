
// =============================================
// AboutPage – Über uns Seite
// =============================================

// Importiere React und das CSS-Modul für About-spezifische Styles
import React from "react";
import styles from './About.module.css';

function AboutPage() {
    return (
        <div className={styles.aboutContainer}>
            <div className={styles.aboutCard}>
                {/* Überschrift der Seite */}
                <h2>Über den Game of Thrones Zitat-Generator</h2>

                {/* Beschreibung des Projekts */}
                <p>
                    Diese kleine Anwendung wurde als Teil eines React-Lernkurses erstellt,<br />
                    um die Grundlagen von React-Komponenten, Zustand, Effekten und Routing zu demonstrieren.
                </p>

                {/* Hinweis auf die Zitatquelle */}
                <p>
                    Zitate stammen aus der beliebten HBO-Serie <span style={{ color: '#ffd375', fontWeight: 'bold' }}>&quot;Game of Thrones&quot;</span>.
                </p>

                {/* Persönlicher Touch */}
                <p style={{ fontStyle: 'italic', color: '#61dafb' }}>
                    Entwickelt mit Leidenschaft in Westeros.
                </p>
            </div>
        </div>
    );
}


// Exportiere die About-Seite
export default AboutPage;