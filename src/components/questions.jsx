import React, { useState } from 'react'
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Questions(props){
   
    const [dropdown, setDropdown] = useState(false)

    function toggle(){
        setDropdown(!dropdown)
    }

    return (
        <div className='right-content'>
            <div className='ques'>
                <p><b>{props.ques}</b></p>
                <FontAwesomeIcon icon={dropdown ? faAngleUp : faAngleDown} id='dropdown' onClick={toggle}/>
            </div>
            
            <p  style={{display: dropdown ? "block" : "none"}}>{props.ans}</p>
        </div>
    )
}