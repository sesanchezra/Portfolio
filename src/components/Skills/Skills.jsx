import React, { useEffect, useState } from 'react'
import { ScrollingCarousel } from '@trendyol-js/react-carousel';
import '../Skills/Skills.css'

//Logo of each stack
import Redux from '../../assets/Stack/react-redux.png'
import Router from '../../assets/Stack/react-router.png'
import Ajax from '../../assets/Stack/ajax.png'
import Axios from '../../assets/Stack/axios.png'
import ReactLogo from '../../assets/Stack/react.png'
import Js from '../../assets/Stack/js.png'
import Css from '../../assets/Stack/css.png'

const skills = [
    {
        title: 'React.js',
        image: ReactLogo,
        type: 'Tech Skills'
    },
    {
        title: 'CSS',
        image: Css,
        type: 'Tech Skills'
    },
    {
        title: 'Javascript',
        image: Js,
        type: 'Tech Skills'
    },
    {
        title: 'Axios',
        image: Axios,
        type: 'Tech Skills'
    },
    {
        title: 'Ajax',
        image: Ajax,
        type: 'Tech Skills'
    },
    {
        title: 'React Router Dom',
        image: Router,
        type: 'Tech Skills'
    },
    {
        title: 'Redux.js',
        image: Redux,
        type: 'Tech Skills'
    },
    {
        title: 'Leadership',
        image: Redux,
        type: 'Tech Skills'
    }
]

const options = [
    {
        title: 'Tech Skills'
    },
    {
        title: 'Soft Skills'
    }
]

const Skills = () => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [initial, setInitial] = useState(true)

    /* ---- Funcionality of next - previous buttons ----*/

    const previousSlide = () => {
        if (currentIndex > 0 && currentIndex < skills?.length) {
            let newValue = currentIndex - 1
            setCurrentIndex(newValue)
        }
    }
    const nextSlide = () => {
        if (currentIndex >= 0 && currentIndex < skills?.length - 1) {
            let newValue = currentIndex + 1
            setCurrentIndex(newValue)
        }
    }


    useEffect(() => {
        if (currentIndex < skills.length) {
            document.getElementById(currentIndex).scrollIntoView({
                behavior: 'smooth',
                inline: 'center'
            })
        }
    }, [currentIndex])

    /* -------------- */

    /* ---- Controllers functionality ----------*/

    const [controller, setController] = useState({
        title: 'Tech Skills'
    })

    const toggleController = (name) => {
        setController({
            title: name
        })
    }

    console.log(controller)
    return (
        <div className='Skills' id='Skills'>
            <div className='Skills__title'>
                <h2>
                    My Skills
                </h2>
            </div>
            <div className='skills__controller'>
                {
                    options?.map(option => (
                        <button className={`Works__controllers__item ${(controller?.title === option?.title) ? 'controller__active' : 'controller__inactive'}`} key={option?.title} onClick={() => toggleController(option?.title)}>
                            {
                                option?.title
                            }
                        </button>
                    ))
                }

            </div>

            <div className='stack' id='stack'>
                <button onClick={previousSlide} className='previous__btn'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" /></svg>
                </button>
                <div className='slider'>
                    {
                        skills?.map((skill, index) => (
                            skill?.type === controller.title ?
                                <div className='skill__container' id={index} key={skill?.title}>
                                    <div className='skill__img'>
                                        <img src={skill?.image} alt="image" />

                                    </div>
                                    <div className='skill__content'>
                                        <h2>{skill?.title}</h2>
                                        <a href="/#/works" className='projects'>
                                            Works
                                        </a>
                                    </div>
                                </div>
                                :
                                <h2>Empty</h2>
                        ))
                    }
                </div>
                <button onClick={nextSlide} className='next__btn'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" /></svg>
                </button>
            </div>


        </div>
    )
}

export default Skills
