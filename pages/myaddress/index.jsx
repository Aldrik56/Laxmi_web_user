import React, { useState,useEffect } from 'react';

import useTranslation from 'next-translate/useTranslation';

// elements
import BreadCrumb from '../../components/elements/breadcrumb'
import Heading from '../../components/elements/heading';

// shared
import Sidebar from '../../components/shared/sidebar/sidebarDefault';

// partials
import MyAddressContainer from '../../components/partials/myAddress/myAddressContainer'

// layout
import withAuth from '../../components/layouts/withAuth';

const MyAddress = () => {
    const [path,setPath] = useState(1)

    const {t} = useTranslation("accountDetail")

    const pathBreadCumb = [{
        'path' : '/myaddress',
        'name' : `${t("My Address")}`
    }]
    return(
        <div className="notification">
            <div className="container-fluid px-5">
                <BreadCrumb path={pathBreadCumb} />
                <Heading title={t(`My Address`)} /> 
            </div>
            <section className="row d-flex justify-content-between container-fluid px-5">
                <Sidebar t={t} /> 
                <MyAddressContainer t={t} />
            </section>
        </div>
    )
}

export default withAuth(MyAddress) ;