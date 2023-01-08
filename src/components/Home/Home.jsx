import React from 'react'
import './Home.css'
import Profile from '../../assets/Profile.png'
import Developer from '../../assets/developer.gif'
import Leadership from '../../assets/coach.gif'
import Scrum from '../../assets/friendship.gif'


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
            {/* <div className='Home__works'>
                <div className='Home__works__item'>
                    <div className='gif'>
                        <iframe src={Developer} frameborder="0" scrolling='no' ></iframe>
                    </div>
                    <div className='Home__works__item'>
                        <div className='decoration'>
                        </div>
                        <div className='content'>
                            <span>Fullstack developer</span>
                        </div>
                    </div>
                </div>
                <div className='Home__works__item'>
                    <div className='gif'>
                        <iframe src={Leadership} frameborder="0" scrolling='no' ></iframe>
                    </div>
                    <div className='Home__works__item'>
                        <div className='decoration'>
                        </div>
                        <div className='content'>
                            <span>Development team leader</span>
                        </div>
                    </div>

                </div>
                <div className='Home__works__item'>
                    <div className='gif'>
                        <iframe src={Scrum} frameborder="0" scrolling='no' ></iframe>
                    </div>
                    <div className='Home__works__item'>
                        <div className='decoration'>
                        </div>
                        <div className='content'>
                            <span>Scrum Agile Methodologies</span>
                        </div>
                    </div>

                </div>
            </div> */}
        </div>
    )
}

export default Home
