import React, { useState, useEffect } from 'react';
import './RoundToggle.css';

const RoundToggle = () => {
    const [isToastVisible, setIsToastVisible] = useState(false);

    const handleToggleClick = () => {
        setIsToastVisible(true);
        
        // Auto-hide toast after 1 second
        setTimeout(() => {
            setIsToastVisible(false);
        }, 1000);
    };

    return (
        <div className="round-toggle-container">
            <button 
                className="btn-down" 
                onClick={handleToggleClick}
                aria-label="Toggle button"
            >
                {/* You can add an icon or text here */}
                <span>▼</span>
            </button>
            
            <div 
                id="tost_message" 
                className={`tost-message ${isToastVisible ? 'on' : ''}`}
            >
                <p>Toast message here!</p>
            </div>
        </div>
    );
};

export default RoundToggle; 