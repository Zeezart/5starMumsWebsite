import React from 'react'
import Email from './email'


export default function Hero(){
    return(
        <section id='hero'>
            <div className='left-content'>
                <p className='company-name'>5StarMums</p>
                <h1>The <span className='blue'>unique postpartum solution</span> to the problems <br />women face</h1>
                <p className='sub-topic'>Join our community and find support on your journey to <br />
                motherhood-together, we can overcome postpartum stress!</p>
                <div className='form'>
                    <Email />
                </div>
            </div>
            <div className='right-content'>
                <img src='images/hero-image.svg' />
            </div>
        </section>
    )
}