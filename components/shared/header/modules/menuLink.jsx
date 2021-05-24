import Link from 'next/link'
import { withRouter, useRouter } from 'next/router'

import useTranslation from 'next-translate/useTranslation';

const MenuLink = ({ router }) => {
    const pathName = router.pathname
    const UseRouter =  useRouter()

    let {t} = useTranslation()

    const link = [
        {
            name : `${t("common:Product Gallery")}`,
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