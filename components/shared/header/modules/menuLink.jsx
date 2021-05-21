import Link from 'next/link'
import { withRouter } from 'next/router'

const MenuLink = ({ router }) => {
    const pathName = router.pathname

    const link = [
        {
            name : 'Product Gallery',
            path : '/products'
        },
        {
            name : 'About Us',
            path : '/aboutus'
        },
        {
            name : 'Contact Us',
            path : '/contactus'
        },
        {
            name : 'FAQ',
            path : '/faq'
        },
        {
            name : 'Terms & Conditions',
            path : '/term'
        },
    ]
    return (
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">   
            {
                link.map((data,index) => (
                    <li className="nav-item" key={index}>
                        <Link href={data.path}>
                            <a 
                            className={`nav-link ${data.path === pathName ? 'active' : ''}`} 
                            aria-current="page" >{data.name}</a>
                        </Link>
                    </li>    
                ))
            }
        </ul>
    )
}

export default withRouter(MenuLink)