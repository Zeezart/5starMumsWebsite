import React from 'react'

export default function Numbers(props){
    return(
        <div id='numbers'>
            <img src={props.img} className="icons"/>
            <h1 className="figures">{props.fig}</h1>
            <p className='figure-titles'>{props.title}</p>
            <p className='figure-summary'>{props.summary}</p>
            <p className='link'>{props.btn}</p>
        </div>
    )
}