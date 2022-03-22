import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import './Header.css'
import Logo from '../../../assets/images/logo/logo_dark.svg'

const Header = () => {
    const { authenticated, userInfor } = useSelector(state => state.auth)

    return (
        <header className="header" id="header">
        <nav className="nav container">
            <div className="header-left">
                <a href="#" className="header__logo">
                    <img src={Logo} alt="" />
                </a>

                <div className="nav__list-desktop">
                    <ul>
                        <li className="nav__item">
                            <Link to="/shop" className='nav__link'>Home</Link>
                        </li>
                        <li className="nav__item">
                            <Link to="/shop" className='nav__link'>Shop</Link>
                        </li>
                        <li className="nav__item">
                            <Link to="/shop" className='nav__link'>Collections</Link>
                        </li>
                        <li className="nav__item">
                            <Link to="/shop" className='nav__link'>Blog</Link>
                        </li>
                        <li className="nav__item">
                            <Link to="/shop" className='nav__link'>Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="header-right">
                <div className="header__search">
                    <i className='bx bx-search-alt'></i>
                    <span>Search</span>
                </div>
                <div className="header__cart">
                    <i className='bx bx-shopping-bag'></i>
                    <Link to='/cart'>
                         <span>Cart</span>
                    </Link>
                </div>
                <div className="header__user">
                    <i className='bx bx-user' ></i>
                    {authenticated ? userInfor.displayName : (<Link to="/login">Login</Link>)}
                    <ul className="header__user-submenu">
                        <li><Link to='/order'>Order</Link></li>
                        <li>Logout</li>
                    </ul>
                </div>
                <div className="header__mobile-toggle">
                    <i className='bx bx-menu'></i>
                </div>
            </div>
            <div className="nav__list-mobile">
                <div className="nav__list-content">
                    <h2 className="nav__title">Menu</h2>
                    <ul>
                        <li className="nav__item">
                            <a href="#" className="nav__link">Home</a>
                        </li>
                        <li className="nav__item">
                            <a href="#" className="nav__link">Shop</a>
                        </li>
                        <li className="nav__item">
                            <a href="#" className="nav__link">Collections</a>
                        </li>
                        <li className="nav__item">
                            <a href="#" className="nav__link">Blog</a>
                        </li>
                        <li className="nav__item">
                            <a href="#" className="nav__link">Contect</a>
                        </li>
                    </ul>
                </div>

                <div className="user">
                    <h2 className="nav__title">User</h2>
                    <ul>
                        <li className="nav__item">
                            <a href="#" className="nav__link">Đăng nhập</a>
                        </li>
                        <li className="nav__item">
                            <a href="#" className="nav__link">Đăng ký</a>
                        </li>
                    </ul>
                </div>

                <div className="cart">
                    <h2 className="nav__title">Cart</h2>
                </div>
            </div>
        </nav>
        </header>
    )
}

export default Header