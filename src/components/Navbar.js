import React, { Component } from 'react'
export class Navbar extends Component {
    render() {
        return (
            <div className="navbar-brand mx-auto d-block text-center bg-info">
                <h6 className="text-light">{this.props.logo}</h6>
            </div>
        )
    }
}

export default Navbar
