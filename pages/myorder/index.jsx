import React, { useState,useEffect } from 'react';

import useTranslation from 'next-translate/useTranslation';

// elements
import BreadCrumb from '../../components/elements/breadcrumb'
import Heading from '../../components/elements/heading';

// shared
import Sidebar from '../../components/shared/sidebar/sidebarDefault';

// partials
import MyOrderContainer from '../../components/partials/myOrder/myOrderContainer'
import MyOrderDetail from '../../components/partials/myOrder/myOrderDetail'

// layout
import withAuth from '../../components/layouts/withAuth';

const MyOrder = () => {
    const [path,setPath] = useState(1)

    const {t} = useTranslation("accountDetail")

    const pathBreadCumb = [{
        'path' : '/notification',
        'name' : `${t("navbar:My Orders")}`
    }]
    return(
        <div className="myorder">
            <div className="container-fluid px-5">
                <BreadCrumb path={pathBreadCumb} />
                <Heading title={t(`navbar:My Orders`)} /> 
            </div>
            <section className="row d-flex justify-content-between container-fluid px-5">
                <Sidebar t={t} /> 
                {
                    path === 1 ? 
                    <MyOrderContainer
                        setPath={setPath} 
                        t={t} /> :
                    <MyOrderDetail 
                        setPath={setPath} 
                        t={t} />
                }
            </section>
        </div>
    )
}

export default withAuth(MyOrder) ;