// import React, { useState, useEffect } from 'react';
// import cartHookCustom from '../cartHookCustom';
// import Link from 'next/link'
// import Image from 'next/image'
// import axios from 'axios'

// // elements
// import { Trash, MinButton, PlusButton } from '../../../elements/icon'
// import Heading from '../../../elements/heading';

// // helper
// import NumberFormat from '../../../../helpers/numberFormat'

// const Accordion = ({ t,data }) => {
//     const [dataCart, setDataCart] = useState([])
//     const getCart = async () => {
//         try {
//             var response = await axios.get(`/api/cart/cart `);

//             const { status } = response;
        
//             // Check if the status is 200
//             if (status === 200) {
//                 // Log the entire response object
//                 console.log("Response data:", response.data.data);
//                 setDataCart(response)
//             } else {
//                 // Handle other status codes
//                 console.log("Error in posting data, status code:", status);
//             }
//         } catch (e) {
//             console.log('Error details:', e.response ? e.response.data : e.message);
//         } 

//         return response
//     }

//     useEffect(() => {
//         getCart()
//     },[])

//     const handleQuantity = type => {
//         alert(type)
//     }
//     return (
//         <div className="accordion" >
//             {
//                 console.log(dataCart.data)
               
//             }
//         </div>
//     )
// }

// export default Accordion;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';

// Assuming your other imports are correct and necessary components/icons are available
import { Trash, MinButton, PlusButton } from '../../../elements/icon';
import Heading from '../../../elements/heading';
import NumberFormat from '../../../../helpers/numberFormat';
import cartHookCustom from '../cartHookCustom';

const Accordion = ({ t, cart }) => {
    const [dataCart, setDataCart] = useState(null);

    const  {
        listCart,
        isLoading,
        setListCart,
        setIsLoading,
    } = cartHookCustom();
    const category = Object.keys(listCart);
    console.log(listCart);

    const handleQuantity = type => {
        alert(type);
    };

    return (
        <div className="accordion">
            {isLoading ? 
                <div class="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
                    <div class="animate-pulse flex space-x-4">
                        <div class="rounded-full bg-slate-200 h-10 w-10"></div>
                        <div class="flex-1 space-y-6 py-1">
                        <div class="h-2 bg-slate-200 rounded"></div>
                        <div class="space-y-3">
                            <div class="grid grid-cols-3 gap-4">
                                <div class="h-2 bg-slate-200 rounded col-span-2"></div>
                                <div class="h-2 bg-slate-200 rounded col-span-1"></div>
                            </div>
                            <div class="h-2 bg-slate-200 rounded"></div>
                        </div>
                        </div>
                    </div>
                </div> : 
                <> 
                {category.map((data, index) => (
                    <>
                   <div className='accordion-item'>
                        <h2 className="accordion-header" id="headingOne">
                        <input
                            className="form-check-input form-check-input-accordion"
                            type="checkbox"
                            value=""
                            id={`flexCheckDefault${index}`} 
                            />
                        <div
                            className="accordion-button d-flex align-items-center"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target={`#collapse${index}`}
                            aria-expanded="true"
                            aria-controls={`collapse${index}`}
                        >
                            <label className="form-check-label" >
                                &nbsp;&nbsp;{data}
                            </label>
                        </div>
                    </h2>
                    <div id={`collapse`} className={`accordion-collapse collapse`} aria-labelledby="headingOne" >
                                    <div className="accordion-body">
                                        {dataCart.pr.map((dataProduct, indexDataProduct, index) => (
                                                <>
                                                    <div className="accordion-body-item" key={indexDataProduct}>
                                                        <div className="d-flex flex-row accordion-body-container">
                                                            <input
                                                                className="form-check-input"
                                                                type="checkbox"
                                                                value=""
                                                                id={`flexCheckDefault`} />
                                                            <div className="row w-100">
                                                                <div className="col-12 col-sm-4 col-md-2">
                                                                    <div className="img-container d-flex justify-content-center align-items-center">
                                                                        <Image
                                                                            width={82}
                                                                            height={121}
                                                                            src={dataProduct.image}
                                                                            alt="laxmi" />
                                                                    </div>
                                                                </div>
                                                                <div className="col-12 col-sm-8 col-md-3">
                                                                    <div className="desc">
                                                                        <p
                                                                            data-bs-toggle="modal"
                                                                            data-bs-target={`#cartModalProdct${index}${indexDataProduct}`}
                                                                            className="title-product">{dataProduct.title}</p>
                                                                        <div className="material-product">
                                                                            <p>{dataProduct.material}</p>
                                                                            <p>ref : {dataProduct.ref}</p>
                                                                            <Link href="/">
                                                                                <a className="modify">{t("Modify")}</a>
                                                                            </Link>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-12 col-sm-4 col-md-2 d-flex align-items-end">
                                                                    <div className="price">
                                                                        <p>$ {NumberFormat(100000)}</p>
                                                                    </div>
                                                                </div>
                                                                <div className="col-2 col-sm-4 col-md-2 d-flex justify-content-center align-items-end">
                                                                    <div className="action d-flex flex-row">
                                                                        <p className="cursor-pointer"><Trash /> <span className="text">{t("Remove")}</span>  </p>
                                                                    </div>
                                                                </div>
                                                                <div className="col-10 col-sm-4 col-md-3 d-flex align-items-end">
                                                                    <div className="action d-flex flex-row">
                                                                        <p
                                                                            onClick={() => handleQuantity("min")}
                                                                            className="cursor-pointer action-button">
                                                                            <MinButton color={dataProduct.quantity < 2 ? "#A8A8A8" : "#1E1E22"} />
                                                                        </p>
                                                                        <p>{dataProduct.quantity}</p>
                                                                        <p
                                                                            onClick={() => handleQuantity("plus")}
                                                                            className="cursor-pointer action-button"><PlusButton /> </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="modal  fade" id={`cartModalProdct${index}${indexDataProduct}`} tabindex="-1" aria-labelledby={`cartModalProdct${index}${indexDataProduct}Label`} aria-hidden="true">
                                                        <div className="modal-dialog modal-xl">
                                                            <div className="modal-content p-4">
                                                                <Heading title="Order Details" />
                                                                <div className="row">
                                                                    <div className="col-12 col-lg-2 mt-4">
                                                                        <div className="img-container d-flex justify-content-center align-items-center">
                                                                            <Image
                                                                                width={82}
                                                                                height={121}
                                                                                src={dataProduct.image}
                                                                                alt="laxmi" />
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-12 col-lg-5 mt-4">
                                                                        <p className="mb-0 title">{dataProduct.title}</p>
                                                                        <div className="row mx-0 px-0">
                                                                            <div className="col-3 ps-0 ms-0">
                                                                                Sleeves
                                                                            </div>
                                                                            <div className="col-1">
                                                                                :
                                                                            </div>
                                                                            <div className="col-8">
                                                                                Long
                                                                            </div>
                                                                        </div>
                                                                        <div className="row mx-0 px-0">
                                                                            <div className="col-3 ps-0 ms-0">
                                                                                Fit
                                                                            </div>
                                                                            <div className="col-1">
                                                                                :
                                                                            </div>
                                                                            <div className="col-8">
                                                                                Slim Fit
                                                                            </div>
                                                                        </div>
                                                                        <div className="row mx-0 px-0">
                                                                            <div className="col-3 ps-0 ms-0">
                                                                                Shirt Collar
                                                                            </div>
                                                                            <div className="col-1">
                                                                                :
                                                                            </div>
                                                                            <div className="col-8">
                                                                                Collar Buttons
                                                                            </div>
                                                                        </div>
                                                                        <div className="row mx-0 px-0">
                                                                            <div className="col-3 ps-0 ms-0">
                                                                                Cuffs
                                                                            </div>
                                                                            <div className="col-1">
                                                                                :
                                                                            </div>
                                                                            <div className="col-8">
                                                                                Single cuff 1 button
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-12 col-lg-5 mt-4">
                                                                        <div className="d-flex flex-row ">
                                                                            <Image
                                                                                width={130}
                                                                                height={96}
                                                                                src="/img/fabric/fabricMaterial.png"
                                                                                alt="laxmi" />
                                                                            <div className="desc-material w-100">
                                                                                <p className="mb-0 title">{dataProduct.ref}</p>
                                                                                <div className="row mx-0 px-0">
                                                                                    <div className="col-2 ps-0 ms-0">
                                                                                        Material
                                                                                    </div>
                                                                                    <div className="col-1">
                                                                                        :
                                                                                    </div>
                                                                                    <div className="col-9 ps-0 mm-0">
                                                                                        100% Cotton
                                                                                    </div>
                                                                                </div>
                                                                                <div className="row mx-0 px-0">
                                                                                    <div className="col-2 ps-0 ms-0">
                                                                                        Season
                                                                                    </div>
                                                                                    <div className="col-1">
                                                                                        :
                                                                                    </div>
                                                                                    <div className="col-9 ps-0 ms-0">
                                                                                        Year Round
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </>
                                            ))
                                        }
                                    </div>
                                </div>
                   </div> 

                   </>
                   
                ))}
                </>
            
            }
            {/* {listCart.map((data,index)=>(
                <div className="accordion-item" key={index}>
                    <h2 className="accordion-header" id="headingOne">
                        <input
                            className="form-check-input form-check-input-accordion"
                            type="checkbox"
                            value=""
                            id={`flexCheckDefault${index}`} 
                            />
                        <div
                            className="accordion-button d-flex align-items-center"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target={`#collapse${index}`}
                            aria-expanded="true"
                            aria-controls={`collapse${index}`}
                        >
                            <label className="form-check-label" >
                                &nbsp;&nbsp;Shirts
                            </label>
                        </div>
                    </h2>
                </div>
            ))} */}


            {/* {dataCart.map((data, index) => (
                <div className="accordion-item" >

                            <div className="accordion-item" >
                                <h2 className="accordion-header" id="headingOne">
                                    <input
                                        className="form-check-input form-check-input-accordion"
                                        type="checkbox"
                                        value=""
                                        // id={`flexCheckDefault${index}`} 
                                        />
                                    <div
                                        className="accordion-button d-flex align-items-center"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        // data-bs-target={`#collapse${index}`}
                                        aria-expanded="true"
                                        // aria-controls={`collapse${index}`}
                                    >
                                        <label className="form-check-label" >
                                            &nbsp;&nbsp;Shirts
                                        </label>
                                    </div>
                                </h2>
                                <div id={`collapse`} className={`accordion-collapse collapse`} aria-labelledby="headingOne" >
                                    <div className="accordion-body">
                                        {
                                            dataCart.pr.map((dataProduct, indexDataProduct, index) => (
                                                <>
                                                    <div className="accordion-body-item" key={indexDataProduct}>
                                                        <div className="d-flex flex-row accordion-body-container">
                                                            <input
                                                                className="form-check-input"
                                                                type="checkbox"
                                                                value=""
                                                                id={`flexCheckDefault`} />
                                                            <div className="row w-100">
                                                                <div className="col-12 col-sm-4 col-md-2">
                                                                    <div className="img-container d-flex justify-content-center align-items-center">
                                                                        <Image
                                                                            width={82}
                                                                            height={121}
                                                                            src={dataProduct.image}
                                                                            alt="laxmi" />
                                                                    </div>
                                                                </div>
                                                                <div className="col-12 col-sm-8 col-md-3">
                                                                    <div className="desc">
                                                                        <p
                                                                            data-bs-toggle="modal"
                                                                            data-bs-target={`#cartModalProdct${index}${indexDataProduct}`}
                                                                            className="title-product">{dataProduct.title}</p>
                                                                        <div className="material-product">
                                                                            <p>{dataProduct.material}</p>
                                                                            <p>ref : {dataProduct.ref}</p>
                                                                            <Link href="/">
                                                                                <a className="modify">{t("Modify")}</a>
                                                                            </Link>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-12 col-sm-4 col-md-2 d-flex align-items-end">
                                                                    <div className="price">
                                                                        <p>$ {NumberFormat(100000)}</p>
                                                                    </div>
                                                                </div>
                                                                <div className="col-2 col-sm-4 col-md-2 d-flex justify-content-center align-items-end">
                                                                    <div className="action d-flex flex-row">
                                                                        <p className="cursor-pointer"><Trash /> <span className="text">{t("Remove")}</span>  </p>
                                                                    </div>
                                                                </div>
                                                                <div className="col-10 col-sm-4 col-md-3 d-flex align-items-end">
                                                                    <div className="action d-flex flex-row">
                                                                        <p
                                                                            onClick={() => handleQuantity("min")}
                                                                            className="cursor-pointer action-button">
                                                                            <MinButton color={dataProduct.quantity < 2 ? "#A8A8A8" : "#1E1E22"} />
                                                                        </p>
                                                                        <p>{dataProduct.quantity}</p>
                                                                        <p
                                                                            onClick={() => handleQuantity("plus")}
                                                                            className="cursor-pointer action-button"><PlusButton /> </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="modal  fade" id={`cartModalProdct${index}${indexDataProduct}`} tabindex="-1" aria-labelledby={`cartModalProdct${index}${indexDataProduct}Label`} aria-hidden="true">
                                                        <div className="modal-dialog modal-xl">
                                                            <div className="modal-content p-4">
                                                                <Heading title="Order Details" />
                                                                <div className="row">
                                                                    <div className="col-12 col-lg-2 mt-4">
                                                                        <div className="img-container d-flex justify-content-center align-items-center">
                                                                            <Image
                                                                                width={82}
                                                                                height={121}
                                                                                src={dataProduct.image}
                                                                                alt="laxmi" />
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-12 col-lg-5 mt-4">
                                                                        <p className="mb-0 title">{dataProduct.title}</p>
                                                                        <div className="row mx-0 px-0">
                                                                            <div className="col-3 ps-0 ms-0">
                                                                                Sleeves
                                                                            </div>
                                                                            <div className="col-1">
                                                                                :
                                                                            </div>
                                                                            <div className="col-8">
                                                                                Long
                                                                            </div>
                                                                        </div>
                                                                        <div className="row mx-0 px-0">
                                                                            <div className="col-3 ps-0 ms-0">
                                                                                Fit
                                                                            </div>
                                                                            <div className="col-1">
                                                                                :
                                                                            </div>
                                                                            <div className="col-8">
                                                                                Slim Fit
                                                                            </div>
                                                                        </div>
                                                                        <div className="row mx-0 px-0">
                                                                            <div className="col-3 ps-0 ms-0">
                                                                                Shirt Collar
                                                                            </div>
                                                                            <div className="col-1">
                                                                                :
                                                                            </div>
                                                                            <div className="col-8">
                                                                                Collar Buttons
                                                                            </div>
                                                                        </div>
                                                                        <div className="row mx-0 px-0">
                                                                            <div className="col-3 ps-0 ms-0">
                                                                                Cuffs
                                                                            </div>
                                                                            <div className="col-1">
                                                                                :
                                                                            </div>
                                                                            <div className="col-8">
                                                                                Single cuff 1 button
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-12 col-lg-5 mt-4">
                                                                        <div className="d-flex flex-row ">
                                                                            <Image
                                                                                width={130}
                                                                                height={96}
                                                                                src="/img/fabric/fabricMaterial.png"
                                                                                alt="laxmi" />
                                                                            <div className="desc-material w-100">
                                                                                <p className="mb-0 title">{dataProduct.ref}</p>
                                                                                <div className="row mx-0 px-0">
                                                                                    <div className="col-2 ps-0 ms-0">
                                                                                        Material
                                                                                    </div>
                                                                                    <div className="col-1">
                                                                                        :
                                                                                    </div>
                                                                                    <div className="col-9 ps-0 mm-0">
                                                                                        100% Cotton
                                                                                    </div>
                                                                                </div>
                                                                                <div className="row mx-0 px-0">
                                                                                    <div className="col-2 ps-0 ms-0">
                                                                                        Season
                                                                                    </div>
                                                                                    <div className="col-1">
                                                                                        :
                                                                                    </div>
                                                                                    <div className="col-9 ps-0 ms-0">
                                                                                        Year Round
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                </div>
            ))} */}
        </div>
    );
}

export default Accordion;
