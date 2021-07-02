import Link from 'next/link'
import { withRouter, useRouter } from 'next/router'

const MenuLink = ({ 
    router,
    t,
    setIsOpenModalGallery,
    isOpenModalGallery }) => {

    const pathName = router.pathname
    const UseRouter =  useRouter()


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
            path : '/termcondition'
        },
    ]
    return (
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">   
            {
                link.map((data,index) => (
                    <>
                        {
                            index === 0 ?
                            <li 
                                onClick={() => setIsOpenModalGallery(!isOpenModalGallery)}
                                className="nav-item text-pointer" 
                                key={index}>
                                <a 
                                    className={`nav-link ${data.path === pathName ? 'active' : ''}`} 
                                    aria-current="page" >{data.name}</a>
                            </li>                                    
                            :
                            <li 
                                className="nav-item" 
                                key={index}>
                                <Link href={data.path}>
                                    <a 
                                    className={`nav-link ${data.path === pathName ? 'active' : ''}`} 
                                    aria-current="page" >{data.name}</a>
                                </Link>
                            </li>        
                        }
                    </>
                ))
            }
        </ul>
    )
}

export default withRouter(MenuLink)