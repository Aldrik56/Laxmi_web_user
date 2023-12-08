import Link from 'next/link'
import Image from 'next/image'
import TextLoop from "@jcdea/react-text-loop";
import useTranslation from 'next-translate/useTranslation';
import Slide from 'react-reveal/Slide';

import React, { useState, useEffect } from 'react';

// module
import MenuLink from './modules/menuLink'
import MenuIcon from './modules/menuIcon'

const HeaderDefault = () => {
    const { t } = useTranslation("navbar")
    const [isOpenModalGallery, setIsOpenModalGallery] = useState(false)

    const CategoryList = [
        {
            title: t('common:suits'),
            category: 'suits'
        },
        {
            title: t('common:vests'),
            category: 'vests'
        },
        {
            title: t('common:batiks'),
            category: 'batiks'
        },
        {
            title: t('common:shirts'),
            category: 'shirts'
        },
        {
            title: t('common:trousers'),
            category: 'trousers'
        },
        {
            title: t('common:blazer'),
            category: 'blazer'
        }
    ]

    return (
        <header className="fixed-top">
            <div className="running-text-promotion bg-dark text-white text-center">
                <TextLoop>
                    <span>{t("100% MADE TO MEASURE")}</span>
                    <span>{t("CUSTOM-TAILORED CLOTHING")}</span>
                    <span>{t("PERFECT FIT GUARANTEE")}</span>
                    <span>{t("FASTEST MADE TO MEASURE TAILORS")}</span>
                </TextLoop>
            </div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
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
                        <MenuLink
                            isOpenModalGallery={isOpenModalGallery}
                            setIsOpenModalGallery={setIsOpenModalGallery}
                            t={t} />
                    </div>
                </div>
            </nav>
            {
                isOpenModalGallery && (
                    <Slide top when={isOpenModalGallery} duration={500}>
                        <div className="sub-navbar">
                            <div className="row">
                                <div className="col-12 col-lg-3">
                                    <h6>BY PRODUCT</h6>
                                    <div className="d-flex flex-column modal-navbar">
                                        {
                                            CategoryList.map((data, index) => (
                                                <Link
                                                    key={index}
                                                    href={`/products/${data.category}`} >
                                                    <a onClick={() => setIsOpenModalGallery(!isOpenModalGallery)}>{t("common:New")} {data.title} </a>
                                                </Link>
                                            ))
                                        }
                                    </div>
                                </div>
                                <div className="col-12 col-lg-9 d-flex">
                                    <div className="item">
                                        <Image
                                            width={254}
                                            height={127}
                                            src="/img/promotion/banner1.png"
                                            alt="laxmi" />
                                        <p>LOOKBOOK SPRING SUMMER 2021</p>
                                    </div>
                                    <div className="item ms-3">
                                        <Image
                                            width={254}
                                            height={127}
                                            src="/img/promotion/banner1.png"
                                            alt="laxmi" />
                                        <p>LOOKBOOK SPRING SUMMER 2021</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slide>
                )
            }
        </header>
    )
}

export default HeaderDefault;