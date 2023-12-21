import React, { useState, useEffect } from 'react';
import Link from 'next/link'

// herlper
// import Axios from '../../helpers/axiosConfig'
import axios from 'axios';

const Banner = ({ t }) => {
    const [data, setData] = useState({})

    useEffect(() => {
        axios.get(`/api/home/banner`)
            .then(response => {
                const { data, status } = response.data
                if (status) {
                    setData(data)
                }
            })
            .catch(error => {
                return {
                    status: false,
                    message: error.message
                }
            })
    }, []);

    return (
        <>
            {
                data.image ?
                    <div
                        style={{
                            backgroundImage: `url(${data.image})`
                        }}
                        className="col-12 banner d-flex align-items-center ">
                        <div className="content">
                            <div className="text text-center text-white">
                                <p className="title">{data.text && data.text.title}</p>
                                <p className="desc-banner">{data.text && data.text.desc}</p>
                                <Link href='/products/suits'>
                                    <a className="btn btn-light px-5 pb-0">{t("DISCOVER IT")}</a>
                                </Link>
                            </div>
                        </div>
                    </div> : null
            }
        </  >
    )
}


export default Banner;

