import React from 'react'
import './About.css'
import Profile from '../../assets/Profile.png'
import NoCountry from '../../assets/NoCountry.png'

const about = () => {
    const scrollDown = (e) => {
        e.preventDefault()
        window.scroll(0, 2000)

    }

    return (
        <div className='About'>
            <div className='About__first'>

                <div className='About__title'>
                    <h2>
                        ABOUT ME
                    </h2>
                </div>
                <div className='About__img'>
                    <div className='Round__frame'>
                        <div className='background-1'></div>

                        <img src={Profile} alt="profile" />
                    </div>
                </div>
                <div className='About__description'>
                    <div className='About__bio'>
                        <h4>
                            BIO
                        </h4>
                        <p>
                            I am passionate about life, who has found in software development, the best way to serve others; My technical and soft skills allow me to better understand problems and develop efficient and intuitive solutions that always contribute to making people's lives better.
                        </p>
                    </div>
                </div>
                <button onClick={scrollDown} className='arrows__button'>
                    <div className='arrow-1'></div>
                    <div className='arrow-2'></div>
                    <div className='arrow-3'></div>
                </button>

            </div>
            <div className='divider'></div>
            <div className='About__second'>
                <div className='About__experience'>

                    <h4>
                        EXPERIENCE
                    </h4>
                    <div className='experience__container'>
                        <div className='content'>
                            <div className='Header'>
                                <div className='experience__img'>
                                    <img src={NoCountry} alt="NoCountry" />
                                </div>
                                <div className='Header__description'>
                                    <h5>
                                        Frontend Developer & Team Leader

                                    </h5>
                                    <span>
                                        October 2022 - Present
                                    </span>
                                </div>

                            </div>
                            <div className='divider'></div>
                            <div className='description'>
                                <h6>
                                    <span>No Country</span>
                                </h6>
                                <p>
                                    Im developing web applications with technologies such as React.js, Redux.js, bootstrap, javascript; I have integrated APIs to the frontend with Axios.
                                </p>
                                <div>
                                    <button></button>
                                </div>
                                <p className='hide'>
                                    In addition to being a developer, I had the opportunity to lead a development team. This opportunity allowed me to reinforce and enhance soft skills such as accurate communication, leadership, time and team management, among many others.
                                </p>
                            </div>


                        </div>


                    </div>

                </div>
            </div>
        </div >
    )
}

export default about
