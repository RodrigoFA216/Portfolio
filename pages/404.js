import Layout from '../components/Layout'
import Link from 'next/link'

const custom404=() =>{
    return(
        <Layout>
            <div className="text-center">
                <h1>404</h1>
                <p>Esta página no existe. Por favor regresa a <Link href="/">Home</Link></p>
            </div>
        </Layout>
    )
}
export default custom404