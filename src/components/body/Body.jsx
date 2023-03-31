import React from 'react'
import IMG from '../../assests/body.jpg'
import './body.css'
import SettingsIcon from '@mui/icons-material/Settings';
import CloudIcon from '@mui/icons-material/Cloud';
import HandymanIcon from '@mui/icons-material/Handyman';
import RedditIcon from '@mui/icons-material/Reddit';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';

const Body = () => {
    return (
        <>
            <section className='body_section'>
                <div className="container body_container">
                    <div className="body_left">
                        <h2>We Have Many Year Experience In Consuntent Business</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis inventore tenetur voluptatem, incidunt mollitia exercitationem molestias error iste dolor voluptas.</p>
                        <button className='btns'>Know More</button>
                    </div>

                    <div className="body_right">
                            <div className='body_img'>
                                <p className='image_icon'><PlayCircleIcon /></p>
                                <img src={IMG} alt='img' />
                            </div>
                    </div>
                </div>

                <div className="container catagories">
                    <div className="cart">
                        <p><SettingsIcon /></p>
                        <h4>Construct<span>ion</span></h4>
                    </div>
                    <div className="cart">
                        <p><CloudIcon /></p>
                        <h4>DUMMY<span>-LOGO</span></h4>
                    </div>
                    <div className="cart">
                        <p><RedditIcon /></p>
                        <h4>Random<span>Logo</span></h4>
                    </div>
                    <div className="cart">
                        <p><HandymanIcon /></p>
                        <h4>Random <span>Brand</span></h4>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Body