import React from 'react'
import './home.css'
import IMG from '../../assests/home.png'

const Home = () => {
  return (
    <>
        <section className='home_section'>
            <div className="container home_container">
                <div className="home_left">
                    <p>Ki Name Dake Bolbo Tomake</p>
                    <h1>We Are Consulting For Your Business Finances</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt possimus maxime architecto </p>
                    <button className='btn'>Start Now</button>
                </div>
                <div className="right">
                    <div className="right_img">
                        <img src={IMG} alt="img" />
                    </div>
                </div>
            </div>      
        </section>
    </>
  )
}

export default Home