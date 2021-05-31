import Image from 'next/image'
import useTranslation from 'next-translate/useTranslation';

const FooterDefault = () => {
    const {t} = useTranslation("footer")

    return(
        <footer>
            <div className="container-fluid px-5 pt-3 pb-5">
                <div className="row">
                    <div className="col-12 col-lg-3 mt-4">
                        <h5>PECENONGAN</h5>
                        <p>Jl. Pecenongan No 17B Jakarta Pusat 10120 Indonesia</p>
                        <p>{t("Phone")} : +6221 3848250, 3459326</p>
                        <p>Fax : +6221 38481566</p>
                        <p>Email: sales@laxmitailors.com</p>
                    </div>
                    <div className="col-12 col-lg-3 mt-4">
                        <h5>SENAYAN CITY MALL</h5>
                        <p>Jl. Asia Afrika Lot. 19 Unit 4/52 Jakarta Pusat 10270 Indonesia</p>
                        <p>{t("Phone")} : +6221 72781260, 72781261</p>
                        <p>Fax : +6221 72781262</p>
                        <p>Email: sales@laxmitailors.com </p>
                    </div>
                    <div className="col-12 col-lg-3 mt-4">
                        <h5>KEMANG</h5>
                        <p>Jln Kemang Raya No.6D Jakarta Selatan 12720 Indonesia</p>
                        <p>{t("Phone")} : +6221 7198789, 7198857</p>
                        <p>Fax : +6221 7198806</p>
                        <p>Email: sales@laxmitailors.com</p>
                    </div>
                    <div className="col-12 col-lg-3 mt-4">
                        <h5>{t("NEWSLETTER")}</h5>
                        <p>{t("Subscribe for receiving the lastest update")}</p>
                        <div className="input-newsletter">
                            <label htmlFor="email">Email</label>
                            <div className="d-flex flex-row">
                                <input 
                                    type="email" 
                                    className="form-control" 
                                    id="email" 
                                    placeholder="me@example.com" />
                                <button 
                                    type="submit" 
                                    className="btn btn-primary">{t("Subcribe")}</button>                                                   
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-3 mt-4">
                        <h5>AEON MALL BSD CITY</h5>
                        <p>Jl. BSD Raya Utama, Lt. 1 Unit 1-42 Tangerang Indonesia</p>
                        <p>{t("Phone")} : +6221 22232822</p>
                        <p>Email: sales@laxmitailors.com</p>
                    </div>
                    <div className="col-12 col-lg-3 mt-4">
                        <h5>PACIFIC PLACE</h5>
                        <p>Jl. Jendral Sudirman Unit 2-65,66 Jakarta Selatan Indonesia</p>
                        <p>{t("Phone")} : +6221 5797314</p>
                        <p>Fax : +6221 57973142</p>
                        <p>Email: sales@laxmitailors.com</p>
                    </div>
                    <div className="col-12 col-lg-3 mt-4">
                        <div className="mb-3">
                            <Image
                                src="/img/footer.png"
                                alt="Laxmi"
                                width={119}
                                height={70}
                                />
                        </div>
                        <h5>PACIFIC PLACE</h5>
                        <p>Pondok Indah Mall 2, 2nd Floor Unit 241A Jakarta Selatan Indonesia</p>
                        <p>{t("Phone")} : +6221 75920426</p>
                        <p>Email: sales@theclassyfit.co.id</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default FooterDefault ;