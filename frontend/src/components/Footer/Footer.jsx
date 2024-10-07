import React from 'react'
import { assets } from '../../assets/assets'
import './footer.css'

function Footer() {
    return (
        <div className='footer' id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                    <img src={assets.logo} alt="" />
                    <p>Explore the best dishes from local restaurants, delivered straight to your door. Have questions? Contact us at support@foodieapp.com or follow us on [twitter], [Facebook], and [linkdin] for the latest updates and offers.</p>
                    <div className="footer-social-icons">
                        <a href="https://www.facebook.com/Yash Ranawat"> <img src={assets.facebook_icon} alt="" /></a>
                        <a href="https://www.linkedin.com/in/yash-kumar-rana-674029291"> <img src={assets.linkedin_icon} alt="" /></a>
                        
                      
                        <img src={assets.twitter_icon} alt="" />
                       
                </div>
                </div>
              
                <div className="footer-content-center">
                    <h2>Company</h2>
                    <ul>
                        <li>Home</li>
                    <li>About us</li>
                    <li>Deliver</li>
                    <li>Privacy Policy</li>
                    </ul>
                </div>
                <div className="footer-content-right">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>9569633102</li>
                        <li>yashrana097@gmail.com</li>
                    </ul>
                </div>
               
            </div>
            <hr />
            <p className='footer-copyright'>Copyright © 2024 Tomato.com- All Right Reserved. </p>

        </div>
       
        
    )
}

export default Footer
