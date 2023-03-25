import React from 'react'
import About1SubComponent from './about1SubComponent'
import About2SubComponent from './about2SubComponent'
import Mission from './mission'
import advantages from '../lists/advantages'
import reasons from '../lists/reasons'
import missions from '../lists/missions'
import 'aos/dist/aos.css'

export default function About1(){

    const advantagesElement = advantages.map(advInfo => {
        return(

            <About1SubComponent 
                key = {advInfo.id}
                img = {advInfo.advImage}
                title = {advInfo.advTitle}
                summary = {advInfo.advSum}        
            />
        )
      })

      const reasonElement = reasons.map(rsnInfo => {
        return(

            <About2SubComponent 
                key = {rsnInfo.id}
                img = {rsnInfo.rsnImage}
                title = {rsnInfo.rsnTitle}
                summary = {rsnInfo.rsnSum}        
            />
        )
      })

      const missionsElement = missions.map(msnInfo => {
        return(

            <Mission
                key = {msnInfo.id}
                img = {msnInfo.msnImage}
                title = {msnInfo.msnTitle}
                summary = {msnInfo.msnSum}        
            />
        )
      })

    return(
        <section id='about'>
            <div className='about1 general-about-styling'>
                <div className='about-header'>
                    <h1>Don't go through<br /> "mumming" alone</h1>
                    <p> You don't have to face the difficulties of being a mum all by yourself. Feel free to <br />
                    request any assistance you require, as we are available to offer whatever support you <br />may need.</p>
                </div>
                 <div className='subComponents'  data-aos='fade-up'>
                    {advantagesElement}
                </div> 
            </div>
            <div className='about2 general-about-styling'>
                <div className='about-header'>
                    <h1>Platform built for</h1>
                </div>
                <div className='subComponents' data-aos='fade-up'>
                    {reasonElement}
                </div>
            </div>
            <div className='about3 general-about-styling'>
                <div className='about-header'>
                    <h1>Our Mission</h1>
                </div>
                <div className='mission-component' data-aos='fade-up'>
                    {missionsElement}
                </div>
            </div>
        </section>
    )
}