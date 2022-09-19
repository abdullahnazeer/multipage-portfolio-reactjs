import React, { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";

const Portfolio = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

    return (
        <>
            <div className='container portfolio-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['M', 'y', ' ', 'P', 'o', 'r', 't', 'f', 'o', 'l', 'i', 'o', '.']}
                            idx={15}
                        />
                    </h1>
                    {/* <h2>Frontend Website & Application Development / UI Design</h2> */}
                </div>
                {/* <div className="container-sections">
                    <div className="section">...content...</div>
                    <div className="section--alt">...content...</div>
                    <div className="section">...content...</div>
                    <div className="section--alt">...content...</div>
                </div> */}
                <div class="row">
                    <div class="column">
                        <a href="/web-projects">
                            <div class="card web-card"></div>
                        </a>
                    </div>
                    <div class="column">
                        <div class="card logo-card"></div>
                    </div>
                    <div class="column">
                        <div class="card poster-card"></div>
                    </div>
                    <div class="column">
                        <div class="card misc-card"></div>
                    </div>
                </div>
                <div class="stars">
                    <div class="star"></div>
                    <div class="star"></div>
                    <div class="star"></div>
                    <div class="star"></div>
                    <div class="star"></div>
                    <div class="star"></div>
                    <div class="star"></div>
                    <div class="star"></div>
                    <div class="star"></div>
                    <div class="star"></div>
                    <div class="star"></div>
                    <div class="star"></div>
                    <div class="star"></div>
                    <div class="star"></div>
                    <div class="star"></div>
                    <div class="star"></div>
                    <div class="star"></div>
                    <div class="star"></div>
                    <div class="star"></div>
                    <div class="star"></div>
                    <div class="star"></div>
                    <div class="star"></div>
                    <div class="star"></div>
                    <div class="star"></div>
                    <div class="star"></div>
                    <div class="star"></div>
                    <div class="star"></div>
                    <div class="star"></div>
                    <div class="star"></div>
                    <div class="star"></div>
                    <div class="star"></div>
                    <div class="star"></div>
                    <div class="star"></div>
                    <div class="star"></div>
                    <div class="star"></div>
                    <div class="star"></div>
                    <div class="star"></div>
                    <div class="star"></div>
                    <div class="star"></div>
                    <div class="star"></div>
                    <div class="star"></div>
                    <div class="star"></div>
                    <div class="star"></div>
                    <div class="star"></div>
                    <div class="star"></div>
                    <div class="star"></div>
                    <div class="star"></div>
                    <div class="star"></div>
                    <div class="star"></div>
                    <div class="star"></div>
                </div>
            </div>
            <Loader type='pacman' />
        </>
    );
}

export default Portfolio;