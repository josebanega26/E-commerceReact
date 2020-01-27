import React from 'react'
import { Link } from '@reach/router'
import './style.scss'
import { ReactComponent as Logo } from '../../@assets/logo.svg'
const Header = () => {
    return (
        <div className='header'>
            <Link to='/' className="logo-container">
                <Logo className='logo'></Logo>
            </Link>

            <div className='options'>
                <Link className='option' to='shop'> SHOP</Link>
                <Link className='option' to='contact'> CONTACT</Link>
                <Link className='option' to='signIn'> SIGN IN</Link>
            </div>
        </div>
    )
}

export { Header }
