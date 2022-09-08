import React, { Component } from 'react'
import './Navbar.css'
import logo from '../../assets/image/logo.png'

export default class Navbar extends Component {
    state = {
        className: 'menu'
    }
    showMenu = (className) => {
        return (
            this.setState({
                className: className
            })
        )
    }
    checkClass = () => {
        if(this.state.className==="menu"){
            return 'show menu'
        }
        if(this.state.className==="show menu"){
            return 'menu'
        }
    }
  render() {
    
    return (
        <div>
            <div className='navbar'>
                <div className="nav-left">
                    <div className="logo">
                        <img src={logo} alt=""/>
                    </div>
                </div>
                <div className="nav-right">
                    <div className="nav-list">
                        <ul>
                            <li className='active'><a href='#'>Home</a></li>
                            <li><a href='#'>Introduction</a></li>
                            <li><a href='#'>Features</a></li>
                            <li><a href='#'>Team</a></li>
                            <li><a href='#'>News</a></li>
                            <li><a href='#'>Events</a></li>
                            <li><a href='#'>Blog</a></li>
                        </ul>
                    </div>
                    <a href='#' className='button'>Register</a>
                    <a href='#' className='button'>Login</a>
                    <div className="dropdown">En</div>
                </div>
                <div className="nav-burger" onClick={()=> this.showMenu(this.checkClass())}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div className={this.state.className}>
                <ul>
                    <li><a href='#'>Home</a></li>
                    <li><a href='#'>Introduction</a></li>
                    <li><a href='#'>Features</a></li>
                    <li><a href='#'>Team</a></li>
                    <li><a href='#'>News</a></li>
                    <li><a href='#'>Events</a></li>
                    <li><a href='#'>Blog</a></li>
                    <li><a href='#'>Login</a></li>
                    <li><a href='#'>Register</a></li>
                </ul>
            </div>
        </div>
    )
  }
}
