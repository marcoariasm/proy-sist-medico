import React from 'react'
import { Link } from 'react-router-dom';

const LeftLinks = ({ links }) => {
    return (
        <ul className="navbar-nav">
            <li className="nav-item">
                <Link className="nav-link" data-widget="pushmenu" to="#" role="button"><i className="fas fa-bars" /></Link>
            </li>
            {
                links.map( link => {
                    return (
                        <li className="nav-item d-none d-sm-inline-block">
                            <Link to={ link.href } className="nav-link">{ link.text }</Link>
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default LeftLinks
