import Image from 'next/image'
import Link from 'next/link'

const BannerSmallMobile = ({t}) => {
    return(
        <div className="row mx-0 ">
          <Link href='/custom/vests'>
            <div className="col-12 col-lg-6 banner-sm d-flex justify-content-center align-items-center">
              <div className="filter"></div>
              <Image
                  layout="fill"
                  objectFit="cover"
                  src='/img/promotion/banner1.png'
                  alt="laxmi" />                
              <div className="content my-4 text-white">
                <div>
                  <h1 className="title text-center text-white">{t("CUSTOM VEST")}</h1>
                  {/* <p className="desc text-end text-white">{t("CHECK IT NOW !")}</p>
                  <div className="d-flex justify-content-end">
                    <button 
                      type="button" 
                      className="btn btn-transparent py-2 px-3">{t("SEE COLLECTION")}</button>
                  </div> */}
                </div>
              </div>
            </div>
          </Link>
          <Link href='/custom/suits'>
            <div className="col-12 col-lg-6 banner-sm d-flex justify-content-center align-items-center">
              <div className="filter"></div>
              <Image
                layout="fill"
                objectFit="cover"
                src='/img/promotion/banner2.png'
                alt="laxmi" />   
              <div className=" content my-4 text-white ">
                <div>
                <h1 className="title text-center text-white ">{t("CUSTOM SUIT")}</h1>
                {/* <p className="desc text-center text-white">{t("CHECK IT NOW !")}</p>
                <div className="d-flex justify-content-center">
                  <button 
                    type="button" 
                    className="btn btn-transparent py-2 px-3">{t("DESIGN NOW")}</button>
                </div> */}
                </div>
              </div>
            </div>
          </Link>
        </div>        
    )
}

export default BannerSmallMobile ;