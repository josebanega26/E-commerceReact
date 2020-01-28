import React from 'react'
import { SignIn, SignUp } from '../../@components'
import './style.scss'
const SignInAndUp = (props) => {
    return (
        <div className='sign-in-n-up'>
            <SignIn></SignIn>
            <SignUp></SignUp>
        </div>
    )
}

export { SignInAndUp }
