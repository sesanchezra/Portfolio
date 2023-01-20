import React from 'react'
import { useForm } from "react-hook-form";
import './Contact.css'

const Contact = () => {
    const { register, handleSubmit, reset } = useForm();

    const submit = (data) => {
        const Message= `Hola 👋  - ${data?.Message}`
        const $buttonMailTo = document.getElementById('Transmitter')
        $buttonMailTo.setAttribute('href',`
        mailto:sesanchezra@gmail.com?subject=${data?.Subject} 
        &body=${Message}  - Correo:${data?.Email}
        `)
        $buttonMailTo.click()
    }
    return (
        <div className='Contact'>
            <h2>Contact Me</h2>
            <div className='form__container'>
                <form onSubmit={handleSubmit(submit)}>
                    <div className="inputGroup">
                        <input type="text" required {...register('Name')} />
                        <label >Name</label>
                    </div>
                    <div className="inputGroup">
                        <input type="email" required {...register('Email')} />
                        <label >Email</label>
                    </div>
                    <div className="inputGroup">
                        <input type="text" required {...register('Subject')} />
                        <label >Subject</label>
                    </div>
                    <div className="inputGroup">
                        <textarea type="text" required {...register('Message')} />
                        <label >Message</label>
                    </div>
                    <button className='button'>
                        Send Message
                    </button>
                    <a href="mailto:sesanchezra@gmail.com" id="Transmitter"></a>
                </form>
            </div>

        </div>
    )
}

export default Contact
