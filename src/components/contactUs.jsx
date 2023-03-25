import React from 'react'
import 'aos/dist/aos.css'

export default function Contact(){
    return(
        <section id='subscribe' data-aos='fade-up'>
            <h1>Got more questions?<br />Contact Us</h1>
            <div className='envelope'>
                <div className='envelope-img'>
                    <img src='images/envelope.svg' />
                </div>
                <div className='form-content'>
                    <form>
                        <label>Email Address</label>
                        <input type='email' name='email' placeholder='Enter your email' className='input contact-input'/>
                        <label>Your Message</label>
                        <textarea type='text' className='input contact-input' placeholder='Tell us what you need...' />
                    </form>
                    <button className='btn btn-primary'>Send</button>
                </div>
            </div>
        </section>
    )
}