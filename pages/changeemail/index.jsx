import React, { useState,useEffect } from 'react';

import useTranslation from 'next-translate/useTranslation';

// elements
import BreadCrumb from '../../components/elements/breadcrumb'

// partials
import ChangeEmail from '../../components/partials/accountDetail/changeEmail'

// layout
import withAuth from '../../components/layouts/withAuth';

const AccountDetail = () => {
    const [path,setPath] = useState(1)

    const {t} = useTranslation("accountDetail")

    const pathBreadCumb = [{
        'path' : '/accountdetail',
        'name' : `${t("Account Detail")}`
    },{
        'path' : '/changeemail',
        'name' : `${t("Change Email")}`
    }]
    return(
        <div className="change-email">
            <div className="container-fluid px-5">
                <BreadCrumb path={pathBreadCumb} />
            </div>
            <section className="row d-flex justify-content-between container-fluid px-5">
                <ChangeEmail
                    setPath={setPath} 
                    t={t} />            
            </section>
        </div>
    )
}

export default withAuth(AccountDetail) ;