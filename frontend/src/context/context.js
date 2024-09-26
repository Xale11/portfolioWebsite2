import React, { useState } from 'react'
import { createContext, useContext } from 'react'

const ContextApi = createContext()

const Context = ({children}) => {

    const projectData = [
        {
          img: "openchat.png",
          title:"Openchat - Instant Messaging Platform",
          tools: "React, JavaScript, CSS, HTML, Firebase, React Router, Context API",
          desc: "Introducing Openchat, a seamless and secure instant messaging destination designed for connecting with friends and family",
          date: "22/06/23",
          gitHub: "https://github.com/Xale11/openchat",
          liveLink: "https://openchat-omega.vercel.app/",
        },
        {
          img: "watMovi.png",
          title:"watMovi - Movie Streaming Site",
          tools: "React, JavaScript, CSS, HTML, React Router, Context API, TMBD API",
          desc:"A movie streaming platform, search for your favourite movies and find links to legal sites where you can watch at the highest quality",
          date: "24/05/23",
          gitHub: "https://github.com/Xale11/watmovi",
          liveLink: "https://watmovi.vercel.app/",
        },
        {
          img: "weatherApp.png",
          title:"Weather App",
          tools: "React, JavaScript, CSS, HTML, WeatherAPI, Context API",
          desc:"Weather at your fingertips. Plan, prepare, and stay informed. Embrace every forecast with confidence",
          date: "12/05/23",
          gitHub: "https://github.com/Xale11/weatherapi",
          liveLink: "https://weatherapi-rho.vercel.app/",
        },
        {
          img: "ecommerceSite.png",
          title:"Xale Headphones - Ecommerce Site",
          tools: "Next.js, JavaScript, CSS, HTML, Sanity, React Router, Context API",
          desc:"Your online shopping destination for high-end headphones, speakers and tech. Elevate your shopping experience now",
          date: "17/02/23",
          gitHub: "https://github.com/Xale11/firstEcommerceSite",
          liveLink: "https://ecommerce-sanity-stripe-jet-iota.vercel.app/",
        },
        {
          img: "lineRobot.jpg",
          title:"Line Following Robot",
          tools: "C, C++",
          desc:"2nd Year University Project. Programmed to follow a line and deliver a letter using C/C++",
          date: "24/03/22",
          gitHub: "https://docs.google.com/document/d/18cq0x_Ms5Gs5XsIHxvluHlJ4AxzIAG92HL56cW8CkgI/edit?usp=sharing",
          liveLink: "https://docs.google.com/document/d/18cq0x_Ms5Gs5XsIHxvluHlJ4AxzIAG92HL56cW8CkgI/edit?usp=sharing",
        },
        {
          img: "remoteRobot.PNG",
          title:"Remote controlled Car",
          tools: "Arduino",
          desc:"Arduino based RC car. Utilised NRF204 transciever for communication between controller and car",
          date: "24/02/22",
          gitHub: "https://drive.google.com/file/d/1Dc2M3rqPGi-gdeU1eGqNfcC7UGQhjURX/view?usp=sharing",
          liveLink: "https://drive.google.com/file/d/1Dc2M3rqPGi-gdeU1eGqNfcC7UGQhjURX/view?usp=sharing",
        }
        
      ]
  
    const slideShowData = [
      {
        img: "openchat.png",
        title:"Openchat - Instant Messaging Platform",
        tools: "React, JavaScript, CSS, HTML, Firebase, React Router, Context API",
        desc: "Introducing Openchat, a seamless and secure instant messaging destination designed for connecting with friends and family",
        date: "22/06/23",
        gitHub: "https://github.com/Xale11/openchat",
        liveLink: "https://openchat-omega.vercel.app/",
      },
      {
        img: "watMovi.png",
        title:"watMovi - Movie Streaming Site",
        tools: "React, JavaScript, CSS, HTML, React Router, Context API, TMBD API",
        desc:"A movie streaming platform, search for your favourite movies and find links to legal sites where you can watch at the highest quality",
        date: "24/05/23",
        gitHub: "https://github.com/Xale11/watmovi",
        liveLink: "https://watmovi.vercel.app/",
      },
      {
        img: "ecommerceSite.png",
        title:"Xale Headphones - Ecommerce Site",
        tools: "Next.js, JavaScript, CSS, HTML, Sanity, React Router, Context API",
        desc:"Your online shopping destination for high-end headphones, speakers and tech. Elevate your shopping experience now!",
        date: "17/02/23",
        gitHub: "https://github.com/Xale11/firstEcommerceSite",
        liveLink: "https://ecommerce-sanity-stripe-jet-iota.vercel.app/",
      }
  ]

    const [scrollHome, setScrollHome] = useState(false)
    const [scrollProjects, setScrollProjects] = useState(false)
    const [scrollAbout, setScrollAbout] = useState(false)
    const [scrollServices, setScrollServices] = useState(false)
    const [scrollContact, setScrollContact] = useState(false)
    const [modal, setModal] = useState(false)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [subject, setSubject] = useState("")
    const [message, setMessage] = useState("")
    const [prompt, setPrompt] = useState("")
    const [showMenu, setShowMenu] = useState(false)

    const showModal = () => {
        setModal(true)
        setTimeout(() => {setModal(false)}, 1000)
    }

  return (
    <ContextApi.Provider value={{showMenu, setShowMenu, prompt, setPrompt, showModal, email, setEmail, name, setName, subject, setSubject, message, setMessage, projectData, slideShowData, scrollHome, setScrollHome, scrollAbout, setScrollAbout, scrollServices, setScrollServices, scrollContact, setScrollContact}}>
        {modal && <div className='modal'>Copied to clipboard!</div>}
        {children}
    </ContextApi.Provider>
  )
}

export const useStateContext = () => useContext(ContextApi)

export default Context