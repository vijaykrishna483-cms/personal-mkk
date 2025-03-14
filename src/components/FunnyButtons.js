import React, { useState } from "react";
import "./FunnyButtons.css";
import bearGif from "../assets/GIF.gif"; 
import loveGif from "../assets/GIF.gif";  

function FunnyButtons() {
    const [showGif, setShowGif] = useState(false);
    const [noPosition, setNoPosition] = useState({ top: "50%", left: "40%" });

    const moveNoButton = () => {
        const randomX = Math.random() * 200;
        const randomY = Math.random() * 200;
        setNoPosition({ top: `${randomY}px`, left: `${randomX}px` });
    };

    return (
        <div className="proposal-container">
            {!showGif && <img src={bearGif} alt="Cute Bear" className="cute-gif" />}
            {!showGif && <p>💍 Will you be my boyfriend kunjaa? 💍</p>}
            {showGif ? (
                <>
                    <img src={loveGif} alt="Love Celebration" className="love-gif" />
                    <p className="message">🎉 Yay! I love you too! 🎉</p>
                </>
            ) : (
                <div className="buttons">
                    <button className="yes-btn" onClick={() => setShowGif(true)}>Yes</button>
                    <button className="no-btn" style={noPosition} onMouseOver={moveNoButton}>No</button>
                </div>
            )}
        </div>
    );
}

export default FunnyButtons;
