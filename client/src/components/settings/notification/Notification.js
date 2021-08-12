import React from 'react';
import Switch from '../../form/switch/Switch';
import './Notification.css'

const Notification = () => {
    return <div className='notification'>
        <h4 className='text-muted'>Nofitifcation Preference</h4>
        <div className='notification-wrapper'>
            <div>
                <p>Notification Type</p>
                <p>Send or receive funds</p>
                <p>Buy or Sell</p>
                <p>Rates Changes</p>
                <p>Promotions, updates and tips</p>
            </div>
            <div>
                <p>Email Alerts</p>
                <p><Switch /></p>
                <p><Switch /></p>
                <p><Switch active /></p>
                <p><Switch /></p>
            </div>
            <div>
                <p>Push Notifications</p>
                <p><Switch active /></p>
                <p><Switch active /></p>
                <p><Switch /></p>
                <p><Switch /></p>
            </div>
        </div>
        
    </div>
}

export default Notification;