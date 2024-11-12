import React, { useState,useEffect } from 'react';

// helper
import Axios from '../../../../helpers/axiosConfig'

// module
import OddItem from './module/oddItem';
import EvenItem from './module/evenItem';

const WorkSteps = ({t}) => {
    const [data,setData] = useState(null)

    useEffect(() => {
        Axios.get(`/web_info/how_it_work`)
        .then(response => {
            const {data,status} = response.data
            if(status){
                setData(data)
            }else{
                setData([])
            }
        })
        .catch(error => {
            setData([])
            return {
                status : false,
                message : error.message
            }
        })      
    },[]);
    return (
        <>
            {
                data ?
                data.length ?
                <div className="d-flex flex-column w-100">
                    {
                        data.map((data,index) => (
                            <>
                            {
                                (index+1)%2 == 0 ?
                                <EvenItem 
                                    index={index}
                                    data={data} /> 
                                :
                                <OddItem 
                                    index={index}
                                    data={data} />                                
                            }
                            </>
                        ))                        
                    }
                </div>
                :
                <p className="text-center py-5">{t("common:There are no data yet")}</p> :
                <p className="text-center">Loading</p>
            }
        </>
    )
}

export default WorkSteps ;