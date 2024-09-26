import React, { useRef, useEffect } from 'react'
import "./contact.css"
import {FaLinkedin, FaGithub, FaTiktok} from "react-icons/fa"
import {MdEmail} from "react-icons/md"
import {HiHashtag, HiLocationMarker} from "react-icons/hi"
import {AiFillInstagram} from "react-icons/ai"
import { useStateContext } from '../context/context'

const Contact = () => {

    const {setScrollContact, scrollContact, showModal, email, setEmail, name, setName, subject, setSubject, message, setMessage, prompt, setPrompt} = useStateContext()

    const contact = useRef()

    useEffect(() => {
        if (scrollContact){
            contact.current.scrollIntoView()
            setScrollContact(false)
        }
    }, [scrollContact])

  return (
    <div className='contact' ref={contact}>
        <div className="contactTitle">Contact</div>
        <div className="contactMsg">hope to hear from you soon</div>
        <div className="contactContent">
            <div className="contactLinks">
                <div className="contactLink" onClick={() => {navigator.clipboard.writeText("alexdiyan@outlook.com"); showModal()}}>
                    <div className="clCircle">
                        <MdEmail/>
                    </div>
                    <div className="clName">alexdiyan@outlook.com</div>
                </div>
                <div className="contactLink" onClick={() => {navigator.clipboard.writeText("+447908244288"); showModal()}}>
                    <div className="clCircle">
                        <HiHashtag/>
                    </div>
                    <div className="clName">+447908244288</div>
                </div>
                <div className="contactLink" onClick={() => {navigator.clipboard.writeText("Milton Keynes, United Kingdom"); showModal()}}>
                    <div className="clCircle">
                        <HiLocationMarker/>
                    </div>
                    <div className="clName">Milton Keynes, United Kingdom</div>
                </div>
                <div className="contactLink" onClick={() => {window.open("https://www.linkedin.com/in/alex-diyan-325200202/")}}>
                    <div className="clCircle">
                        <FaLinkedin/>
                    </div>
                    <div className="clName">Alex Diyan</div>
                </div>
                <div className="contactLink" onClick={() => {window.open("https://www.tiktok.com/@blockchainxale")}}>
                    <div className="clCircle">
                        <FaTiktok/>
                    </div>
                    <div className="clName">BlockchainXale</div>
                </div>
                <div className="contactLink" onClick={() => {window.open("https://www.instagram.com/metaxale/")}}>
                    <div className="clCircle">
                        <AiFillInstagram/>
                    </div>
                    <div className="clName">metaXale</div>
                </div>
            </div>
            <form className="contactMailer" action={`https://formsubmit.co/alexdiyan@outlook.com`} method="POST">
                <div className="input">
                    <label className="inputName" for="name">Name</label>
                    <input className="inputArea" type="text" name='name' placeholder='Enter your name...' value={name} onChange={(e) => setName(e.target.value)} required></input>
                </div>
                <div className="input">
                    <label className="inputName" for="email">Email</label>
                    <input className="inputArea" type="text" name='email' placeholder='Enter your email...' value={email} onChange={(e) => setEmail(e.target.value)} required></input>
                </div>
                <div className="input">
                    <label className="inputName" for="subject">Subject</label>
                    <input className="inputArea" type="text" name='subject' placeholder='Enter your subject...' value={subject} onChange={(e) => setSubject(e.target.value)} required></input>
                </div>
                <div className="input">
                    <label className="inputName" for="message">Message</label>
                    <textarea className="inputArea messageSection" type="text" id="message" name="message" placeholder="Send a message..." value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
                </div>
                <div className="send"><div>Send</div></div>
            </form>
        </div>
    </div>
  )
}

export default Contact