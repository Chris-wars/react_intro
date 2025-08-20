import React from "react";


function QuoteCard({ quoteText, characterName, isQuoteEpic }) {
    return (
        <blockquote className="quote-card">
            "{quoteText}"
            <footer className="quote-character">
                - {characterName}
                {isQuoteEpic && <span style={{ marginLeft: '10px' }}>🌟</span>}
            </footer>
        </blockquote>
    )
}

export default QuoteCard;