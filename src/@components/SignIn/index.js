import React from 'react'
import { useInputChange } from '../../@customHooks'
import { FormInput, CustomButton } from '../index'
import { auth, signInWithGoogle } from '../../firebase/firebase.util'
import './style.scss'
const SignIn = (props) => {

    const [input, handleInputChange, clearInput] = useInputChange()
    const { email = '', password = '' } = input

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { email, password } = input
        console.log('email', email)
        try {
            await auth.signInWithEmailAndPassword(email, password)
            clearInput({ email: '', password: '' })
        }
        catch (err) {
            console.log('err', err)
        }
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
                        Sign In</CustomButton>
                    <CustomButton onClick={signInWithGoogle} className='secondary'  >
                        Sign In with Google</CustomButton>
                </div>
            </form>

        </div>
    )
}

export { SignIn }
