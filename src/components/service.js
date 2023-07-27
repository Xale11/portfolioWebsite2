import React, { useRef, useEffect } from 'react'
import "./service.css"
import serviceBg from "../img/serviceBg.png"
import { Ai, B2B, Ui } from '../svgComponents'
import { useStateContext } from '../context/context'
import { Link } from 'react-router-dom'
const Service = () => {

    const {scrollServices, setScrollServices, subject, setSubject} = useStateContext()

    const services = useRef()

    useEffect(() => {
        if (scrollServices){
            services.current.scrollIntoView()
            setScrollServices(false)
        }
    }, [scrollServices])

  return (
    <div className='service' ref={services}>
        <img className='serviceBg' src={serviceBg} alt="" />
        <div className="serviceContent">
            <div className="serviceTitle">Services</div>
            <div className="serviceCards">
                <div className="serviceCard">
                    <div className="scTitle">Personal/Portfolio</div>
                    <div className="scImg">
                        <Ui/>
                    </div>
                    <div className="scDesc">Get a stunning website tailored to your needs. Perfect for entrepreneurs, bloggers, and artists. Stand out with a user-friendly and visually appealing design.</div>
                    <Link to="/services" className="scCta" onClick={() => setSubject("Personal/Portfolio")}>Get a free design!</Link>
                    <div className='scExtra'>Learn More</div>                
                </div>
                <div className="serviceCard">
                    <div className="scTitle">B2B/B2C/E-ecommerce</div>
                    <div className="scImg">
                        <B2B/>
                    </div>
                    <div className="scDesc">Boost your business online. From B2B to B2C and e-commerce solutions, I'll create a seamless and secure platform for higher conversions.</div>
                    <Link to="/services" className="scCta" onClick={() => setSubject("B2B/B2C/E-Commerce")}>Get a free design!</Link>
                    <div className='scExtra'>Learn More</div>                
                </div>
                <div className="serviceCard">
                    <div className="scTitle">A.I. Integration</div>
                    <div className="scImg">
                        <Ai/>
                    </div>
                    <div className="scDesc">Embrace AI's power with chatbots and automated CRMs. Provide 24/7 support and streamline your operations for improved efficiency. Stay ahead with cutting-edge technology.</div>
                    <Link to="/services" className="scCta" onClick={() => setSubject("A.I. Integration")}>Get a free demo!</Link>
                    <div className='scExtra'>Learn More</div>                
                </div>
            </div>
            <div className="serviceOffer">Contact me regarding any service and get a <span className='orange'>free</span> design/demo for your website</div>
        </div>
    </div>
  )
}

export default Service