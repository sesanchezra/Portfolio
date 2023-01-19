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
        image: ReactLogo
    },
    {
        title: 'CSS',
        image: Css
    },
    {
        title: 'Javascript',
        image: Js
    },
    {
        title: 'Axios',
        image: Axios
    },
    {
        title: 'Ajax',
        image: Ajax
    },
    {
        title: 'React Router Dom',
        image: Router
    },
    {
        title: 'Redux.js',
        image: Redux
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
    return (
        <div className='Skills' id='Skills'>
            <div className='Skills__title'>
                <h2>
                    My Skills
                </h2>
            </div>

            <div className='stack' id='stack'>
                <button onClick={previousSlide}>
                    {'<'}
                </button>
                <div className='slider'>
                    {
                        skills?.map((skill, index) => (
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
                        ))
                    }
                </div>
                <button onClick={nextSlide}>
                    {'>'}
                </button>
            </div>


        </div>
    )
}

export default Skills
