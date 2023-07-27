import React, { useState } from 'react'
import "./servicePage.css"
import { useStateContext } from '../context/context'
import { Link } from 'react-router-dom'

const ServicePage = () => {

  const {email, setEmail, name, setName, subject, setSubject, message, setMessage, prompt, setPrompt} = useStateContext()
  const [ai, setAi] = useState(false)
  const [aiTip, setAiTip] = useState("example prompt: a portfolio website for a female model, black and purple colour theme, professional website, i want the homepage to be a closeup shot of my face tip: the more detail the better the results")

  const userEmail = "alexdiyan@outlook.com"
  return (
    <div className='servicePage'>
      <Link to="/projects" className="goToProjects" onClick={() => setSubject("")}>Go to Projects</Link>
      <div className="leadForm">
        <form className='contactForm' action={`https://formsubmit.co/${userEmail}`} method="POST">
            <div className="formInput">
              <label for="name">Name</label>
              <input type="text" name='name' placeholder='Enter your name...' value={name} onChange={(e) => setName(e.target.value)} required/>
            </div>
            <div className="formInput">
              <label for="email">Email</label>
              <input type="text" name='email' placeholder='Enter your email...' value={email} onChange={(e) => setEmail(e.target.value)} required/>
            </div>
            <div className="formInput">
              <label for="subject">Subject</label>
              <input type="text" name='subject' placeholder='Enter your subject...' value={subject} onChange={(e) => setSubject(e.target.value)} required/>
            </div>
            {ai &&
            <div className="formInput">
              <label for="aiPrompt">Ai Prompt</label>
              <input type="text" name='aiPrompt' placeholder='Enter your AI Prompt...' value={prompt} onChange={(e) => setPrompt(e.target.value)} required/>
              <div className="promptTip"><span className='orange'>example prompt:</span> a portfolio website for a female model, black and purple colour theme, professional website, i want the homepage to be a closeup shot of my face</div>
              <div className="promptTip"><span className='orange'>tip:</span> the more detail the better the results</div>
            </div>
            }
            <div className="formInput formMsg">
              <label for="message">Message</label>
              <textarea type="text" id="message" name="message" placeholder="Send a message..." value={message} onChange={(e) => setMessage(e.target.value)} required/>  
              {false && <div className="checkboxArea">
                <div className={`checkbox ${ai ? 'orangeBg' : ""}`} onClick={() => setAi(!ai)}></div>
                <div className="checkboxMsg">on top of your free design would you like some <span className='orange'>free</span> ai designs for your website and receive them within 5 minutes - Tick the Circle </div>
              </div>}
              <button>Send</button>
            </div>
        </form>
      </div>
    </div>
  )
}

export default ServicePage