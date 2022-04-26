import React from 'react'
import { Link } from 'react-router-dom';

const BrandLogo = ({ logo, alt, title}) => {
    return (
        <Link to="/" className="brand-link">
            <img src={ logo } alt={ alt } className="brand-image img-circle elevation-3" style={{opacity: '.8'}} />
            <span className="brand-text font-weight-light">{ title }</span>
        </Link>
    )
}

export default BrandLogo
