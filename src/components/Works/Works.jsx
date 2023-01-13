import React from 'react'
import '../Works/Works.css'

// Covers of each project
import TechShop from '../../assets/TechShop.png'
import Saine from '../../assets/Saine.png'
import Pokedex from '../../assets/Pokedex.png'


//Logo of each stack
import Redux from '../../assets/react-redux.png'
import Router from '../../assets/react-router.png'
import Ajax from '../../assets/ajax.png'
import Axios from '../../assets/axios.png'
import ReactLogo from '../../assets/react.png'
import Js from '../../assets/js.png'
import Css from '../../assets/css.png'

const works = [
    {
        name: 'TechShop',
        cover: TechShop,
        stack:[
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
        stack:[
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
        stack:[
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
    return (
        <div className='Works'>
            <div className='Works__title'>
                <h2>
                    My Projects
                </h2>
            </div>
            <div className='Works__controllers'>
                <button className='Works__controllers__item'>
                    TechShop
                </button>
                <button className='Works__controllers__item'>
                    Saine
                </button>
                <button className='Works__controllers__item'>
                    Pokedex
                </button>
            </div>
        </div>
    )
}

export default Works
