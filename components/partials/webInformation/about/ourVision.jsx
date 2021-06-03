import Image from 'next/image'

// elements
import Heading from '../../../elements/heading'


const OurVision = ({t,data}) => {
    return (
        <>
            <Heading title={t(`Our Vision`)} />
            <div className="our-vision text-end container-fluid px-5 py-5">
                <div className="rectanggle d-flex justify-content-end">
                    <div className="quotes-mark-left">
                        <Image
                            src="/img/icon/quotes-mark-left.svg"
                            alt="Laxmi"
                            width={87}
                            height={87}
                            />
                    </div>
                    <div className="quotes-mark-right">
                        <Image
                            src="/img/icon/quotes-mark-right.svg"
                            alt="Laxmi"
                            width={87}
                            height={87}
                            />
                    </div>
                    <p className="mb-0">{data.our_vision}</p>
                </div>
            </div>
        </>
    )
}

export default OurVision ;