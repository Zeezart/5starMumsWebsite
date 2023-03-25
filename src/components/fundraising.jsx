import React from 'react'
import 'aos/dist/aos.css'

export default function Fundraising(){

    return(
        <section id='fundraising' data-aos='fade-up'>
            <div className='left-content'>
                <h1 className='bold-title'>Fundraise for a great cause</h1>
                <p className='service-content'>We are hoping to raise $50,000 to help 5StarMums get to the next level 
                because no mother in our community should lack help. 
                Please donate today to help us save, support and change lives</p>
                <button className='btn btn-primary'>Donate</button>
            </div>
            <div className='right-content image'>
                <img src='images/fundraising.svg' />
            </div>
        </section>
    )
}