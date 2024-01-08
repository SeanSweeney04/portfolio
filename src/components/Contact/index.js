import Loader from 'react-loaders'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'




const Contact = () => {
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault()
    
        emailjs
          .sendForm('service_ay23kxs', 'template_cgmomi5', form.current, 'uUObNSCmSzhwlvaQG')
          .then(
            () => {
              alert('Message successfully sent!')
              window.location.reload(false)
            },
            () => {
              alert('Failed to send the message, please try again')
            }
          )
      }
    return (
        <>
          <div className="container contact-page">
            <div className="text-zone">
              <h1>
                <AnimatedLetters
                  
                  strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                  idx={15}
                />
              </h1>
              <p>
                If you are intersted in hiring me for an internship you can fill in the contact form bellow or email me at seanpsweeney54@gmail.com.
              </p>
              <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
            </div>
            
            
          <Loader type="pacman" />
        </>
      )
    }
    
export default Contact