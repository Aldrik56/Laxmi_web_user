import Link from 'next/link'
import useTranslation from 'next-translate/useTranslation';

export default function Custom404() {
    const {t} = useTranslation("notFound")

    return (
        <div className="d-flex justify-content-center">
            <div className="notFound">
                <h1>404</h1>
                <p>{t("Sorry, Something went wrong")}. {t("Either it was removed")}, {t("or you mistyped the link")}.</p>
                <div className="d-flex flex-row justify-content-center mt-5">
                    <Link href='/'>
                        <a className="btn btn-primary py-2 ">
                            {t("Go to homepage")}
                        </a>                                    
                    </Link>
                    <Link href='/contactus'>
                        <a className="btn btn-light py-2 ms-4">
                            {t("Contact us")}                            
                        </a>                                    
                    </Link>
                </div>
            </div>
        </div>
    )
  }