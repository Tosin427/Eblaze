import React from 'react'
import Button from '../../form/button/Button'
import Input from '../../form/input/input'
import Label from '../../form/input/Label'

const ChangePassword = () => {
    return <div>
        <h4>Change Password</h4>
        <form>
        <Label label="Old Password"/>
        <Input
            value=""
            placeholder="Old Password"
            onChange={() => null}
            icon="fa fa-eye"

        />
        <Label label="New password"/>
        <Input
            value=""
            placeholder="New password"
            onChange={() => null}
            icon="fa fa-eye"

        />
        <Label label="Confirm password"/>
        <Input
            value=""
            placeholder="Confirm new password"
            onChange={() => null}
            icon="fa fa-eye"

        />
        <Button variant='primary'>Change Password</Button>
        </form>
    </div>
}

export default ChangePassword;