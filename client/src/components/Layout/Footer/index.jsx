import React from 'react'

const Footer = ({ textsFooter }) => {
    return (
        <footer className="main-footer">
            <strong>{textsFooter.rights}&nbsp;<a href={textsFooter.href} target="_blank" rel="noreferrer">{textsFooter.developer}</a></strong>.
            <div className="float-right d-none d-sm-inline-block">
                <b>Version</b>&nbsp;{textsFooter.version}
            </div>
        </footer>
    )
}

export default Footer
