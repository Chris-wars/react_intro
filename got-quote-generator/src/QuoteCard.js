import React from "react";


function QuoteCard(props) {
    return (
        <blockquote className="quote-card">
            "{props.quoteText}"
            <footer className="quote-character">
                - {props.characterName}
                {props.isQuoteEpic && <span style={{ marginLeft: '10px' }}>🌟</span>}
            </footer>
        </blockquote>
    )
}

export default QuoteCard;