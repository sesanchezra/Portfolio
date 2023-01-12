import React from 'react'
import '../Works/Works.css'
import TechShop from '../../assets/TechShop.png'
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

            </div>
        </div>
    )
}

export default Works
