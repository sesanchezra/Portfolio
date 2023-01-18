import React, { useEffect } from 'react'
import '../Works/Works.css'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setWorksControllers } from '../../store/slices/worksControllers.slice';
import { ScrollingCarousel } from '@trendyol-js/react-carousel';
import { BsLink45Deg } from "react-icons/bs";
import { IconContext } from "react-icons";
import { GiClick } from "react-icons/gi";





// Covers of each project
import TechShop from '../../assets/Projects/Logo/TechShop.png'
import Saine from '../../assets/Projects/Logo/SaineLogo.png'
import Pokedex from '../../assets/Projects/Logo/Pokeapi.png'


//Logo of each stack
import Redux from '../../assets/Stack/react-redux.png'
import Router from '../../assets/Stack/react-router.png'
import Ajax from '../../assets/Stack/ajax.png'
import Axios from '../../assets/Stack/axios.png'
import ReactLogo from '../../assets/Stack/react.png'
import Js from '../../assets/Stack/js.png'
import Css from '../../assets/Stack/css.png'
import { useState } from 'react';

const works = [
    {
        name: 'TechShop',
        cover: TechShop,
        stack: [
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
        ],
        description: 'Tech Shop is an e-commerce developed with React.js and Redux; It is a project focused on Frontend development, where an API is also integrated, to which requests for products, categories, user authentication, among other functionalities are made.',
        link: 'https://techshop-io.netlify.app/',
        repository: 'https://github.com/sesanchezra/tech-shop'
    },
    {
        name: 'Saine',
        cover: Saine,
        stack: [
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
        ],
        description: 'Saine is a healthy food e-commerce where after a complete research work, the primary needs of the users of this application were determined; The main objective was to have a simple application, where the necessary steps to make a purchase were reduced.',
        link: 'https://saine.netlify.app/',
        repository: 'https://github.com/sesanchezra/NoCountry-C8'
    },
    {
        name: 'Pokedex',
        cover: Pokedex,
        stack: [
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
            }
        ],
        description: 'Pokedex is a frontend project that consumes the famous pokeAPI, in this project asynchronous requests with axios are integrated, and the handling of responses in the application to display content for users',
        link: 'https://pokedex-app-sesanchez.netlify.app/',
        repository: 'https://github.com/sesanchezra/entregable-5'
    }


]

const Works = () => {


    const worksControllers = useSelector(state => state.worksControllersSlice)
    const dispatch = useDispatch();


    const toggleController = (name) => {
        const setControllers = () => dispatch(setWorksControllers(
            {
                title: name,
                isActive: true
            }))
        setControllers()
        document.getElementById(name).scrollIntoView({
            behavior: 'smooth'
        });
        document.getElementById(`div-${name}`).scrollIntoView({
            behavior: 'smooth'
        });

    }

    useEffect(() => {
        document.getElementById(worksControllers?.title).scrollIntoView({
            behavior: 'smooth'
        });
        document.getElementById(`div-${worksControllers?.title}`).scrollIntoView({
            behavior: 'smooth'
        });
    }, [])

    return (
        <div className='Works'>
            <div className='Works__title'>
                <h2>
                    My Projects
                </h2>
            </div>
            <div className='Works__controllers'>
                {
                    works?.map(work => (
                        <button className={`Works__controllers__item ${(worksControllers?.title === work?.name) ? 'controller__active' : 'controller__inactive'}`} key={work?.name} onClick={() => toggleController(work?.name)} id={work?.name}>
                            {
                                work?.name
                            }
                        </button>
                    ))
                }
            </div>
            <div className='Works__card'>
                {
                    works?.map(work => (
                        <div className='container__card' key={work?.name}>
                            <div className='card__project' id={`div-${work?.name}`}>
                                <div className="flip-card">
                                    <div className="flip-card-inner">
                                        <div className="flip-card-front">
                                            <div className="card__img" >
                                                <img src={work?.cover} alt="cover" />
                                            </div>
                                            <IconContext.Provider value={{ className: "touch__me", color: 'white', width: '0.5em' }}>
                                                <GiClick />
                                            </IconContext.Provider>

                                        </div>
                                        <div className="flip-card-back">
                                            <div className='card__back'>
                                                <IconContext.Provider value={{ className: "Footer__button" }}>
                                                    <a href={`${work?.link}`} target='_blank' className='Footer__button'>
                                                        <BsLink45Deg />
                                                    </a>
                                                </IconContext.Provider>


                                                <a href={`${work?.repository}`} target='_blank' className='Footer__button'>
                                                    <svg viewBox="0 0 72 72" width="64px" height="64px"><path d="M36,12c13.255,0,24,10.745,24,24c0,10.656-6.948,19.685-16.559,22.818c0.003-0.009,0.007-0.022,0.007-0.022	s-1.62-0.759-1.586-2.114c0.038-1.491,0-4.971,0-6.248c0-2.193-1.388-3.747-1.388-3.747s10.884,0.122,10.884-11.491	c0-4.481-2.342-6.812-2.342-6.812s1.23-4.784-0.426-6.812c-1.856-0.2-5.18,1.774-6.6,2.697c0,0-2.25-0.922-5.991-0.922	c-3.742,0-5.991,0.922-5.991,0.922c-1.419-0.922-4.744-2.897-6.6-2.697c-1.656,2.029-0.426,6.812-0.426,6.812	s-2.342,2.332-2.342,6.812c0,11.613,10.884,11.491,10.884,11.491s-1.097,1.239-1.336,3.061c-0.76,0.258-1.877,0.576-2.78,0.576	c-2.362,0-4.159-2.296-4.817-3.358c-0.649-1.048-1.98-1.927-3.221-1.927c-0.817,0-1.216,0.409-1.216,0.876s1.146,0.793,1.902,1.659	c1.594,1.826,1.565,5.933,7.245,5.933c0.617,0,1.876-0.152,2.823-0.279c-0.006,1.293-0.007,2.657,0.013,3.454	c0.034,1.355-1.586,2.114-1.586,2.114s0.004,0.013,0.007,0.022C18.948,55.685,12,46.656,12,36C12,22.745,22.745,12,36,12z" /></svg>
                                                </a>
                                            </div>


                                        </div>
                                    </div>
                                </div>
                                <div className='card__content'>
                                    <div className="card__info">
                                        <h4 className="card__title">{work?.name}</h4>
                                        <p className="card__body">{work?.description}</p>
                                    </div>
                                    <div className='skills'>
                                        <ScrollingCarousel>
                                            {
                                                work?.stack.map(stack => (
                                                    <button className='skills__button' key={stack?.title}>
                                                        {
                                                            stack?.title
                                                        }
                                                    </button>
                                                ))
                                            }
                                        </ScrollingCarousel>

                                    </div>
                                </div>

                            </div>
                        </div>

                    ))
                }



            </div>
        </div>
    )
}

export default Works
