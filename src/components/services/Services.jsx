import React from 'react'
import './services.css'
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import CampaignIcon from '@mui/icons-material/Campaign';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

const Services = () => {
  return (
    <>
        <section className='services_section'>
            <div className="container services_container">
                <h1 className='heading'>Our Services</h1>
                <p className='subHeading'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, possimus. Lorem ipsum dolor sit amet .</p>

                <div className="services_cart">
                    <div className="carts">
                        <div className='icon_conatiner'>
                            <p className='services_icon'><AutoAwesomeIcon/></p>
                        </div>
                        <h3>Financial Consulting</h3>
                        <p className='cartSubHeading'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et, perferendis. Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className="carts">
                        <div className='icon_conatiner'>
                            <p className='services_icon'><CampaignIcon/></p>
                        </div>
                        <h3>Content Marketing</h3>
                        <p className='cartSubHeading'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et, perferendis. Lorem ipsum dolor sit.</p>
                    </div>
                    <div className="carts">
                        <div className='icon_conatiner'>
                            <p className='services_icon'><MonetizationOnIcon/></p>
                        </div>
                        <h3>Finance Advice</h3>
                        <p className='cartSubHeading'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et, perferendis. Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
                    <button className='btn'>All Services</button>
            </div>
        </section>
    </>
  )
}

export default Services