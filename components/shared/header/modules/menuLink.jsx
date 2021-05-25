import Link from 'next/link'
import { withRouter, useRouter } from 'next/router'

import useTranslation from 'next-translate/useTranslation';

const MenuLink = ({ router }) => {
    const pathName = router.pathname
    const UseRouter =  useRouter()

    const {t} = useTranslation("navbar")

    const link = [
        {
            name : `${t("Product Gallery")}`,
            path : '/products'
        },
        {
            name : `${t("About Us")}`,
            path : '/aboutus'
        },
        {
            name : `${t("Contact Us")}`,
            path : '/contactus'
        },
        {
            name : `${t("FAQ")}`,
            path : '/faq'
        },
        {
            name : `${t("Terms & Conditions")}`,
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