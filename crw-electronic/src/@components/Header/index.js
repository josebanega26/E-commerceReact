import React from 'react'
import { Link } from '@reach/router'
import './style.scss'
import { ReactComponent as Logo } from '../../@assets/logo.svg'
import { auth } from '../../firebase/firebase.util'
import { connect } from 'react-redux'
import { CartIcon, CartDropdown } from '../index'

const _Header = (props) => {
    const { currentUser, dropdownState, } = props
    console.log('dropdownState', dropdownState)
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
                        : <div className='option' onClick={signOut}> SIGN OUT</div>
                }
                <CartIcon />
            </div>
            {dropdownState && <CartDropdown ></CartDropdown>}
        </div>
    )
}

_Header.defaultProps = {
    currentUser: {
        displayName: ''
    }
}
const mapStateToProps = (state) => ({
    currentUser: state.user.currentUser,
    dropdownState: state.cart.dropdownState
})

const mapDispatchToProps = dispatch => ({
})
const Header = connect(mapStateToProps, mapDispatchToProps)(_Header)
export { Header }
