import React, { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import { Link } from 'react-router-dom';
import "./index.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faAngular,
    faCss3,
    faGitAlt,
    faHtml5,
    faJsSquare,
    faReact,
} from '@fortawesome/free-brands-svg-icons'

const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

    return (
        <>
            <div className='container about-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e', '.']}
                            idx={15}
                        />
                    </h1>
                    <p>
                        A recent graduate and highly ambitious individual, eager to learn 
                        new technologies and concepts. Having completed a year-long internship 
                        at a reputed start-up in Sri Lanka, I have been exposed to numerous 
                        software practices, including web & application development, UI design 
                        and full-stack development.
                    </p>
                    <p align="LEFT">
                        I have great communication skills, love integrating with people, and frequently
                        enjot exposing myself to new challenges and projects. Designing, brainstorming &
                        editing content are some of my greatest hobbies.
                    </p>
                    <p>
                        My Skills: JavaScript, ReactJS, AngularJS, HTML, CSS, Objected Oriented Programming, 
                        Github, SEO, UI Responsiveness, Wireframe Creation, UI Design, 
                        Web & API Development, Web Design, Scalability, User Experience, Figma, 
                        Adobe XD, Adobe Photoshop, Adobe Premiere Pro, Adobe Illustrator.
                    </p>
                </div>
                <Link to="/portfolio" className="flat-button">MY PORTFOLIO</Link>
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

export default About;