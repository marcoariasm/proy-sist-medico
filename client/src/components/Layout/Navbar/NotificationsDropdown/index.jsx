import React from 'react'

const NotificationsDropdown = ({ number, navBarNotificationsList }) => {
    return (
        <li className="nav-item dropdown">
            <a className="nav-link" data-toggle="dropdown" href="!#">
                <i className="far fa-bell" />
                <span className="badge badge-warning navbar-badge">{ number }</span>
            </a>
            <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                <span className="dropdown-item dropdown-header">{`${number} Notificaciones`}</span>
                <div className="dropdown-divider" />
                {
                    navBarNotificationsList.map(notification => { return(
                        <> 
                            <a href={ notification.hrefMessages } className="dropdown-item">
                                <i className={`fas ${ notification.icon } mr-2`} />
                                { 
                                    notification.numberMessages===1
                                    ?`1 nuevo ${notification.type}`
                                    :`${notification.numberMessages} nuevos ${notification.type}s`
                                }
                                <span className="float-right text-muted text-sm">{ notification.longAgo }</span>
                            </a>
                            <div className="dropdown-divider" />
                        </>
                    )
                    })
                }
                <a href="!#" className="dropdown-item dropdown-footer">Ver todas las notificaciones</a>
                {/* <a href="!#" className="dropdown-item">
                <i className="fas fa-users mr-2" /> 8 friend requests
                <span className="float-right text-muted text-sm">12 hours</span>
                </a>
                <div className="dropdown-divider" />
                <a href="!#" className="dropdown-item">
                <i className="fas fa-file mr-2" /> 3 new reports
                <span className="float-right text-muted text-sm">2 days</span>
                </a>
                <div className="dropdown-divider" /> */}
            </div>
        </li>
    )
}

export default NotificationsDropdown
