import React, { useState,useEffect } from 'react';
import { useRouter } from 'next/router'

// REDUX
import { connect } from 'react-redux'
import {fetcAction} from '../../../stores';

// modules
import SubCategory from './modules/subCategory';

// elements
import Pagination from '../../elements/pagination'

// components
import Product from '../../elements/product/productDefault';

const ProductList = ({t,fetcAction,fetchResult}) => {
    const router = useRouter()
    const { category } = router.query

    const [params,setParams] = useState({
        page : 1,
        per_page : 9,
        filter : 'hightolower',
        search : '',
        sub_category : '',
        category : category
    })
    useEffect(() => {
        fetcAction('/products',params)
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
    const handleSubCategory = e => {
        setParams({
            ...params,
            page : 1,
            sub_category : e,
        })
    }
    return (
        <div className="container-fluid ">
            <div className="w-100 d-flex justify-content-end align-items-center">
                <p className="pr-5 mb-0 sort-by">{t('Sort by')} : </p>
                <select 
                    value={params.filter}
                    onChange={handleFilter}
                    className="form-select select-filter" 
                    aria-label="sort">
                    <option value="hightolower">{t('Highest Price')}</option>                                
                    <option value="lowertohight">{t('Lowest Price')}</option>
                    <option value="latest">{t('Latest')}</option>
                </select>
            </div>
            <hr className="w-100 hr-filter" />
            <div className="row">
                <div className="col-12 col-md-3 col-xxl-2 mt-5">
                    <SubCategory
                        handleSubCategory={handleSubCategory} 
                        params={params} />
                </div>
                <div className="col-12 col-md-9 col-xxl-10 product-list-container">
                    {
                        fetchResult.data ?
                        fetchResult.data.data.length ?
                        <>
                            <div className="row" >
                                {
                                    fetchResult.data.data.map((data,index) => (
                                        <Product key={index} t={t} data={data} />
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
                        <p className="text-center">{t('common:There are no data yet')}</p> :        
                        fetchResult.error ?
                        <p className="text-center">{fetchResult.error}</p> :
                        <div className="loader"></div>                    
                    }
                </div>
            </div>
        </div>
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
)(ProductList)
