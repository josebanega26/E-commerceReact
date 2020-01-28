import React from 'react'
import { Link } from '@reach/router'
import './style.scss'
import { ReactComponent as Logo } from '../../@assets/logo.svg'
import { auth } from '../../firebase/firebase.util'
import { connect } from 'react-redux'

const _Header = ({ currentUser }) => {
    const { displayName } = currentUser ? currentUser : { displayName: '' }
    const signOut = () => {
        auth.signOut()
    }
    return (
        <div className='header '>
            <Link to='/' className="logo-container option">
                <Logo className='logo'></Logo>
                {
                    displayName
                        ? <div className='display-name option'> {displayName}</div>
                        : null
                }
            </Link>

            <div className='options'>
                <Link className='option' to='shop'> SHOP</Link>
                <Link className='option' to='contact'> CONTACT</Link>
                {
                    !currentUser
                        ? <Link className='option' to='signIn'> SIGN IN</Link>
                        : <div className='option' onClick={signOut}> SIGN OUT</div>}
            </div>
        </div>
    )
}

_Header.defaultProps = {
    currentUser: {
        displayName: ''
    }
}
const mapStateToProps = (state) => ({
    currentUser: state.user.currentUser
})

const mapDispatchToProps = {

}
const Header = connect(mapStateToProps, mapDispatchToProps)(_Header)
export { Header }
