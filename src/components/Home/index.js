import { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import { Link } from 'react-router-dom';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';

const Home = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = [' ', 'A', 'b', 'd', 'u', 'l', 'l', 'a', 'h,']
    const jobArray = ['a', 'n', ' ',
        'a',
        'v',
        'i',
        'd',
        ' ',
        'd',
        'e',
        'v',
        'e',
        'l',
        'o',
        'p',
        'e',
        'r',
        '.'
    ]

    // Hover effect not working - recheck

    // useEffect(() => {
    //     return setTimeout(() => {
    //         setLetterClass('text-animate-hover')
    //     }, 4000)
    // }, [])

    return (
        <>
            <div className="container home-page">
                <div className="text-zone">
                    <h1>
                        <span className={letterClass}>H</span>
                        <span className={`${letterClass} _13`}>i,</span>
                        <br />
                        <span className={`${letterClass} _14`}>I</span>
                        <span className={`${letterClass} _15`}>'m</span>
                        <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={14} />
                        <br />
                        {/* <div className='freelancer'> */}
                        <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={17} />
                        {/* </div> */}
                    </h1>
                    <h2>Frontend Website & Application Development / UI Design
                        <br />
                        <br />
                        Photo Editing / Video Editing / Logo Creation / Poster Design</h2>
                    <Link to="/contact" className="flat-button">GET IN TOUCH</Link>
                    <Link to="/portfolio" className="flat-button">MY PORTFOLIO</Link>
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

export default Home