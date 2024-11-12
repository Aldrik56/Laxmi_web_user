import React, { useState,useEffect } from 'react';

import useTranslation from 'next-translate/useTranslation';

// elements
import BreadCrumb from '../../components/elements/breadcrumb'
import Heading from '../../components/elements/heading';

// shared
import Sidebar from '../../components/shared/sidebar/sidebarDefault';

// partials
import Detail from '../../components/partials/accountDetail/detail'
import ChangeDetail from '../../components/partials/accountDetail/changeDetail'

// layout
import withAuth from '../../components/layouts/withAuth';

const AccountDetail = () => {
    const [path,setPath] = useState(1)

    const {t} = useTranslation("accountDetail")

    const pathBreadCumb = [{
        'path' : '/accountdetail',
        'name' : `${t("Account Detail")}`
    }]
    const Content = () => {
        switch(path) {
            case 1:
                return <Detail
                            setPath={setPath} 
                            t={t} />                
            case 2:
                return <ChangeDetail
                            setPath={setPath} 
                            t={t} />
            default:
                <p>Not Found</p>
          }
    }
    return(
        <div className="account-detail">
            <div className="container-fluid px-5">
                <BreadCrumb path={pathBreadCumb} />
                <Heading title={t(`Account Detail`)} /> 
            </div>
            <section className="row d-flex justify-content-between container-fluid px-5">
                <Sidebar t={t} /> 
                <Content />
            </section>
        </div>
    )
}

export default withAuth(AccountDetail) ;