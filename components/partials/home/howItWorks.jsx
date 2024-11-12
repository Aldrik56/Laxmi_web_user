import Image from 'next/image'
import Link from 'next/link'

// elements
import Heading from '../../elements/heading'

const HowItWorks = ({t}) => {
    const howItWorks = [
        {
            title : `${t('Consultation')}`,
        },
        {
            title : `${t('Choose The Fabric & Model')}`,
        },
        {
            title : `${t('Get Measured & Fitting')}`,
        },
    ]

    return(
        <div className="howItWorks">
            <Heading title={t('How It Works')} />
            <div className="container-fluid">
                {/* <div className="row mt-4">
                    {
                        howItWorks.map((data,index) => (
                            <div className="col-12 col-lg-4 text-center" key={index}>
                                <h3 className="sub-title">
                                    {data.title}
                                </h3>
                                <div className="position-relative">
                                    <Image
                                        width={240}
                                        height={240} 
                                        src={`/img/howitworks/how${index+1}.svg`} 
                                        alt="laxmi" />
                                </div>
                            </div>
                        ))
                    }
                </div> */}
                <div className="d-flex justify-content-center my-4">
                    <iframe 
                        width="667" 
                        height="426" 
                        src="https://www.youtube.com/embed/xaLtcjKBwz4">
                    </iframe>                                    
                </div>
            </div>
            <div className="d-flex justify-content-center">
                <Link href='/howitworks'>
                    <a className="btn btn-primary btn-lg py-3">{t('LEARN MORE')}</a>
                </Link>
            </div>
        </div>
    )
}

export default HowItWorks ;