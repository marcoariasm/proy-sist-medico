import React from 'react'

const Search = ({ placeholder }) => {
    return (
        <li className="nav-item">
            <a className="nav-link" data-widget="navbar-search" href="!#" role="button">
                <i className="fas fa-search" />
            </a>
            <div className="navbar-search-block">
                <form className="form-inline">
                    <div className="input-group input-group-sm">
                        <input className="form-control form-control-navbar" type="search" placeholder={ placeholder } aria-label="Search" />
                        <div className="input-group-append">
                            <button className="btn btn-navbar" type="submit">
                                <i className="fas fa-search" />
                            </button>
                            <button className="btn btn-navbar" type="button" data-widget="navbar-search">
                                <i className="fas fa-times" />
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </li>
    )
}

export default Search
