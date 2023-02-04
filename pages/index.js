import Layout from '../components/Layout'

const Index=()=>{
    return(
        <>
            <Layout>
                <div class="d-grid gap-2">
                    <a class="btn btn-primary" href='../media/CV HOJA DE VIDA.pdf' download target='_blank'>Download PDF</a>
                    {/* Reparar este download */}
                </div>
                <h1>Hello world</h1>
            </Layout>
        </>
    )
}

export default Index