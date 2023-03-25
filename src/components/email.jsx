import React, { useState } from 'react';

export default function Email(){

    //Submitting the mail
   

    //Getting mail input
    const [email, setEmail] = useState('')

    function handleChange(event){
        setEmail(event.target.value)
    }

    function handleSubmit(event){
        event.preventDefault();
        setEmail('')
        console.log('Submitted')
    }
    // 8c650560dd9654f5f3e410fd4f16f84d


    return(
        <form 
            action="https://formsubmit.co/azeezhazeezah010@gmail.com" 
            method="POST"
        >
            <input 
                name='email' 
                type='email' 
                placeholder='Enter your email' 
                className='input'
                value={email}
                onChange={handleChange}
            />
            <button type='submit' onSubmit={handleSubmit} className='btn btn-primary'>Sign Up Now</button>
        </form>
    )
}