import {
    BrowserView,
    MobileView
  } from "react-device-detect";

const Heading = ({title}) => {
    return(
        <>
            <BrowserView>
                <h1 className="head text-center mb-0 text-capitalize">
                    {title}
                </h1>
                <div className="d-flex justify-content-center text-capitalize">
                    <hr />
                </div>        
            </BrowserView>
            <MobileView>
                <h1 className="head-mobile text-center mb-0 text-capitalize">
                    {title}
                </h1>
                <div className="d-flex justify-content-center text-capitalize">
                    <hr />
                </div>                      
            </MobileView>
        </>
    )
}

export default Heading;