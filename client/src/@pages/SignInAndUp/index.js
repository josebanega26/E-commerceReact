import React from 'react'
import { SignIn, SignUp } from '../../@components'
import { Redirect } from '@reach/router'
import { connect } from 'react-redux'
import './style.scss'
const _SignInAndUp = (props) => {
    const { currentUser } = props
    return (
        <div className='sign-in-n-up'>
            {
                currentUser ? <Redirect to="/" noThrow></Redirect> : null
            }
            <SignIn></SignIn>
            <SignUp></SignUp>
        </div>
    )
}
const mapStateToProps = (state) => ({
    currentUser: state.user.currentUser
})
const SignInAndUp = connect(mapStateToProps)(_SignInAndUp)
export { SignInAndUp }
