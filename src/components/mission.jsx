import React from 'react'

export default function Mission(props){
    return(
        <div className='mission'>
            <img src={props.img}/>
            <p className='about1-subcomponent-title'>{props.title}</p>
            <p className='about1-subcomponent-summary'>{props.summary}</p>
        </div>
    )
}