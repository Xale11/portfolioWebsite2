import React, { useState, useRef, useEffect} from 'react'
import { AboutBl } from '../svgComponents'
import "./about.css"
import { useStateContext } from '../context/context'
import { Link } from 'react-router-dom'

const About = () => {
    
    const {scrollAbout, setScrollAbout, setScrollServices, scrollServices, setScrollContact} = useStateContext()
    const about = useRef()

    
    const [desc, setDesc] = useState("Welcome! My name is Alex and I am a Web Developer and Mechatronic Engineer. I have spent over 4 years of my life teaching myself how to program and develop websites. I now want to use my expertise in web development, programming, A.I. and robotics to provide as much value as I can to my clients. \n\nWhether you're a prospective client seeking a reliable web development partner, an individual wanting a portfolio or a business looking for a motivated and skilled professional, I invite you to explore my projects and witness the results of my hard work and determination. There are many more to come and an expansion is being made into decentralised blockchain app development.\n\nFeel free to connect with me through my email, LinkedIn or any other social media. I am always excited to collaborate on new opportunities and contribute to individuals and organisations who want my service.")
    useEffect(() => {
        if (scrollAbout){
            about.current.scrollIntoView()
            setScrollAbout(false)
        }
    }, [scrollAbout])

  return (
    <div className='about' ref={about}>
        <div className="aboutBl">
            <AboutBl/>
        </div>
        <div className="aboutContent">
            <div className="aboutTitle">About Me</div>
            <div className="aboutContainer">
                <div className="aboutDesc">
                    {desc}
                </div>
                <div className="aboutDets">
                    <div className="aboutSkills">
                        <div className="aboutSkillsTop">
                            <div className="keySkills">
                                <div className="keySkillsTitle">Key Skills:</div>
                                <div className="keySkillsList">
                                    <p>• Python</p>
                                    <p className='orange'>• React</p>
                                    <p>• JavaScript</p>
                                    <p>• CSS</p>
                                    <p>• HTML</p>
                                </div>
                            </div>
                            <div className="skillsCta">
                                <div className="ctaMessage">Skills are only valuable when used, checkout my services</div>
                                <div className="skillsCtaBtn" onClick={() => setScrollServices(true)}>View Services</div>
                            </div>
                        </div>
                        <div className="aboutSkillsBottom">Other Skills: figma, arduino, firebase, sanity, Mechatronics, matlab</div>
                    </div>
                    <div className="aboutYears">
                        <div className="yrsSection">
                            <div className="yrsTitle">Years coding:</div>
                            <div className="yrs">4+</div>
                        </div>
                        <div className="yrsSection">
                            <div className="yrsTitle">Years in web dev:</div>
                            <div className="yrs">2+</div>
                        </div>
                    </div>
                    <div className="aboutCta">
                        <Link to="/projects" className="abCtaBtn">View My Work</Link>
                        <div className="abCtaBtn orangeBg" onClick={() => setScrollContact(true)}>Contact Me</div>
                        <div className="aboutCv" onClick={() => {window.open("https://docs.google.com/document/d/1dkSTHttWg0RAdJYutbO9n-B8SIA9_tSkJOOiehKcoUQ/edit?usp=sharing")}}>View Resume/CV</div>
                    </div>
                </div>
            </div>
            <pre>
                
            </pre>

        </div>
    </div>
  )
}

export default About