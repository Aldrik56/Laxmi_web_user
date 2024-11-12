import Image from 'next/image'

// elements
import {Edit} from '../../elements/icon';
import ModalAddress from '../cart/module/modalAddress';

const MyAddressContainer = ({t}) => {
    const notifData = [
        {
            title : "Home",
            noTelp : "(+1) 50858122",
            desc : "2020 Massachusetts Ave, NW Washington, DC 20036, United States Of America"
        },
        {
            title : "Office",
            noTelp : "(+1) 50858122",
            desc : "2020 Massachusetts Ave, NW Washington, DC 20036, United States Of America"
        },
        {
            title : "Home 2",
            noTelp : "(+1) 50858122",
            desc : "2020 Massachusetts Ave, NW Washington, DC 20036, United States Of America"
        },
        {
            title : "Home",
            noTelp : "(+1) 50858122",
            desc : "2020 Massachusetts Ave, NW Washington, DC 20036, United States Of America"
        },
        {
            title : "Home",
            noTelp : "(+1) 50858122",
            desc : "2020 Massachusetts Ave, NW Washington, DC 20036, United States Of America"
        },
        {
            title : "Home",
            noTelp : "(+1) 50858122",
            desc : "2020 Massachusetts Ave, NW Washington, DC 20036, United States Of America"
        }
    ]
    return (
        <>
            <div className="col-12 col-lg-9 mt-4">
                <div className="col-12 d-flex justify-content-end">
                    <button data-bs-toggle="modal" 
                            data-bs-target="#modalAddress"  
                            className="btn btn-primary py-3 px-5 mb-4">+ {t("New Address")}</button>                
                </div>
                <div className="content">
                    {
                        notifData.length ?
                        notifData.map((data,index) => (
                            <div className="card d-flex flex-row align-items-end justify-content-between" key={index}>
                                <div>
                                    <p className="title">{data.title}</p>
                                    <p className="desc">{data.noTelp}</p>
                                    <p className="desc mt-0">{data.desc}</p>
                                </div>
                                <p   className="text-pointer"
                                    data-bs-toggle="modal" 
                                    data-bs-target="#modalAddress" ><Edit /> {t("Edit")}</p>
                            </div>    
                        )) :
                        <div className="not-found d-flex justify-content-center">
                            <div>
                                <Image
                                    width={207}
                                    height={202} 
                                    src="/img/notification/notfound.svg" 
                                    alt="laxmi" />
                                <h4 className="mt-4 text-center fw-bold">{t("No")} {t("Notification")}</h4>                        
                            </div>
                        </div>
                    }
                </div>
                <ModalAddress t={t} />
            </div>                
        </>
    )
}

export default MyAddressContainer ;