import React from 'react'
import Link from 'next/link'

const Navbar=()=> {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid container">
                    <div className='d-flex justify-content-start'>
                        <Link href="/" className="navbar-brand">
                            Rodrigo's Portfolio
                        </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
                    <div className="d-flex justify-content-end collapse navbar-collapse" id="navbarColor01">
                        <ul className="navbar-nav me-auto d-flex ">
                            <li className="nav-item">
                                <Link className="nav-link" href="/">
                                    CV
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="/blog">
                                    Blog
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="/github">
                                    Github
                                </Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle disabled" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                                    Projects
                                </Link>
                                <div className="dropdown-menu">
                                    <a className="dropdown-item" href="#">Action</a>
                                    <a className="dropdown-item" href="#">Another action</a>
                                    <a className="dropdown-item" href="#">Something else here</a>
                                    <div className="dropdown-divider"></div>
                                    {/* {
                                        projects.events.map(project=>(
                                            <Link></Link>
                                        ))
                                    } */}
                                    <a className="dropdown-item" href="#">Separated link</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar