import React from 'react'
import './About.css'
import Profile from '../../assets/Profile.png'

const about = () => {
    const scrollDown = (e)=>{
        e.preventDefault()
        window.scroll(0,2000)
        
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
                        <h5>
                            BIO
                        </h5>
                        <p>
                            I am passionate about life, who has found in software development, the best way to serve others; My technical and soft skills allow me to better understand problems and develop efficient and intuitive solutions that always contribute to making people's lives better.
                        </p>
                    </div>
                </div>
                <button onClick={scrollDown}>
                    Scroll
                </button>
            </div>

            <div className='About__second'>

            </div>
        </div>
    )
}

export default about
