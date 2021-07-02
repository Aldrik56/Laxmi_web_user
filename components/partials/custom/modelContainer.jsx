import Image from 'next/image'
import {ChevronLeft,ChevronRight} from '../../elements/icon'

const ModelContainer = () => {
    return (
        <div className="model-container">
            <div className="img-container">
                <Image
                    width={420}
                    height={727}
                    src="/img/custom/model.png" 
                    alt="laxmi" />      
            </div>
            <div className="d-flex justify-content-center nav-container w-100">
                <div className="circle-nav active"></div>
                <div className="circle-nav"></div>
                <div className="circle-nav"></div>
            </div>
        </div>
    )
}

export default ModelContainer