import React, { useState } from 'react'
import './About.css'
import Profile from '../../assets/Profile.png'
import NoCountry from '../../assets/Works/NoCountry.png'
import IDforIdeas from '../../assets/Works/ID.png'
import { MdExpandMore, MdExpandLess } from "react-icons/md";
import { ScrollingCarousel } from '@trendyol-js/react-carousel';

const skillsNoCountry = [
    'HTML5',
    'CSS',
    'Javascript',
    'React.js',
    'API Rest',
    'Leadership',
    'Communication Skills',
    'Customer development',
    'Project Management',
    'Scrum Methodologies',
    'Design Thinking',
    'Bootstrap'
]


const about = () => {
    const scrollDown = (e) => {
        e.preventDefault()
        window.scroll(0, 800)

    }

    const [isHideCountry, setIsHideCountry] = useState(true)
    const [isHideId, setIsHideId] = useState(true)

    const toggleHideCountry = () => {
        setIsHideCountry(!isHideCountry)
    }
    const toggleHideId = () => {
        setIsHideId(!isHideId)
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
                            <div className='skills'>
                                <h6>
                                    Skills
                                </h6>
                                <ScrollingCarousel>
                                    {
                                        skillsNoCountry?.map(skill => (
                                            <button className='skills__button'>
                                                {
                                                    skill
                                                }
                                            </button>
                                        ))
                                    }
                                </ScrollingCarousel>


                            </div>
                            <div className='divider'></div>
                            <div className='description'>
                                <h6>
                                    <span>No Country</span>
                                </h6>
                                <p>
                                    Im developing web applications with technologies such as React.js, Redux.js, bootstrap, javascript; I have integrated APIs to the frontend with Axios.
                                </p>

                                <button onClick={toggleHideCountry} className='expand__button'>
                                    {
                                        isHideCountry ?
                                            <MdExpandMore />
                                            :
                                            <MdExpandLess />
                                    }

                                </button>

                                <div className={`${isHideCountry ? 'hide' : 'show'}`}>
                                    <p >
                                        In addition to being a developer, I had the opportunity to lead a development team. This opportunity allowed me to reinforce and enhance soft skills such as accurate communication, leadership, time and team management, among many others.
                                    </p>
                                </div>
                            </div>


                        </div>


                    </div>

                    <div className='experience__container'>
                        <div className='content'>
                            <div className='Header'>
                                <div className='experience__img'>
                                    <img src={IDforIdeas} alt="IDforIdeas" />
                                </div>
                                <div className='Header__description'>
                                    <h5>
                                        Frontend Developer
                                    </h5>
                                    <span>
                                        September 2022 - Present
                                    </span>
                                </div>

                            </div>
                            <div className='divider'></div>
                            <div className='skills'>
                                <h6>
                                    Skills
                                </h6>
                                <ScrollingCarousel>
                                    {
                                        skillsNoCountry?.map(skill => (
                                            <button className='skills__button'>
                                                {
                                                    skill
                                                }
                                            </button>
                                        ))
                                    }
                                </ScrollingCarousel>
                            </div>
                            <div className='divider'></div>
                            <div className='description'>
                                <h6>
                                    <span>ID for Ideas</span>
                                </h6>
                                <p>
                                    I had the opportunity to directly build all the requirements of the application; using innovation methodologies that allowed me to better understand the needs of clients
                                </p>
                                <button onClick={toggleHideId} className='expand__button'>
                                {
                                    isHideId ?
                                        <MdExpandMore />
                                        :
                                        <MdExpandLess />
                                }
                            </button>

                            <div className={`${isHideId ? 'hide' : 'show'}`}>
                                <p >
                                Being my first challenge as a team leader, I had to develop soft skills that would allow me to efficiently coordinate the entire work team; This is why I took on the challenge of learning new project management tools, as well as all the strategies to organize the team.
                                </p>
                            </div>
                            </div>
                            


                        </div>


                    </div>


                </div>
            </div>
        </div >
    )
}

export default about
