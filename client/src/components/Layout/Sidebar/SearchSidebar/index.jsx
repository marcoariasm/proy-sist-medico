import React from 'react'

const SearchSidebar = ({ placeholder="Buscar..."}) => {
    return (
        <div className="form-inline mt-3 pb-3 mb-0 d-flex">
            <div className="input-group" data-widget="sidebar-search">
                <input className="form-control form-control-sidebar" type="search" placeholder={ placeholder } aria-label="Search" />
                <div className="input-group-append">
                    <button className="btn btn-sidebar">
                        <i className="fas fa-search fa-fw" />
                    </button>
                </div>
            </div>
        </div>    
    )
}

export default SearchSidebar
