import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import Loader from 'react-loaders'
import {
    faAngular,
    faCss3,
    faGitAlt,
    faHtml5,
    faJsSquare,
    faReact,
  } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'




const About = () => {
    return (
        <>
          <div className="container about-page">
            <div className="text-zone">
              <h1>
                <AnimatedLetters

                  strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                  idx={15}
                />
              </h1>
              <p>
                I am a second year computer science student in Dublin City Univeristy looking for an internship in the summer period of 2024.
              </p>
              <p>
                I created this website to showcase my front end development skills using the React Javascript framework, but I am open to all kinds of internship roles other than front end development.
              </p>
              <p>
                I am naturally curious, hardworking and eager to gain experience in the tech industry.
              </p>
            </div>
        </div>
        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faAngular} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
        <Loader type="pacman" />
      

        </>
    )    
}

export default About