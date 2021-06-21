import Link from 'next/link'
import { withRouter, useRouter } from 'next/router'
import React, { useState,useEffect } from 'react';

// elements
import {AccountCircle2,Edit} from '../../elements/icon';

// data
import linkArray from '../data/linkArray';

const Sidebar = ({t,router,setPath}) => {
    const pathName = router.pathname

    return (
        <div className="col-12 col-lg-3 mt-4">
            <div className="sidebar card px-0">
                <div className="row px-3">
                    <div className="col-3 d-flex  justify-content-center align-items-center">
                        <AccountCircle2 />
                    </div>
                    <div className="col-9">
                        <p className="mb-0 name">Jhon Doe</p>
                        <p className="mb-0 desc"><Edit /> {t("navbar:Edit Profile")}</p>
                    </div>
                </div>
                <div className="row mx-0 mt-4 menu-container">
                {
                    linkArray.map((dataLink,index) => (
                        <div className={`col-12 menu d-flex justify-content-between ${dataLink.url === pathName ? 'active' : ''}`} key={index}>
                            <Link href={dataLink.url}>
                                <a>
                                    {t(`navbar:${dataLink.title}`)}
                                </a>                                    
                            </Link>
                            {
                                index === 1 ?
                                <span className="notif">1</span> : null
                            }
                        </div>
                    ))
                }    
                <div className="col-12 menu">
                    <a>
                        {t(`navbar:Log Out`)}
                    </a>                                    
                </div>                                    
                </div>
                {/* <p>SideBar</p> */}
            </div>
        </div>
    )
}

export default withRouter(Sidebar) ;