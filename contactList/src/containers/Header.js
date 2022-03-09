import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const Header = () => {
    return (

        <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Contact-List</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ml-auto">
                        <li className="nav-item">
                            <Link to='/' style={{ textDecoration: 'none', color: 'white' }}><a className="nav-link" aria-current="page" href="#">Home</a></Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/about' style={{ textDecoration: 'none', color: 'white' }}><a className="nav-link" href="#">About</a></Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/contact' style={{ textDecoration: 'none', color: 'white' }}><a className="nav-link" href="#">Contact</a></Link>
                        </li>
                    </ul>
                </div>


                <Link className="btn btn-outline-light" to="/users/add">Add User</Link>

            </div>
        </nav>

        </>
        
    )
}

export default Header;