import React, { useState,useEffect } from 'react';

// helper
import Axios from '../../../../helpers/axiosConfig'

// elements
import Pagination from '../../../elements/pagination'
import {Search} from '../../../elements/form';

// module
import Accordion from './accordion';

// REDUX
import { connect } from 'react-redux'
import {fetcAction} from '../../../../stores';

const FaqContainer = ({t,fetcAction,fetchResult}) => {
    const [params,setParams] = useState({
        page : 1,
        per_page : 10,
        search : ''
    })

    useEffect(() => {
        fetcAction('/web_info/faq',params)
    },[params]);

    // handle
    const handlePaginate = e => {
        setParams({
            ...params,
            page : e.selected+1
        })
    }
    const handleSearch = e => {
        setParams({
            ...params,
            search : e.target.value
        })
    }
    return (
        <>

                <div className="d-flex flex-column w-100 " >
                    <div className="d-flex justify-content-center">
                        <div className="col-12 col-lg-6">
                            <Search 
                                id="email"
                                error={null}
                                label={t("search")}
                                onChange={handleSearch}
                            />  
                        </div>   
                    </div>
                    {
                        fetchResult.data ?
                        fetchResult.data.data.length ?  
                        <>                  
                    <div className="accordion" id="accordionExample">
                        {
                            fetchResult.data.data.map((data,index) => (
                                <Accordion 
                                    index={index} 
                                    data={data} 
                                    key={index}/>
                            ))
                        }
                    </div>
                    {
                        fetchResult.data.total_page > 1 ?
                        <Pagination 
                            currentPage={params.page-1} 
                            pageCount={fetchResult.data.total_page}
                            handlePaginate={handlePaginate} /> : null                   
                    }
                    </>
                    :
                    <p className="text-center">{t('There are no data yet')}</p> :
                    fetchResult.error ?
                    <p className="text-center">{fetchResult.error}</p> :
                    <div className="loader"></div>
                }                    
                </div>
        </>
    )
}
const mapStateToProps = state => {
    return {
      fetchResult: state.fetchList    
    }
}
const mapDispatchToProps = dispatch => {
    return {
        fetcAction: (url,params) => dispatch(fetcAction(url,params))
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FaqContainer)
