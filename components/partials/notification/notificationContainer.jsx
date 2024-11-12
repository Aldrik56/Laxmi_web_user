import Image from 'next/image'

const NotificationContainer = ({t}) => {
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
    return (
        <div className="col-12 col-lg-9 mt-4">
            <div className="content">
                {
                    notifData.length ?
                    notifData.map((data,index) => (
                        <div className="card" key={index}>
                            <p className="title">{data.title}</p>
                            <p className="desc">{data.desc}</p>
                            <p className="date">{data.date}</p>
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
        </div>        
    )
}

export default NotificationContainer ;