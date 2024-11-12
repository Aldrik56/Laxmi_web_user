import React, { useState,useEffect } from 'react';

import useTranslation from 'next-translate/useTranslation';

// elements
import BreadCrumb from '../../components/elements/breadcrumb'
import Heading from '../../components/elements/heading';

// shared
import Sidebar from '../../components/shared/sidebar/sidebarDefault';

// partials
import NotificationContainer from '../../components/partials/notification/notificationContainer'

// layout
import withAuth from '../../components/layouts/withAuth';

const Notification = () => {
    const [path,setPath] = useState(1)

    const {t} = useTranslation("accountDetail")

    const pathBreadCumb = [{
        'path' : '/notification',
        'name' : `${t("Notification")}`
    }]
    return(
        <div className="notification">
            <div className="container-fluid px-5">
                <BreadCrumb path={pathBreadCumb} />
                <Heading title={t(`Notification`)} /> 
            </div>
            <section className="row d-flex justify-content-between container-fluid px-5">
                <Sidebar t={t} /> 
                <NotificationContainer t={t} />
            </section>
        </div>
    )
}

export default withAuth(Notification) ;