import Image from 'next/image'
import { ChevronLeft, ChevronRight } from '../../elements/icon'
import { useEffect, useState } from 'react';

const ModelContainer = ({ category, fabricSelect, styleSelect }) => {
    const [fit, setFit] = useState("Regular")
    const [sleeve, setSleeve] = useState("short")
    const [collar, setCollar] = useState("Band")
    const [pocket, setPocket] = useState("No Pocket")
    const [placket, setPlacket] = useState("standard")
    const [pov, setPov] = useState('front')
    
    useEffect(() => {
        console.log(styleSelect);
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
                setPlacket(styleSelect.category.toLowerCase())
                break;
            default:
                break;
        }
    }, [styleSelect])
    return (
        <div className="model-container row">
            {/* front */}
            <div className='col-2 d-flex align-items-center' style={{ height: "80vh" }}>
                <div onClick={() => {
                    console.log(pov);
                    switch (pov) {
                        case "front":
                            setPov("folded")
                            break;
                        case "folded":
                            setPov("back")
                            break;
                        case "back":
                            setPov("front")
                            break;
                        default:
                            break;
                    }
                }}>
                    <ChevronLeft width={20} height={20} />
                </div>
            </div>
            <div className="col-8">
                {/* front */}
                <div className='slide' style={{ display: pov === "front" ? 'block' : 'none' }}>
                    <div className="img-container" style={{
                        position: 'relative',
                        zIndex: 1,
                    }}>
                        {/* model */}
                        <div style={{ zIndex: 2, position: 'absolute' }}>
                            <Image
                                width={350} // 200 | 350 | 400 | 500 | 1080
                                height={953} // 544 | 953 | 1089 | 1361 | 2940
                                src={`/img/custom/model_${pov}.png`}
                                alt="laxmi" />
                        </div>
                        {/* body */}
                        <div style={{ zIndex: 3, position: 'absolute' }}>
                            <Image
                                width={350} // 200 | 350 | 400 | 500 | 1080
                                height={953} // 544 | 953 | 1089 | 1361 | 2940
                                src={`/img/custom/${category}/${fabricSelect.name ?? "C-Blue"}/${pov}/${placket}/body/${fit}.png`}
                                alt="laxmi" />
                        </div>
                        {/* collar */}
                        <div style={{ zIndex: 4, position: 'absolute' }}>
                            <Image
                                width={350} // 200 | 350 | 400 | 500 | 1080
                                height={953} // 544 | 953 | 1089 | 1361 | 2940
                                src={`/img/custom/${category}/${fabricSelect.name ?? "C-Blue"}/${pov}/${placket}/collar/${collar}.png`}
                                alt="laxmi" />
                        </div>
                        {/* sleeve */}
                        <div style={{ zIndex: 5, position: 'absolute' }}>
                            <Image
                                width={350} // 200 | 350 | 400 | 500 | 1080
                                height={953} // 544 | 953 | 1089 | 1361 | 2940
                                src={`/img/custom/${category}/${fabricSelect.name ?? "C-Blue"}/${pov}/${placket}/sleeve/${sleeve}.png`}
                                alt="laxmi" />
                        </div>
                        {/* pocket */}
                        <div style={{ zIndex: 6, position: 'relative' }}>
                            <Image
                                width={350} // 200 | 350 | 400 | 500 | 1080
                                height={953} // 544 | 953 | 1089 | 1361 | 2940
                                src={`/img/custom/${category}/${fabricSelect.name ?? "C-Blue"}/${pov}/${placket}/pocket/${pocket}.png`}
                                alt="laxmi" />
                        </div>

                    </div>
                </div>
                {/* back */}
                <div className='slide' style={{ display: pov === "back" ? 'block' : 'none' }}>
                    <div className="img-container" style={{
                        position: 'relative',
                        zIndex: 1,
                    }}>
                        {/* model */}
                        <div style={{ zIndex: 2, position: 'absolute' }}>
                            <Image
                                width={350} // 200 | 350 | 400 | 500 | 1080
                                height={953} // 544 | 953 | 1089 | 1361 | 2940
                                src={`/img/custom/model_${pov}.png`}
                                alt="laxmi" />
                        </div>
                        {/* body */}
                        <div style={{ zIndex: 3, position: 'absolute' }}>
                            <Image
                                width={350} // 200 | 350 | 400 | 500 | 1080
                                height={953} // 544 | 953 | 1089 | 1361 | 2940
                                src={`/img/custom/${category}/${fabricSelect.name ?? "C-Blue"}/${pov}/body/Regular.png`}
                                alt="laxmi" />
                        </div>
                        {/* collar */}
                        <div style={{ zIndex: 4, position: 'absolute' }}>
                            <Image
                                width={350} // 200 | 350 | 400 | 500 | 1080
                                height={953} // 544 | 953 | 1089 | 1361 | 2940
                                src={`/img/custom/${category}/${fabricSelect.name ?? "C-Blue"}/${pov}/collar/collar.png`}
                                alt="laxmi" />
                        </div>
                        {/* sleeve */}
                        <div style={{ zIndex: 5, position: 'relative' }}>
                            <Image
                                width={350} // 200 | 350 | 400 | 500 | 1080
                                height={953} // 544 | 953 | 1089 | 1361 | 2940
                                src={`/img/custom/${category}/${fabricSelect.name ?? "C-Blue"}/${pov}/sleeve/${sleeve}.png`}
                                alt="laxmi" />
                        </div>
                    </div>
                </div>
                {/* folded */}
                <div className='slide' style={{ display: pov === "folded" ? 'block' : 'none' }}>
                    <div className="img-container" style={{
                        position: 'relative',
                        zIndex: 1,
                    }}>
                        {/* model */}
                        <div style={{ zIndex: 2, position: 'absolute' }}>
                            <Image
                                width={350} // 200 | 350 | 400 | 500 | 1080
                                height={512} // 292 | 512 | 585 | 731 | 1579
                                src={`/img/custom/model_${pov}.png`}
                                alt="laxmi" />
                        </div>
                        {/* body */}
                        <div style={{ zIndex: 3, position: 'absolute' }}>
                            <Image
                                width={350} // 200 | 350 | 400 | 500 | 1080
                                height={512} // 292 | 512 | 585 | 731 | 1579
                                src={`/img/custom/${category}/${fabricSelect.name ?? "C-Blue"}/${pov}/${placket}/body/${fit}.png`}
                                alt="laxmi" />
                        </div>
                        {/* collar */}
                        <div style={{ zIndex: 4, position: 'absolute' }}>
                            <Image
                                width={350} // 200 | 350 | 400 | 500 | 1080
                                height={512} // 292 | 512 | 585 | 731 | 1579
                                src={`/img/custom/${category}/${fabricSelect.name ?? "C-Blue"}/${pov}/${placket}/collar/${collar}.png`}
                                alt="laxmi" />
                        </div>
                        {/* sleeve */}
                        <div style={{ zIndex: 5, position: 'absolute' }}>
                            <Image
                                width={350} // 200 | 350 | 400 | 500 | 1080
                                height={512} // 292 | 512 | 585 | 731 | 1579
                                src={`/img/custom/${category}/${fabricSelect.name ?? "C-Blue"}/${pov}/${placket}/sleeve/${sleeve}.png`}
                                alt="laxmi" />
                        </div>
                        {/* pocket */}
                        <div style={{ zIndex: 6, position: 'relative' }}>
                            <Image
                                width={350} // 200 | 350 | 400 | 500 | 1080
                                height={512} // 292 | 512 | 585 | 731 | 1579
                                src={`/img/custom/${category}/${fabricSelect.name ?? "C-Blue"}/${pov}/${placket}/pocket/${pocket}.png`}
                                alt="laxmi" />
                        </div>

                    </div>
                </div>
            </div>
            <div className='col-2 d-flex align-items-center' style={{ height: "80vh" }}>
                <div onClick={() => {
                    switch (pov) {
                        case "front":
                            setPov("back")
                            break;
                        case "back":
                            setPov("folded")
                            break;
                        case "folded":
                            setPov("front")
                            break;
                        default:
                            break;
                    }
                }}>
                    <ChevronRight width={20} height={20} />
                </div>
            </div>


        </div >
    )
}

export default ModelContainer