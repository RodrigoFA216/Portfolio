import React from 'react'
import Link from 'next/link'

const Navbar=(props)=> {
    // object named props.projects
    const projects = props.projects
    console.log(projects);
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary sticky-top">
                <div className="container-fluid container">
                    <Link href="/" className="navbar-brand">
                        Rodrigo's Portfolio
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarColor01">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link active" href="/">
                                    CV
                                    <span className="visually-hidden">(current)</span>
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
                                <Link className="nav-link dropdown-toggle " data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                                    Projects
                                </Link>
                                <div className="dropdown-menu">
                                    {/* {
                                        props.projects.map(project=>(
                                            <Link href={`/projects/${project.id}`} key={project.id}>
                                                <a className="dropdown-item">{project.title}</a>
                                            </Link>
                                        ))
                                    } */}
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

Navbar.getInitialProps = async (ctx) => {
    try {
        const res=await fetch('https://drfsimplecrud-test-2h2u.onrender.com/api/projects/')
        const resJSON= await res.json()
        // console.log(resJSON);
        return { projects: resJSON.data}
    } catch (error) {
        console.log(error);
    }
}

export default Navbar