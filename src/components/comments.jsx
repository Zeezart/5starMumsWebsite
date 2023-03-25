import React from 'react';

export default function Comments(){
    return(
        <div className='individual-comments'>
            <img src='images/quote.svg' className='quote' />
            <p className='main-comment'>I've had more support in this community than any Facebook group I am on.</p>
            <div className='comment-details'>
                <img src='images/profile.svg' className='profile' />
                <p className='profile-name'>Mary Silva</p>
                <p className='profile-status'>Mother of 3</p>
            </div>
        </div>  
    )
}