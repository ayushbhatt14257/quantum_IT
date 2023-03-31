import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <>
        <section className='footer_section'> 
          <div className="container footer_container">

            <div className="footer_left">
              <h2>Subscribe Our Newsletter For More Update</h2>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt eaque inventore quas voluptatum, exercitationem.</p>
            </div>

            <div className="footer_right">
              <form action="">
                <input type="text" placeholder='Enter Your Name' />
              </form>
              <button className='btn'>Subscribe</button>
            </div>
          </div>
        </section>
    </>
  )
}

export default Footer