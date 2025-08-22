
// =============================================
// QuoteCard – Einzelne Zitatkarte
// =============================================

import React from "react";
import styles from './QuoteCard.module.css';


function QuoteCard({ quoteText, characterName, isQuoteEpic, children }) {
    return (
        <blockquote className={styles.quoteCard}>
            "{quoteText}"
            <footer className={styles.quoteCharacter}>
                - {characterName}
                {isQuoteEpic && <span style={{ marginLeft: '10px' }}>🌟</span>}
            </footer>
            {children}
        </blockquote>
    )
}

export default QuoteCard;