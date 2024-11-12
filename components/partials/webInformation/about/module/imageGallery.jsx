import React, { useState,useEffect } from 'react';
import Image from 'next/image'

// elements
import {ChevronLeft,ChevronRight} from '../../../../elements/icon'

const ImageGallery = ({data}) => {
    const [preview,setPreview] = useState({
        index : 0,
        image : data.history.images[0]
    })

    return (
        <div className="image-carousel">
            <div className="image-preview">
                <div className="row">
                    <div className="col-2 d-flex justify-content-start align-items-center">
                        <button 
                            disabled={preview.index === 0}
                            onClick={() => setPreview({
                                index : preview.index-1,
                                image : data.history.images[preview.index-1]
                            })}
                            type="button" 
                            className="btn btn-light border-0">
                            <ChevronLeft />
                        </button>
                    </div>
                    <div className="col-8 d-flex justify-content-center">
                    <Image
                            width={400}
                            height={286} 
                            src={preview.image} 
                            alt="laxmi" />
                    </div>    
                    <div className="col-2 d-flex justify-content-end align-items-center">
                        <button 
                            disabled={preview.index === data.history.images.length-1}                        
                            onClick={() => setPreview({
                                index : preview.index+1,
                                image : data.history.images[preview.index+1]
                            })}                        
                            type="button" 
                            className="btn btn-light border-0">
                            <ChevronRight />
                        </button>
                    </div>    
                </div>
            </div>
            <div className="image-thumbnail">
                <div className="d-flex flex-row justify-content-center">
                    {
                        data.history.images.map((data,index) => (
                            <div
                                onClick={() => setPreview({
                                    index : index,
                                    image : data
                                })} 
                                key={index} 
                                className="col-1 col-lg-3 mx-3 img-container">
                                {
                                    preview.index !== index ?
                                    <div className="img-filter"></div> : null
                                }
                                <Image
                                    layout="fill"
                                    src={data} 
                                    alt="laxmi" />
                            </div>    
                        ))
                    }                    
                </div>
            </div>
        </div>
    )
}

export default ImageGallery;