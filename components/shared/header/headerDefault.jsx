import Link from 'next/link'
import Image from 'next/image'

// module
import MenuLink from './modules/menuLink'
import MenuIcon from './modules/menuIcon'

const HeaderDefault = () => {
    return(
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
                <div className="container-fluid d-flex">
                    <div className="order-0 logo">
                        <Link href='/'>
                            <Image 
                                src="/img/logo.png" 
                                alt="laxmi tailer"
                                width={60}
                                height={52} />                        
                        </Link>
                    </div>
                    <div className=" order-lg-2">
                        <MenuIcon />
                    </div>
                    <a className="navbar-toggler order-lg-1" data-bs-toggle="collapse" data-bs-target="#navbarMenu" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </a>
                    <div className="collapse navbar-collapse" id="navbarMenu">
                        <MenuLink />
                    </div>
                </div>            
            </nav>
        </header>
    )
}

export default HeaderDefault ;