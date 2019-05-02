import Link from 'next/link'

const Nav = () => (

    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
            <Link href="/"><a className="navbar-brand">InfoBitcoin</a></Link>
                <div className="collapse navbar-collapse">

                <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link href="/"><a className="nav-link">Inicio</a></Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/us"><a className="nav-link">Nosotros</a></Link>
                        </li>
                </ul>

                </div>
        </div>


        {/* Si quieres hacer tus propios estilos sin bootstrap
       
       <style jsx>{`
       
       h1 {
           color: red
        }
        
        ul {
            background-color: #333;
            list-style:none;
            display:flex;
        }
        
        ul li {
            padding: .5rem 0;
            margin-right : 1rem;
            
        }
        ul li a {
            font-size: 1.2rem;
            color: white;
            text-decoration : none
        }
        
    `}</style> */}
    </nav>


);


export default Nav;