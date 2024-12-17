import { useState } from 'react'
import Logo from '../../assets/images/Me.jpg'
import { Link } from 'react-router-dom'
import AnimatedLetters  from '../AnimatedLetters'
import './index.scss';

const Home = () => {
    const [letterClass] = useState('text-animate')
    const jobArray = ['C', 'o', 'm', 'p', 'u', 't', 'e', 'r', ' ', 'S', 'c', 'i', 'e', 'n', 'c', 'e', ' ', 'S', 't', 'u', 'd', 'e', 'n', 't']


    return (
        <div className = "container home-page">
            <div className = "text-zone">
                <h1> Sean Le
                <br />
                <AnimatedLetters letterClass = {letterClass} 
                strArray = { jobArray }
                idx = {12} />
                </h1>
                <h2>Aspiring Data Analyst / IT Tech / Programmer
                    <br />
                    <br />
                    Student at California Student University, Fullerton
                    <br />
                    Learning different pathways Computer Science has to offer.
                    <br />

                </h2>
                <Link to = "/contact" className = 'flat-button'>CONTACT ME</Link>
            </div>
            <div class = "image">
                <img src = {Logo} alt = "developer"/>
            </div>
        </div>
    )
}

export default Home