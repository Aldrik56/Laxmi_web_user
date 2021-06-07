import Image from 'next/image'
import Rating from './rating'

const TestimoniItem = ({data,index}) => {
    return (
        <>
        <div className="col-12 col-md-6 col-lg-4 mt-4" key={index}>
            <div 
                className="testimonies-item" 
                data-bs-toggle="modal" 
                data-bs-target={`#modalTestimoni${index}`}>
               <div className="testimonies-item-head">
                   <div className="content row">
                       <div className="col-5 col-lg-4 d-flex justify-content-center align-items-center">
                            <div className="container-img">
                            {
                                data.image && 
                                <Image
                                    layout="fill"
                                    src={data.image}
                                    objectFit="cover"
                                    className="rounded-circle"
                                    alt="laxmi" />                                
                            }
                            </div>
                       </div>
                       <div className="col-7 col-lg-8 d-flex justify-content-center ">
                            <div className="container-content w-100">
                                <div className="rating">
                                    <Rating data={data.star} />
                                </div>        
                                <p className="mb-0 name">{data.name}</p>  
                                <div className="d-flex flex-row justify-content-between desc">
                                    <p className="mb-0 profesion">{data.profession}</p>                                  
                                    <p className="mb-0 profesion text-end">{data.date}</p>                                  
                                </div>
                            </div>
                       </div>
                   </div>
               </div>
               <div className="testimonies-item-body">
                   <div className="content">
                       <p>“ {data.description} ”</p>
                   </div>
                </div>    
            </div>
        </div>
        <div 
            className="modal fade" 
            id={`modalTestimoni${index}`} 
            tabindex="-1" 
            aria-labelledby={`modalTestimoni${index}`} 
            aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <button 
                    type="button" 
                    className="btn-close" 
                    data-bs-dismiss="modal" 
                    aria-label="Close"></button>
                <div className="modal-body p-0">
                    <div className="testimonies-item-head">
                        <div className="content row">
                            <div className="col-5 col-lg-4 d-flex justify-content-center align-items-center">
                                    <div className="container-img">
                                    {
                                        data.image && 
                                        <Image
                                            layout="fill"
                                            src={data.image}
                                            objectFit="cover"
                                            className="rounded-circle"
                                            alt="laxmi" />                                                                        
                                    }
                                    </div>
                            </div>
                            <div className="col-7 col-lg-8 d-flex justify-content-center ">
                                    <div className="container-content w-100">
                                        <div className="rating">
                                            <Rating data={data.star} />
                                        </div>        
                                        <p className="mb-0 name">{data.name}</p>  
                                        <div className="d-flex flex-row justify-content-between ">
                                            <p className="mb-0 profesion">{data.profession}</p>                                  
                                            <p className="mb-0 profesion text-end">{data.date}</p>                                  
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div className="testimonies-item-body">
                        <div className="content">
                            <p>“ {data.description} ”</p>
                        </div>
                    </div> 
                </div>
                </div>
            </div>
        </div>        
        </>
    )
}

export default TestimoniItem ;