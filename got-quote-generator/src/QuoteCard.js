import React from "react";


function QuoteCard({ quoteText, characterName, isQuoteEpic, children }) {
    return (
        <blockquote className="quote-card">
            "{quoteText}"
            <footer className="quote-character">
                - {characterName}
                {isQuoteEpic && <span style={{ marginLeft: '10px' }}>🌟</span>}
            </footer>
            {children}
        </blockquote>
    )
}

export default QuoteCard;