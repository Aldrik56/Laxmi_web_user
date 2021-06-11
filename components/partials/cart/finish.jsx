// elements
import Heading from '../../elements/heading'
import {CheckCircleOutline} from '../../elements/icon'

const Finish = ({t,setStep}) => {
    return(
        <div className="finish">
            <div className="text-center">
            <CheckCircleOutline />
                <Heading title={t("Thank you for your payment")} />
                <div className="w-100 d-flex justify-content-center">
                    <div className="col-12 col-lg-6">
                        <p className="desc">{t("Your order has been received, Click check button to see receipt for this transaction")} </p>
                    </div>
                </div>
                <button 
                    onClick={() => setStep(4)}
                    className="btn btn-primary py-2 w-50 mt-4">{t("Check")}</button>                                        

            </div>
        </div>
    )
}

export default Finish