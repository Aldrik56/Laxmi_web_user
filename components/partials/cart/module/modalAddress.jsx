import React, { useState } from 'react';
import Heading from '../../../elements/heading'

import OverSeas from './formOverseas'
import Domestic from './formDomestic'

const ModalAddress = ({t}) => {
    const [tab,setTab] = useState(1)

    return (
        <div className="modal fade" id="modalAddress" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg">
                <form action="">
                    <div className="modal-content">
                        <div className="modal-body px-0">
                            <Heading title={t('common:Add New Address')} />
                            <p className="text-center desc">{t("common:To make an order, please add a shipping address")}</p>
                            <div className="mt-4 d-flex flex-row text-center">
                                <div
                                    onClick={() => setTab(1)} 
                                    className={`col-6 tab ${tab === 1 ? 'active' : ''}`}>
                                {t("common:Overseas")}
                                </div>
                                <div 
                                    onClick={() => setTab(2)} 
                                    className={`col-6 tab ${tab === 2 ? 'active' : ''}`}>
                                {t("common:Domestic")}
                                </div>    
                            </div>
                        </div>
                        <div className="px-3">
                        {
                            tab === 1 ?
                            <OverSeas t={t}/> :
                            <Domestic t={t}/>
                        }
                        </div>
                        <div className="modal-footer">
                            <button 
                                type="button" 
                                className="btn btn-light" 
                                data-bs-dismiss="modal">{t("common:Close")}</button>
                            <button 
                                type="button" 
                                className="btn btn-primary">
                                    {t("common:Add")}
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>        
    )
}

export default ModalAddress ;