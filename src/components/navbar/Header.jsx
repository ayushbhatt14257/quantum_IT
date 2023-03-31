import React from 'react'
import './header.css'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import EmailIcon from '@mui/icons-material/Email';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';

const header = () => {
    return (
        <>
            <header>
                <section className='container header_section'>
                    <div className="header_left">
                        <div className="left_left">
                            <p className='icon'><AccessTimeIcon /></p>
                            <h4>We are open 24/7 </h4>
                            <p>|</p>
                        </div>
                        <div className="left_right">
                            <p className='icon'><EmailIcon /></p>
                            <h4>mail@gmail.com</h4>
                        </div>
                    </div>

                    <div className="header_right">
                        <p className='icon'><TwitterIcon /></p>
                        <p className='icon'><LinkedInIcon /></p>
                        <p className='icon'><FacebookIcon /></p>
                        <p className='icon'><GitHubIcon /></p>
                    </div>
                </section>
            </header>
        </>
    )
}

export default header