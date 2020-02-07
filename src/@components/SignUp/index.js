import React from 'react'
import { FormInput, CustomButton } from '../index'
import { useInputChange } from '../../@customHooks'
import { createUserProfile, auth } from '../../firebase/firebase.util'
import './style.scss'


const SignUp = (props) => {
    const [userInput, setUserInput, clearInput] = useInputChange({})
    const { email = '', password = '', confirmPassword = '', displayName = '' } = userInput

    const handleOnClick = async event => {
        event.preventDefault()
        const { email, password, confirmPassword, displayName } = userInput
        if (password !== confirmPassword) {
            console.error('password don t match')
            return
        }
        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password)
            await createUserProfile(user, { displayName })
            clearInput({ email: '', password: '', confirmPassword: '', displayName: '' })
        }
        catch (err) {
            console.error('create user error', err)
        }
    }
    return (
        <div className="sign-up">
            <h2>
                I don't have a account
            </h2>

            <FormInput
                label='Name'
                name='displayName'
                type='text'
                required
                value={displayName}
                handleChange={setUserInput}
            />
            <FormInput
                label='Email'
                name='email'
                type='email'
                required
                value={email}
                handleChange={setUserInput}
            />
            <FormInput
                label='Password'
                name='password'
                type='password'
                required
                value={password}
                handleChange={setUserInput}
            />
            <FormInput
                label='confirmPassword'
                name='confirmPassword'
                type='password'
                required
                value={confirmPassword}
                handleChange={setUserInput}
            />
            <CustomButton type='submit' onClick={handleOnClick}
            //disabled={password.length < 1 || confirmPassword !== password}
            >
                Sign Up
            </CustomButton>
        </div>
    )
}

export { SignUp }
