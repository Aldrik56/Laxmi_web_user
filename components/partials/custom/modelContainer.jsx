import Image from 'next/image'
import { ChevronLeft, ChevronRight } from '../../elements/icon'
import { useEffect, useState } from 'react';

const ModelContainer = ({ category, fabricSelect, styleSelect }) => {
    const [fit, setFit] = useState("Regular")
    const [sleeve, setSleeve] = useState("short")
    const [collar, setCollar] = useState("Short")
    const [pocket, setPocket] = useState("No Pocket")
    const [placket, setPlacket] = useState("standard")
    const [pleat, setPleat] = useState("No Pleat")
    useEffect(() => {
        switch (styleSelect.title) {
            case "Fit":
                setFit(styleSelect.category)
                break;
            case "Collar":
                setCollar(styleSelect.category)
                break;
            case "Sleeve":
                setSleeve(styleSelect.category.toLowerCase())
                break;
            case "Chest Pocket":
                setPocket(styleSelect.category)
                break;
            case "Placket":
                setPlacket(styleSelect.category)
                break;
            case "Pleats":
                setPleat(styleSelect.category)
                break;
            default:
                break;
        }
    }, [styleSelect])
    return (
        <div className="model-container row">
            {/* front */}
            <div className="col-12">
                <div className="img-container" style={{
                    position: 'relative',
                    zIndex: 1,
                }}>
                    {/* model */}
                    <div style={{ zIndex: 2, position: 'absolute' }}>
                        <Image
                            width={350} // 200 | 350 | 400 | 500 | 1080
                            height={953} // 544 | 953 | 1089 | 1361 | 2940
                            src="/img/custom/model_front.png"
                            alt="laxmi" />
                    </div>
                    {/* body */}
                    <div style={{ zIndex: 3, position: 'absolute' }}>
                        <Image
                            width={350} // 200 | 350 | 400 | 500 | 1080
                            height={953} // 544 | 953 | 1089 | 1361 | 2940
                            src={`/img/custom/${category}/${fabricSelect.title ?? "C-Blue"}/front/${placket}/body/${fit}.png`}
                            alt="laxmi" />
                    </div>
                    {/* collar */}
                    <div style={{ zIndex: 4, position: 'absolute' }}>
                        <Image
                            width={350} // 200 | 350 | 400 | 500 | 1080
                            height={953} // 544 | 953 | 1089 | 1361 | 2940
                            src={`/img/custom/${category}/${fabricSelect.title ?? "C-Blue"}/front/${placket}/collar/${collar}.png`}
                            alt="laxmi" />
                    </div>
                    {/* sleeve */}
                    <div style={{ zIndex: 5, position: 'absolute' }}>
                        <Image
                            width={350} // 200 | 350 | 400 | 500 | 1080
                            height={953} // 544 | 953 | 1089 | 1361 | 2940
                            src={`/img/custom/${category}/${fabricSelect.title ?? "C-Blue"}/front/${placket}/sleeve/${sleeve}.png`}
                            alt="laxmi" />
                    </div>
                    {/* pocket */}
                    <div style={{ zIndex: 6, position: 'relative' }}>
                        <Image
                            width={350} // 200 | 350 | 400 | 500 | 1080
                            height={953} // 544 | 953 | 1089 | 1361 | 2940
                            src={`/img/custom/${category}/${fabricSelect.title ?? "C-Blue"}/front/${placket}/pocket/${pocket}.png`}
                            alt="laxmi" />
                    </div>
                </div>
            </div>
            {/* back */}
            {/* <div className="col-6">
                <div className="img-container" style={{
                    position: 'relative',
                    zIndex: 1,
                }}>
                    
                    <div style={{ zIndex: 2, position: 'absolute' }}>
                        <Image
                            width={350} // 200 | 350 | 400 | 500 | 1080
                            height={953} // 544 | 953 | 1089 | 1361 | 2940
                            src="/img/custom/model_back.png"
                            alt="laxmi" />
                    </div>
                    
                    <div style={{ zIndex: 3, position: 'absolute' }}>
                        <Image
                            width={350} // 200 | 350 | 400 | 500 | 1080
                            height={953} // 544 | 953 | 1089 | 1361 | 2940
                            src={`/img/custom/${category}/${fabricSelect.title ?? "C-Blue"}/back/body/${pleat}.png`}
                            alt="laxmi" />
                    </div>
                    
                    <div style={{ zIndex: 4, position: 'absolute' }}>
                        <Image
                            width={350} // 200 | 350 | 400 | 500 | 1080
                            height={953} // 544 | 953 | 1089 | 1361 | 2940
                            src={`/img/custom/${category}/${fabricSelect.title ?? "C-Blue"}/back/Collar/collar.png`}
                            alt="laxmi" />
                    </div>
                    
                    <div style={{ zIndex: 5, position: 'relative' }}>
                        <Image
                            width={350} // 200 | 350 | 400 | 500 | 1080
                            height={953} // 544 | 953 | 1089 | 1361 | 2940
                            src={`/img/custom/${category}/${fabricSelect.title ?? "C-Blue"}/back/sleeve/${sleeve}.png`}
                            alt="laxmi" />
                    </div>
                   
                </div>
            </div> */}
            <div className="d-flex justify-content-center nav-container w-100">
                <div className="circle-nav active"></div>
                <div className="circle-nav"></div>
                <div className="circle-nav"></div>
            </div>
        </div>
    )
}

export default ModelContainer