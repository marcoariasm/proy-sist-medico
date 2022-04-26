import React from 'react'

const Preloader = ({ logo, alt }) => {
    return (
        <div className="preloader flex-column justify-content-center align-items-center">
            <img 
                className="animation__shake" 
                src={ logo }
                alt={ alt }
                height={60} width={60} 
            />
            {/* src="dist/img/AdminLTELogo.png" 
                alt="AdminLTELogo"  */}
        </div>
    )
}

export default Preloader
