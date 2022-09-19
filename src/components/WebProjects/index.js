import React, { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";

const WebProjects = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

    return (
        <>
            <div className='container portfolio-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['W', 'e', 'b', ' ', '&', ' ', 'M', 'o', 'b', 'i', 'l', 'e', ' ', 'P', 'r', 'o', 'j', 'e', 'c', 't', 's', '.']}
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
                        <a href="https://gtve.com/" target="_blank">
                            <div class="card gtv-card"></div>
                        </a>
                    </div>
                    <div class="column">
                        <a href="https://www.alkuppiya.lk/" target="_blank">
                            <div class="card alkuppiya-card"></div>
                        </a>
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

export default WebProjects;