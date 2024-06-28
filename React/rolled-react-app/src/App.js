import React, { useState, useEffect } from 'react';
import './style.css';

function App() {
    const [currentIndex, setCurrentIndex] = useState(2);
    const backgrounds = [
        process.env.PUBLIC_URL + '/Background/blackcloverBack.png',
        process.env.PUBLIC_URL + '/Background/demonslayerBack.png',
        process.env.PUBLIC_URL + '/Background/onepieceBack.png',
        process.env.PUBLIC_URL + '/Background/fireforceBack.png',
        process.env.PUBLIC_URL + '/Background/kaijuno8Back.png'
    ];

    const handleNextClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
    };

    useEffect(() => {
        document.body.style.backgroundImage = `url(${backgrounds[currentIndex]})`;
    }, [currentIndex]);

    return (
        <div>
            <h1>Rolled</h1>
            <div className="bottom-boxes">
                <div className="box-1">
                    <img src={process.env.PUBLIC_URL + '/blackclover.png'} alt="Box 1 Image" />
                </div>
                <div className="box-2">
                    <img src={process.env.PUBLIC_URL + '/demonslayer.png'} alt="Box 2 Image" />
                </div>
                <div className="box-3 highlight">
                    <img src={process.env.PUBLIC_URL + '/Shonen/onepiece.png'} alt="Box 3 Image" />
                </div>
                <div className="box-4">
                    <img src={process.env.PUBLIC_URL + '/fireforce.png'} alt="Box 4 Image" />
                </div>
                <div className="box-5">
                    <img src={process.env.PUBLIC_URL + '/kaijuno8.png'} alt="Box 5 Image" />
                </div>
                <img src={process.env.PUBLIC_URL + '/Logo/onepiecelogo.png'} alt="One Piece Logo" className="logo" />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
            <div className="watch">Watch</div>
            <button id="nextBtn" onClick={handleNextClick}>Next</button>
            <div className="sidebox"></div>
            <footer className="footer"></footer>
        </div>
    );
}

export default App;
