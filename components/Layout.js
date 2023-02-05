import Navbar from './Navbar'

const Layout=(props)=> {
    return (
        <>
            <Navbar/>
            <br/>
                <div className='container py-4'>
                    <div className='container'>
                        {props.children}
                    </div>
                </div>
        </>
    )
}

export default Layout