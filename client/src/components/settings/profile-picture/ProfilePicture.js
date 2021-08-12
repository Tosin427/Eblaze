import React from 'react'
import img from '../../../img/profile-img.jpg'
import './ProfilePicture.css'

const ProfilePicture = ({children, ...rest}) => {
    return <div {...rest} className="profile-picture">
        <img src={img} alt='Profile Picture' />
        {children}
    </div>
} 

export default ProfilePicture;