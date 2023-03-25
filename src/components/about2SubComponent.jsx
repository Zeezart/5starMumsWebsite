import React from 'react'

export default function About2SubComponent(props){
    return(
        <div className='about2-subcomponent'>
            <img src={props.img}/>
            <p className='about1-subcomponent-title'>{props.title}</p>
            <p className='about1-subcomponent-summary'>{props.summary}</p>
        </div>
    )
}