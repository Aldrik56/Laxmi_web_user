import Image from 'next/image'

// modules
import OrderItem from './modules/orderItems';

const MyOrderContainer = ({t,setPath}) => {
    const notifData = [
        {
            title : "Thank You",
            desc : "Your order has been received and and we will process it as soon as possible",
            date : "11 May 2021, 15.00 WIB"
        },
        {
            title : "Welcome to Laxmi Tailor",
            desc : "Your account is confirmed and reaty to use",
            date : "11 May 2021, 15.00 WIB"
        },
        {
            title : "Welcome to Laxmi Tailor",
            desc : "Your account is confirmed and reaty to use",
            date : "11 May 2021, 15.00 WIB"
        },
        {
            title : "Welcome to Laxmi Tailor",
            desc : "Your account is confirmed and reaty to use",
            date : "11 May 2021, 15.00 WIB"
        },
        {
            title : "Welcome to Laxmi Tailor",
            desc : "Your account is confirmed and reaty to use",
            date : "11 May 2021, 15.00 WIB"
        },
        {
            title : "Welcome to Laxmi Tailor",
            desc : "Your account is confirmed and reaty to use",
            date : "11 May 2021, 15.00 WIB"
        }
    ]

    const statusData = [
        {
            title : t("All"),
            value : "/"    
        },
        {
            title : t("Unpaid"),
            value : "/"    
        },
        {
            title : t("On Process"),
            value : "/"    
        },
        {
            title : t("Sent"),
            value : "/"    
        },
        {
            title : t("Finished"),
            value : "/"    
        },
        {
            title : t("Canceled"),
            value : "/"    
        },
    ]
    return (
        <div className="col-12 col-lg-9 mt-4">
            <div className="filter-status d-flex justify-content-between">
                {
                   statusData.map((data,index) => (
                    <div className={`status ${index === 0 ? 'active' : ''}`} key={index}>
                        {data.title}
                    </div>
                   )) 
                }
            </div>
            <div className="content mt-4">
                {
                    notifData.length ?
                    notifData.map((data,index) => (
                        <OrderItem
                            t={t}
                            setPath={setPath}
                            data={data} 
                            key={index} />
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
        </div>        
    )
}

export default MyOrderContainer ;