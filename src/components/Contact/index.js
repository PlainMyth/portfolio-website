import './index.scss'
import AnimatedLetters from '../AnimatedLetters';
import { useState, useRef } from 'react'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Contact = () => {
    const [letterClass] = useState('text-animate')
    const form = useRef()
    const sendEmail = (e) => {
        e.preventDefault()
              alert('Message successfully sent!')
              window.location.reload(false)
            }
    return (
        <>
        <div className = 'link-zone'>
                <ul>
                    <li>
                        <a target = "_blank" rel = 'noreferrer' href ='https://www.linkedin.com/in/sean-le-7b1770237/'>
                            <FontAwesomeIcon icon= { faLinkedin } color = "#4d4d4e" />
                        </a>
                        <a target = "_blank" rel = 'noreferrer' href ='https://github.com/PlainMyth'>
                            <FontAwesomeIcon icon= { faGithub } color = "#4d4d4e" />
                        </a>
                    </li>
                </ul>
            </div>
        <div className = 'contact-page'>
            
            <div className = 'text-zone'>

                
                <h1>
                    <AnimatedLetters strArray = {['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'M', 'e']}
                    letterClass = {letterClass}
                    idx = {15}
                    />

                </h1>
                <p>
                    Feel free to reach out to me through my email and other
                    social medias.
                </p>
                <div className = 'contact-form'>
                    <form ref = {form} onSubmit = {sendEmail}>
                        <ul>
                            <li className = 'half'>
                                <input type = "text" name = "name" placeholder = "Name" required/>
                            </li>
                            <li className = 'half'>
                                <input type = "email" name = "email" placeholder = "Email" required/>
                            </li>
                            <li>
                                <input placeholder = "Subject" type = "text" name = "subject" required />
                            </li>
                            <li>
                                <textarea placeholder = "Message" name = "message" required>
                                
                                </textarea>
                            </li>
                            <li>
                                <input type = "submit" className = "flat-button" value = "SEND" />
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}

export default Contact