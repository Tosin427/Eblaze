import React from 'react'
import BlockIcon from '../../block-icon/BlockIcon'
import Button from '../../form/button/Button'
import ProfilePicture from '../profile-picture/ProfilePicture'
import './Referral.css'


const Referral = () => {
    return <div className='referral'>
        <ProfilePicture style={{marginBottom: '3em'}} />
        <p>Your referral code is: </p>
        <h4>$BNG-78495GB</h4>
        <BlockIcon icon='fa fa-copy' />
        <small>Invite your friends and share your referral code or link with them to get coupon codes for trade discount</small>
        <Button>Invite</Button>
    </div>
}

export default Referral;