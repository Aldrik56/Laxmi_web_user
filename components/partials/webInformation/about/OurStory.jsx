import Image from 'next/image'
import parse from 'html-react-parser';

// elements
import Heading from '../../../elements/heading'


const OurStory = ({t,data}) => {
    return (
        <>
            <Heading title={t(`Our Story`)} />
            <div className="our-story container-fluid px-5 py-5">
                <div className="row">
                    <div className="col-12 col-lg-4 img-container">
                        <Image
                            src={data.our_story.image}
                            alt="Laxmi"
                            width={400}
                            height={286}
                            />
                    </div>
                    <div className="col-12 col-lg-8">
                        <div className="html-parse">
                            {parse(data.our_story.description)}
                        </div> 
                    </div>                    
                </div>
            </div>
        </>
    )
}

export default OurStory ;