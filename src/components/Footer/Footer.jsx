import React from 'react'
import './Footer.css'

import { Link } from 'react-router-dom'


const Footer = () => {
    
    return (
        <div className='Footer'>
            <a  href="https://www.linkedin.com/" target='_blank' className='Footer__button'>
                <svg  viewBox="0 0 30 30" width="30px" height="30px"><path d="M9,25H4V10h5V25z M6.501,8C5.118,8,4,6.879,4,5.499S5.12,3,6.501,3C7.879,3,9,4.121,9,5.499C9,6.879,7.879,8,6.501,8z M27,25h-4.807v-7.3c0-1.741-0.033-3.98-2.499-3.98c-2.503,0-2.888,1.896-2.888,3.854V25H12V9.989h4.614v2.051h0.065c0.642-1.18,2.211-2.424,4.551-2.424c4.87,0,5.77,3.109,5.77,7.151C27,16.767,27,25,27,25z" /></svg>
            </a>
            <a href='https://github.com/' target='_blank' className='Footer__button'>
                <svg  viewBox="0 0 72 72" width="64px" height="64px"><path d="M36,12c13.255,0,24,10.745,24,24c0,10.656-6.948,19.685-16.559,22.818c0.003-0.009,0.007-0.022,0.007-0.022	s-1.62-0.759-1.586-2.114c0.038-1.491,0-4.971,0-6.248c0-2.193-1.388-3.747-1.388-3.747s10.884,0.122,10.884-11.491	c0-4.481-2.342-6.812-2.342-6.812s1.23-4.784-0.426-6.812c-1.856-0.2-5.18,1.774-6.6,2.697c0,0-2.25-0.922-5.991-0.922	c-3.742,0-5.991,0.922-5.991,0.922c-1.419-0.922-4.744-2.897-6.6-2.697c-1.656,2.029-0.426,6.812-0.426,6.812	s-2.342,2.332-2.342,6.812c0,11.613,10.884,11.491,10.884,11.491s-1.097,1.239-1.336,3.061c-0.76,0.258-1.877,0.576-2.78,0.576	c-2.362,0-4.159-2.296-4.817-3.358c-0.649-1.048-1.98-1.927-3.221-1.927c-0.817,0-1.216,0.409-1.216,0.876s1.146,0.793,1.902,1.659	c1.594,1.826,1.565,5.933,7.245,5.933c0.617,0,1.876-0.152,2.823-0.279c-0.006,1.293-0.007,2.657,0.013,3.454	c0.034,1.355-1.586,2.114-1.586,2.114s0.004,0.013,0.007,0.022C18.948,55.685,12,46.656,12,36C12,22.745,22.745,12,36,12z" /></svg>
            </a>
            <a href='mailto:sesanchezra@gmail.com' target='_blank' className='Footer__button'>
                <svg width="64px" height="64px" viewBox="0 0 32 32" className='email' ><path d="M31,10c0,-1.326 -0.527,-2.598 -1.464,-3.536c-0.938,-0.937 -2.21,-1.464 -3.536,-1.464c-5.322,0 -14.678,0 -20,0c-1.326,-0 -2.598,0.527 -3.536,1.464c-0.937,0.938 -1.464,2.21 -1.464,3.536c0,3.486 0,8.514 0,12c-0,1.326 0.527,2.598 1.464,3.536c0.938,0.937 2.21,1.464 3.536,1.464c5.322,-0 14.678,-0 20,-0c1.326,0 2.598,-0.527 3.536,-1.464c0.937,-0.938 1.464,-2.21 1.464,-3.536c0,-3.486 0,-8.514 0,-12Zm-26.556,-0.221c-0,-0 5.145,4.237 8.372,6.894c1.849,1.523 4.519,1.52 6.365,-0.007c3.237,-2.677 8.413,-6.959 8.413,-6.959c0.425,-0.352 0.485,-0.983 0.133,-1.408c-0.351,-0.425 -0.982,-0.485 -1.408,-0.133c0,-0 -5.176,4.281 -8.412,6.959c-1.108,0.916 -2.71,0.918 -3.82,0.004c0,0 -8.372,-6.894 -8.372,-6.894c-0.426,-0.351 -1.056,-0.29 -1.407,0.136c-0.351,0.426 -0.29,1.057 0.136,1.408Z"/><g id="Icon"/></svg>
            </a>
            
        </div>
    )
}

export default Footer
