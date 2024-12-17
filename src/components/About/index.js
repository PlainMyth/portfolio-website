import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import '../../assets/Resume.pdf'
import { useState, useEffect } from 'react'
const About =  () => {
    const [letterClass] = useState('text-animate')

        // Dynamically create video element and append to the project-example div
        useEffect(() => {
            // Dynamically create video element and append to the project-example div
            const videoContainer = document.querySelector('.project-example');
            if (!videoContainer.querySelector('video')) { // Prevent duplicate videos
                const videoElement = document.createElement('video');
                videoElement.src = require('../../assets/atari-video.mp4');
                videoElement.controls = true;
                videoElement.autoplay = false;
                videoElement.style.width = '600px';
                videoElement.style.height = '400px';
                videoElement.loop = true;
                videoContainer.appendChild(videoElement);
            }
        }, []);
    return (
        <div className = 'container about-page'>
            <div className = 'text-zone'>
            
                <h1>
                    <AnimatedLetters
                        letterClass = { letterClass }
                        strArray = {['A', 'b', 'o', 'u', 't', ' ', 'M', 'e']}
                        idx={15}
                        />
                </h1>
                <p>I am an undergrad at California State University, Fullerton
                    studying in Computer Science.
                </p>
                <p> I'm willing to learn and explore more
                    in the diverse world of technology. I'm looking for a 
                    role in a established IT company with the opportunity
                    to work with the latest technology and take on challenging
                    and interesting projects.
                </p>
                <p>
                    <button className = "flat-button" onClick={() => window.open(require('../../assets/Resume.pdf'), '_blank')}>
                        My Resume
                        </button>
                </p>
            </div>
                <div className = "skills-container">
                <h1>
                    <AnimatedLetters
                        letterClass = { letterClass }
                        strArray = {['M', 'y', ' ', 'S', 'k', 'i', 'l', 'l', 's']}
                        idx={15}
                        />
                </h1>
                <p>
                    Object Oriented Programming, Data Structures, File Systems and Databases,
                    Algorithms, Compilers, Learning AIs
                </p>
                <p>
                    C++, Python, R Studio, MySQL, Jupyter Notebook
                </p>
                <p>
                    Microsoft Products, Adobe Photoshop, Adobe Premiere, Github, Google Apps, Windows 10, 11,
                    Remote Desktop Connection
                </p>
                </div>
                <div className = "project-container">
                <h1>
                    <AnimatedLetters
                        letterClass = { letterClass }
                        strArray = {['P', 'r', 'o', 'j', 'e', 'c', 't', 's']}
                        idx={15}
                        />
                </h1>
                </div>
                <div className = "project-text">
                    <h1>
                        Reinforced Learning AI Plays Space Invaders
                    </h1>
                    <p>Trained a random learning agent to functionally play
                        the Atari 2600 game, "Space Invaders" with reasonable
                        skill and with ease.
                    </p>
                </div>
                <div className = "project-example">

                </div>
            </div>
    )
}

export default About