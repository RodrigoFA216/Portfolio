import Layout from '../components/Layout'
import Link from 'next/link'
import React from'react'

const Index=()=>{
    return(
        <>
            <Layout>
                {/* Botón de descarga de el CV en pdf (necesita reparación) */}
                <div className="d-grid gap-2">
                    <a className="btn btn-primary" href='../media/CV HOJA DE VIDA.pdf' download target='_blank'> <i class="bi bi-download"></i>  Download PDF</a>
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
                                    Soy un ingeniero en computación con 6 años de experiencia en el desarrollo de software y la resolución de problemas técnicos. Con un fuerte conocimiento en C/C++, HTML/CSS, Javascript, Typescript, Python, Rust, Arduino y Matlab; he tenido la oportunidad de trabajar en proyectos innovadores y desafiantes en [Como la edición de el libro "Guía didáctica de robótica educativa con Arduino. Aplicaciones para bachillerato" y mi desempeño para Sinteg en México como Ingeniero Técnico de planta para el mantenimiento del Museo Nacional de Antropología. Me considero una persona proactiva y con habilidades de liderazgo, y siempre estoy buscando nuevos retos y oportunidades para mejorar mis habilidades y contribuir al éxito de mi equipo y empresa.
                                    </h6>
                                    <Link href="https://wa.me/5544722244?text=Hola,%20vi%20tu%20CV%20online" target="_blank" class="btn btn-primary"> <i class="bi bi-whatsapp"></i> WhatsApp me</Link>
                                    <Link href="/hireme"class="btn btn-primary m-2">Hire me</Link>
                                </div>
                            </div>
                        </card>
                    </div>
                </header>
                {/* Segunda sección */}
                
            </Layout>
        </>
    )
}

export default Index