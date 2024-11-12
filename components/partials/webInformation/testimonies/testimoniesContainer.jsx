import React, { useState,useEffect } from 'react';

// elements
import Pagination from '../../../elements/pagination'

// REDUX
import { connect } from 'react-redux'
import {fetcAction} from '../../../../stores';

// module
import TestimoniItem from './module/testimoniItem';

const TestimoniesContainer = ({t,fetcAction,fetchResult}) => {
    const [params,setParams] = useState({
        page : 1,
        per_page : 10,
        filter : ''
    })

    useEffect(() => {
        fetcAction('/web_info/testimonies',params)
    },[params]);

    // handle
    const handlePaginate = e => {
        setParams({
            ...params,
            page : e.selected+1
        })
    }
    const handleFilter = e => {
        setParams({
            ...params,
            page : 1,
            filter : e.target.value
        })
    }
    return (
        <>
            {
                fetchResult.data ?
                fetchResult.data.data.length ?
                <div className="d-flex flex-column w-100 " >
                    <div className="w-100 d-flex justify-content-end align-items-center">
                        <p className="pr-5 mb-0">{t('Filter By')} : </p>
                        <select 
                            value={params.filter}
                            onChange={handleFilter}
                            className="form-select select-filter" 
                            aria-label="rating">
                            <option value="">{t('All')} {t('Stars')} </option>                                
                            <option value="1">1 {t('Stars')} </option>
                            <option value="2">2 {t('Stars')} </option>
                            <option value="3">3 {t('Stars')} </option>
                            <option value="4">4 {t('Stars')} </option>
                            <option value="5">5  {t('Stars')} </option>
                        </select>
                    </div>
                    <div className="row" >
                        {
                            fetchResult.data.data.map((data,index) => (
                                <TestimoniItem data={data} index={index} />
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
                </div>
                :
                <p className="text-center">{t('There are no testimoni yet')}</p> :
                fetchResult.error ?
                <p className="text-center">{fetchResult.error}</p> :
                <div className="loader"></div>
            }
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
)(TestimoniesContainer)
