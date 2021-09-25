import React from 'react';

const Header = (props) => {
    return (
        <div className = "container mt-3 mb-5 mx-auto">
            <nav className="navbar navbar-dark bg-dark mx-auto">
                <div className ="container-fluid">
                    <a href ="/home" className="navbar-brand">Meal DB</a>
                    <form className ="d-flex flex-fill">
                    <input onChange = {props.handleSearch} id="search-field" className ="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    </form>
                </div>
            </nav>
        </div>
    );
};

export default Header;