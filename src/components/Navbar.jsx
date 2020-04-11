import React, { Component } from 'react'
import Logo from '../images/logo.png'


class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <nav classnName="navbar is-light">
                <div classnName="container">
                    <div classnName="navbar-brand">
                        <a classnName="navbar-item is-size-3 prefetch" href="/">
                            <img alt="SaaSHub logo" width="200" height="auto"src={Logo}/>
                                <span classnName="typography"></span>
                                 </a>
                            <div classnName="navbar-burger" data-target="navMenu">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                          </div>
                        </div>
                     </nav> 
            );
    }
}
 
export default Navbar;



