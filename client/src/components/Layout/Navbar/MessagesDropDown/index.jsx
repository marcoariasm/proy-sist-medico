import React from 'react'

const MessagesDropDown = ({ number, navBarMessagesList }) => {
    return (
        <li className="nav-item dropdown">
            <a className="nav-link" data-toggle="dropdown" href="!#">
                <i className="far fa-comments" />
                <span className="badge badge-danger navbar-badge">{number}</span>
            </a>
            <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
            {/* Message Start */}
            {
                navBarMessagesList.map( message => { return(
                    <>
                        <a href={ message.href } className="dropdown-item">
                            <div className="media">
                                <img src={ message.userImage } alt="User Avatar" className="img-size-50 mr-3 img-circle" />
                                <div className="media-body">
                                    <h3 className="dropdown-item-title">
                                        { message.nameUser }
                                        <span className={ `float-right text-sm ${ message.color }` }><i className="fas fa-star" /></span>
                                    </h3>
                                    <p className="text-sm">{ message.message }</p>
                                    <p className="text-sm text-muted"><i className="far fa-clock mr-1" />{ message.timeAgo }</p>
                                </div>
                            </div>    
                        </a>
                        <div className="dropdown-divider" />
                    </>
                )})
            }
            {/* Message End */}
            <a href="!#" className="dropdown-item dropdown-footer">Ver todos los mensajes</a>
        </div>
        </li>
    )
}

export default MessagesDropDown
