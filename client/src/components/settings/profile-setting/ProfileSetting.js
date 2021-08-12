
import React, { useEffect, useState } from 'react'


import Label from '../../form/input/Label'
import Input from '../../form/input/input'
import Button from '../../form/button/Button'
import ProfilePicture from '../profile-picture/ProfilePicture'


const ProfileSetting = ({user}) => {
    console.log(user ? user.name : "no name")
    const initial_state = {
        name: '',
        email: '',
        phone:''
    }

    const [state, setState] = useState(initial_state)

    useEffect(() => {
        setState(prevState => ({
            ...prevState,
            name: user ? user.name : '', 
            email: user ? user.email : '', 
            phone: user ? user.phone : '', 
        }))
    },[])
    

    return <div className='profile-settings'>
        <form>
            <ProfilePicture />
            <h4 >KYC Level 0</h4>
        <Label label="Name" />
        <Input
            onChange={() => null}

            value={state.name}

            placeholder=""
            onIconClick={null}
        />
        <Label label="Email" />
        <Input
            onChange={() => null}

            value={state.email}
            disabled={true}

            placeholder="Email"
            onIconClick={()=> null}
        />
        <Label label="Phone" />
        <Input
            onChange={() => null}
            value=""

            placeholder={state.phone}
            disabled={true}

            onIconClick={null}
        />
        <Button variant="primary">Update </Button>
        </form>
    </div>
}

export default ProfileSetting;