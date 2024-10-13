import React from 'react'
import { assets } from '../../assets/assets'
import './Appdownload.css'

function Appdownload() {
    return (
        <div className='app-download'id='app-download'>
            <p>for better Experience Download <br/> Tomato App </p>
            <div className="app-download-platform">
                <img src={assets.play_store} alt="" />
                <img src={assets.app_store} alt="" />
            </div>
        </div>
        
    )
}

export default Appdownload
