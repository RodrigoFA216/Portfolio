import Layout from '../components/Layout'
import Link from 'next/link'
import React from'react'
import {languajes, frontEnds, backEnds, databases, devOps, experiences} from '../profile'

const Index=(props)=>{
    //console.log(props.projects);
    return(
        <>
            <Layout>
                {/* Botón de descarga de el CV en pdf (necesita reparación) */}
                <div className="d-grid gap-2">
                    <a className="btn btn-primary" href='../media/CV HOJA DE VIDA.pdf' download target='_blank'> <i className="bi bi-download"></i>  Download PDF</a>
                </div>
                <br></br>
                {/* Card Header */}
                <header className='row'>
                    <div className='col-md-12'>
                        <card className="card card-body bg-secondary">
                            <div className="row">
                                <div className='col-md-4'>
                                    <img className="card-img-top img-fluid" src='me2.jpg' alt="me"></img>
                                </div>
                                <div className='col-md-8'>
                                    <h1 className="card-title">Rodrigo E. Flores Avalos</h1>
                                    <h3 className="card-subtitle">Fullstack Web Developer</h3>
                                    <br></br>
                                    <h6 className="card-text">
                                        Soy un ingeniero en computación con 6 años de experiencia en el desarrollo de software y la resolución de problemas técnicos. Con un fuerte conocimiento en <b>C/C++, HTML/CSS, Javascript, Typescript, Python, Rust, Arduino y Matlab</b>; he tenido la oportunidad de trabajar en proyectos innovadores y desafiantes en mi carrera como <b>la edición de el libro "Guía didáctica de robótica educativa con Arduino. Aplicaciones para bachillerato"</b> y mi desempeño para Sinteg en México como Ingeniero Técnico de planta para el mantenimiento del Museo Nacional de Antropología. Me considero una persona proactiva y con habilidades de liderazgo, y siempre estoy buscando nuevos retos y oportunidades para mejorar mis habilidades y contribuir al éxito de mi equipo y empresa.
                                    </h6>
                                    <Link href="https://wa.me/5544722244?text=Hola,%20vi%20tu%20CV%20online" target="_blank" className="btn btn-primary"> <i className="bi bi-whatsapp"></i> WhatsApp me</Link>
                                    <Link href="/hireme" className="btn btn-primary m-2">Hire me</Link>
                                </div>
                            </div>
                        </card>
                    </div>
                </header>
                {/* Segunda sección */}
                <div className='row py-2'>
                    {/* Elemento izquierda */}
                    <div className='col-md-4'>
                        <div className='card bg-light border-success'>
                            <div className='card-header'>
                                <h4>
                                    Lenguajes de programación
                                </h4>
                            </div>
                            <div className='card-body'>
                                <ul className='list-group'>
                                    {
                                        languajes.map((lang, i) => (
                                            <>
                                                <li className='list-group-item bg-light' key={i}>
                                                    <div className='d-flex'>
                                                        <img src={lang.source} className='card-img-top img-fluid rounded m-2' style={{maxWidth: '15%'}}></img>
                                                        <h6 className='align-self-center'>
                                                            {lang.name}
                                                        </h6>
                                                    </div>  
                                                </li>
                                            </>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* Elemento derecha */}
                    <div className='col-md-8'>
                        <div className='card border-info'>
                            <div className='card-header'>
                                <h4>
                                    Experiencia
                                </h4>
                            </div>  
                            <div className='card-body'>
                                <ul className='list-group bg-light'>
                                    {
                                        experiences.map((exp, i) => (
                                            <>
                                            <li className='list-group-item bg-light'>
                                                <div key={i}>
                                                    <h5 className='card-title'>{exp.title}</h5>
                                                    <h6 className='card-subtitle'><b>{exp.years}</b></h6>
                                                    <h6>Technology: {exp.technology}</h6>
                                                    <br></br>                                       
                                                    <p>
                                                        {exp.description}
                                                    </p>
                                                </div>
                                            </li>
                                            </>
                                        ))
                                    }
                                </ul>
                                <Link href="/competencias" className='btn btn-info mt-3'>Conoce más acerca de mi</Link>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Tercera sección */}
                <div className='row'>
                    <div className='col-md-12'>
                        <div className='card card-body bg-dark'>
                            <div className='row'>
                                <div className='col-md-12'>
                                    <h1 className='text-center text-light'>Portfolio</h1>
                                </div>
                                {/* hay que reemplazar esto por un for que itera un arreglo desde un fetch */}
                                <div className='col-md-4'>
                                    <div className='card bg-light border-primary m-2'>
                                        <img src='' alt='something important'/>
                                        <div className='card-body'>
                                            <h5 className='card-title'>Something</h5>
                                            <p>Something</p>
                                            <Link href="/portfolio" className='btn btn-outline-success'>Conoce más</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}

Index.getInitialProps=async (ctx)=>{
    const res=await fetch('https://drfsimplecrud-test-2h2u.onrender.com/api/projects/')
    const resJSON= await res.json()
    // console.log(resJSON);
    return { projects: resJSON}
}

export default Index