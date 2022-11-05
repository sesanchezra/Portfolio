import React from 'react'
import './Home.css'
import Profile from '../../assets/Profile.png'

const Home = () => {
    return (
        <div className='Home'>
            <div className='Home__description'>
                <div className='Home__description__header'>
                    <h5>Hello, I'm</h5>
                    <h2>
                        SEBASTIAN
                    </h2>
                </div>
                <div className='Home__description__content'>
                    <p>
                        I`m frontend developer, with pasion to impact the world with simple and effective solutions, that people could love.
                    </p>
                </div>
            </div>
            <div className='Home__img'>
                <div className='background-1'></div>
                <div className='background-2'></div>
                <img src={Profile} alt="profile" />
            </div>
        </div>
    )
}

export default Home
