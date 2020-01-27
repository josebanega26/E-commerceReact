import React from 'react'
import { useInputChange } from '../../@customHooks'
import { FormInput, CustomButton } from '../index'
import './style.scss'
const SignIn = (props) => {

    const [input, handleInputChange, clearInput] = useInputChange()
    const { email = '', password = '' } = input

    const handleSubmit = (e) => {
        e.preventDefault()
        clearInput()
    }
    return (
        <div className='sign-in'>
            <h2>
                I alredy have a account
            </h2>
            <span> Sign in with your email and your password</span>
            <form action='submit'>
                <FormInput
                    label='Email'
                    name='email'
                    type='email'
                    required
                    value={email}
                    handleChange={handleInputChange}
                />
                <FormInput
                    label='Password'
                    name='password'
                    type='password'
                    required
                    value={password}
                    handleChange={handleInputChange}
                />
                <div className="buttons">
                    <CustomButton type='submit' onClick={handleSubmit} >
                        Sing In</CustomButton>
                    <CustomButton type='submit' className='secondary' onClick={handleSubmit} >
                        Sing In with Google</CustomButton>
                </div>
            </form>

        </div>
    )
}

export { SignIn }
