import React from 'react'
import Label from '../../form/input/Label'
import Input from '../../form/input/input'
import Button from '../../form/button/Button'
import ProfilePicture from '../profile-picture/ProfilePicture'

const ProfileSetting = () => {
    return <div className='profile-settings'>
        <form>
            <ProfilePicture />
            <h4 >KYC Level 0</h4>
        <Label label="Name" />
        <Input
            onChange={() => null}
            value="Chinedu Ukpe"
            placeholder=""
            onIconClick={null}
        />
        <Label label="Email" />
        <Input
            onChange={() => null}
            value="chinedu_ukpe@oulook.com"
            placeholder="Email"
            onIconClick={()=> null}
        />
        <Label label="Phone" />
        <Input
            onChange={() => null}
            value=""
            placeholder="08038080619"
            onIconClick={null}
        />
        <Button variant="primary">Update </Button>
        </form>
    </div>
}

export default ProfileSetting;