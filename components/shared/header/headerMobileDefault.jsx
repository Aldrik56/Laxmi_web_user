import React, { useState,useEffect } from 'react';
import Link from 'next/link'
import Image from 'next/image'
import useTranslation from 'next-translate/useTranslation';
import {ShoppingCart,Menu,ChevronRight,ChevronLeft} from '../../elements/icon';
import Slide from 'react-reveal/Slide';
import Cookies from 'js-cookie';

import { withRouter,useRouter } from 'next/router'

// data link
import DataLink from './dataLink'

const HeaderMobileDefault = ({router}) => {
    const UseRouter =  useRouter()
    const {t} = useTranslation("navbar")

    const [openSidebar,setOpenSidebar] = useState(false)
    const [openSubSidebar,setOpenSubSidebar] = useState(false)
    const [selectedMenu,setSelectedMenu] = useState({})

    const pathName = router.pathname

    useEffect(() => {
        Cookies.set('next-i18next', UseRouter.locale);
    },[]); 

    // handle
    const handleChangeLanguage = locale=> {
        Cookies.set('next-i18next',locale);
        // setTimeout(function(){ window.location.reload() }, 500);
    }

    const SubCategoryMenu = ({data}) => {
        switch(selectedMenu.title) {
            case "Product":
                return (
                    <Link href={data.path}>
                        <p 
                            className={`${data.path === pathName ? 'active' : ''}`}
                            onClick={() => setOpenSidebar(false)}>{t(data.title)}</p>                                                 
                    </Link>
                )
            case "Custom":
                return (
                    <>
                        <Link href={data.path}>
                            <p 
                                className={`${data.path === pathName ? 'active' : ''}`}
                                onClick={() => setOpenSidebar(false)}>{t(data.title)}</p> 
                        </Link>
                        <div className="img-container">
                            <Image 
                                src={data.img} 
                                alt="laxmi tailer"
                                objectFit="cover"
                                layout="fill" />                                                                             
                        </div>
                    </>
                )
            case "Know More":
                return (
                    <Link href={data.path}>
                        <p 
                            className={`${data.path === pathName ? 'active' : ''}`}
                            onClick={() => setOpenSidebar(false)}>{t(data.title)}</p>                                                 
                    </Link>
                )  
            case "Language":
                return (
                    <div className="d-flex">
                        <Image 
                            src={`/img/icon/${data === 'en' ? 'UK' : 'ID'}_flag.png`} 
                            alt="laxmi tailer"
                            width={50}
                            height={24} />
                            <Link href={UseRouter.asPath} locale={data} >
                                <p 
                                    onClick={() => {
                                        handleChangeLanguage(data)
                                    }}
                                    className={`ms-2 ${data === UseRouter.locale ? 'active' : ''}`}>{data === 'en' ? `${t("English")}` : `${t("Indonesian")}`}</p>                                                                             
                            </Link>
                    </div>
                ) 
            case "My Account":
                return (
                    <div className="d-flex">
                        <Image 
                            src={data.img} 
                            alt="laxmi tailer"
                            width={20}
                            height={20} />
                        <Link href={data.path}>
                            <p 
                                className={`ms-2 ${data.path === pathName ? 'active' : ''}`}
                                onClick={() => setOpenSidebar(false)}>{t(data.title)}</p>                                                 
                        </Link>                               
                    </div>
                )                                                 
            default:
                return false
          }        
    } 

    return (
        <>
            <nav className="navbar navbar-mobile fixed-top navbar-light bg-light py-3">
                <div className="container-fluid">
                    <div className="d-flex justify-content-between align-items-center w-100">
                        <Link href="/">
                            <ShoppingCart />
                        </Link>
                        <Link href='/'>
                            <Image 
                                src="/img/logoMobile.png" 
                                alt="laxmi tailer"
                                width={128}
                                height={25} />                        
                        </Link>  
                        <span 
                            onClick={() => setOpenSidebar(true)}
                            type="button" >
                            <Menu />
                        </span>                                         
                    </div>
                </div>
            </nav>  
            {
                openSidebar ?
                <div
                    onClick={() => {
                        setOpenSidebar(false)
                        setOpenSubSidebar(false)
                    }} 
                    className="backdrop">
                </div> : null

            }
            <Slide right when={openSidebar} duration={500} >
                <div className={`sidebar ${!openSidebar ? 'd-none' : ''}`}>
                    <div className="d-flex justify-content-end">
                        <span 
                            onClick={() => setOpenSidebar(false)}
                            type="button" >
                            <Menu />
                        </span>                           
                    </div>
                    <div className="menu">
                        {
                            DataLink.map((data,index) => (
                                <div key={index}> 
                                    {
                                        data.extend ? 
                                        <div
                                            onClick={() => {
                                                setSelectedMenu({
                                                    title : data.title,
                                                    data : data.subMenu
                                                })
                                                setOpenSubSidebar(true)                                                
                                            }} 
                                            className="d-flex justify-content-between align-items-center">
                                            <p>{t(data.title)}</p>     
                                            <ChevronRight />                       
                                        </div> :  
                                        <Link href="/">
                                            <p 
                                                className={`${data.path === pathName ? 'active' : ''}`}
                                                onClick={() => setOpenSidebar(false)}>{data.title}</p>                                                 
                                        </Link>
                                    }
                                </div>
                            ))
                        }
                    </div>
                </div>
            </Slide>
            <Slide right when={openSubSidebar} duration={500} >
                <div className={`sub-sidebar ${!openSubSidebar ? 'd-none' : ''}`} >
                    <div 
                        onClick={() => setOpenSubSidebar(false)}
                        className="d-flex fw-bold align-items-center">
                        <span className="me-2"> <ChevronLeft /> </span>
                        {t("Back")}
                    </div>
                    <div className="menu">
                    {
                        selectedMenu.title !== "Language" ? 
                        selectedMenu.data && selectedMenu.data.map((data,index) => (
                            <SubCategoryMenu key={index} data={data} />                       
                        )) :
                        UseRouter.locales.map((locale,index) => (
                            <SubCategoryMenu key={index} data={locale} />                       
                        ))                        
                    }
                    </div>
                </div>
            </Slide>
        </> 
    )
}

export default withRouter(HeaderMobileDefault)