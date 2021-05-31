const BannerSmall = ({t}) => {
    return(
        <div className="row mx-0">
          <div className="col-12 col-lg-6 banner-sm banner1">
            <div className="container my-4 text-white d-flex justify-content-end align-items-center h-100">
              <div>
              <h1 className="title text-end text-white">{t("NEW COLLECTION")}</h1>
              <p className="desc text-end text-white">{t("CHECK IT NOW !")}</p>
              <div className="d-flex justify-content-end">
                <button 
                  type="button" 
                  className="btn btn-transparent py-2 px-3">{t("SEE COLLECTION")}</button>
              </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 banner-sm banner2">
            <div className="container my-4 text-white d-flex justify-content-center align-items-center h-100">
              <div>
              <h1 className="title text-center text-white ">{t("NEW COLLECTION")}</h1>
              <p className="desc text-center text-white">{t("CHECK IT NOW !")}</p>
              <div className="d-flex justify-content-center">
                <button 
                  type="button" 
                  className="btn btn-transparent py-2 px-3">{t("DESIGN NOW")}</button>
              </div>
              </div>
            </div>
          </div>
        </div>        
    )
}

export default BannerSmall ;