import React from 'react'
import './About.css'
import Profile from '../../assets/Profile.png'

const about = () => {
    return (
        <div className='About'>
            <div className='About__title'>
                <h2>
                    ABOUT ME
                </h2>
            </div>
            <div className='About__img'>
                <div className='Round__frame'>
                    <div className='background-1'></div>
                    <div className='background-2'></div>
                    <img src={Profile} alt="profile" />
                </div>
            </div>
        </div>
    )
}

export default about
