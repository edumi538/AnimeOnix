import React from 'react'
import './header.css'
const HeaderBar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg" navbar-light bg-light>
                <a className="navbar-brand" href="/">
                    Anime Onix
                </a>

                <div
                    className="collapse navbar-collapse"
                    id="navbarNavDropdown"
                ></div>
                <form className="form-inline">
                    <input
                        className="form-control mr-sm-2"
                        type="search"
                        placeholder="Pesquisa"
                        aria-label="Search"
                    />
                    <button
                        className="btn btn-outline-light my-2 my-sm-0"
                        type="submit"
                    >
                        Pesquisar
                    </button>
                </form>
            </nav>
        </div>
    )
}

export default HeaderBar
