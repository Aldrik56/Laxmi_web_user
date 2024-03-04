import Image from 'next/image'
import { ChevronLeft, ChevronRight } from '../../elements/icon'
import { useEffect, useState } from 'react';

const ModelContainer = ({ category, fabricSelect, styleSelect, bordir }) => {
    // const [fit, setFit] = useState("Regular")
    const [bottom, setBottom] = useState("Square")
    const [bottomSecondary, setBottomSecondary] = useState("Untucked")
    const [sleeve, setSleeve] = useState("short")
    const [collar, setCollar] = useState("Kent")
    const [collarAccent, setCollarAccent] = useState("Default")
    const [collarColor, setCollarColor] = useState("")
    const [cuffs, setCuffs] = useState("Double Rounded French")
    const [cuffsAccent, setCuffsAccent] = useState("Default")
    const [cuffsColor, setCuffsColor] = useState("")
    const [pocket, setPocket] = useState("No Pocket")
    const [placket, setPlacket] = useState("standard")
    const [pov, setPov] = useState('front')
    const [bordirs, setBordirs] = useState()

    useEffect(() => {
        setBordirs(bordir)
    }, [bordir])

    useEffect(() => {
        console.log(styleSelect);
        switch (styleSelect.title) {
            // case "Fit":
            //     setFit(styleSelect.category)
            //     break;
            case "Bottom":
                if (styleSelect.type === "secondary") {
                    setBottomSecondary(styleSelect.category)
                } else {
                    setBottom(styleSelect.category)
                }
                break;
            case "Collar":
                setCollar(styleSelect.category)
                break;
            case "Contrasted Collar":
                if (pov === "back") setPov("folded")
                console.log(styleSelect.type);
                if (styleSelect.type === "color") {
                    setCollarColor(`${styleSelect.category}`);
                } else {
                    setCollarAccent(`${styleSelect.category}`);
                }
                break;
            case "Sleeve":
                setSleeve(styleSelect.category.toLowerCase())
                break;
            case "Cuffs":
                setSleeve("long")
                if (pov === "front") setPov("back")
                setCuffs(styleSelect.category)
                break;
            case "Customize Cuffs":
                if (styleSelect.type === "color") {
                    setCuffsColor(`${styleSelect.category}`)
                } else {
                    setCuffsAccent(`${styleSelect.category}`)
                }
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

    function getBordirPosition(defPosition, typePosition) {
        switch (typePosition) {
            case "Chest":
                if (defPosition === "top") {
                    return 195;
                } else if (defPosition === "right") {
                    return 160;
                }
            case "Medium":
                if (defPosition === "top") {
                    return 260;
                } else if (defPosition === "right") {
                    return 160;
                }
            case "Low":
                if (defPosition === "top") {
                    return 320;
                } else if (defPosition === "right") {
                    return 160;
                }
            case "Cuff":
                if (defPosition === "top") {
                    return 380;
                } else if (defPosition === "right") {
                    return 105;
                }

            default:
                break;
        }
        // chest
        // top: 195,
        // right: 160,
        // medium
        // top: 260,
        // right: 160,
        // low
        // top: 320,
        // right: 160,
        // cuffs
        // top: 380,
        // right: 108,
    }

    // function removeFirstWord(text) {
    //     const words = text.split(' ');
    //     if (words.length > 1) {
    //         return words.slice(1).join(' ');
    //     } else {
    //         return '';
    //     }
    // }

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
                        {/* pant */}
                        <div style={{ zIndex: 3, position: 'absolute' }}>
                            <Image
                                width={350} // 200 | 350 | 400 | 500 | 1080
                                height={953} // 544 | 953 | 1089 | 1361 | 2940
                                src={`/img/custom/model_${pov}_pant.png`}
                                alt="laxmi" />
                        </div>
                        {/* body */}
                        <div style={{ zIndex: 4, position: 'absolute' }}>
                            <Image
                                width={350} // 200 | 350 | 400 | 500 | 1080
                                height={953} // 544 | 953 | 1089 | 1361 | 2940
                                src={`/img/custom/${category}/${fabricSelect.title ?? "C-Blue"}/${pov}/${placket}/body/${bottomSecondary === "Untucked" ? bottom : bottomSecondary}.png`}
                                alt="laxmi" />
                        </div>
                        {/* collar */}
                        <div style={{ zIndex: 5, position: 'absolute' }}>
                            <Image
                                width={350} // 200 | 350 | 400 | 500 | 1080
                                height={953} // 544 | 953 | 1089 | 1361 | 2940
                                src={`/img/custom/${category}/${fabricSelect.title ?? "C-Blue"}/${pov}/${placket}/collar/${collar}.png`}
                                alt="laxmi" />
                        </div>
                        {/* accent collar */}
                        {
                            collarAccent !== "Default" && collarAccent !== "Inner" && collarColor && (
                                <div style={{ zIndex: 6, position: 'absolute' }}>
                                    <Image
                                        width={350} // 200 | 350 | 400 | 500 | 1080
                                        height={953} // 544 | 953 | 1089 | 1361 | 2940
                                        src={`/img/custom/${category}/accent/${pov}/collar/${collarAccent.replace("All", "Outer")} ${collar} ${collarColor}.png`}
                                        alt="laxmi" />
                                </div>
                            )
                        }
                        {/* sleeve */}
                        <div style={{ zIndex: 7, position: 'absolute' }}>
                            <Image
                                width={350} // 200 | 350 | 400 | 500 | 1080
                                height={953} // 544 | 953 | 1089 | 1361 | 2940
                                src={`/img/custom/${category}/${fabricSelect.title ?? "C-Blue"}/${pov}/${placket}/sleeve/${sleeve}.png`}
                                alt="laxmi" />
                        </div>
                        {/* accent cuffs */}
                        {
                            sleeve === "long" && cuffsAccent !== "Default" && cuffsAccent !== "Inner" && cuffsColor && (
                                <div style={{ zIndex: 8, position: 'absolute' }}>
                                    <Image
                                        width={350} // 200 | 350 | 400 | 500 | 1080
                                        height={953} // 544 | 953 | 1089 | 1361 | 2940
                                        src={`/img/custom/${category}/accent/${pov}/cuffs/${cuffsColor}.png`}
                                        alt="laxmi" />
                                </div>
                            )
                        }
                        {/* pocket */}
                        <div style={{ zIndex: 9, position: 'absolute' }}>
                            <Image
                                width={350} // 200 | 350 | 400 | 500 | 1080
                                height={953} // 544 | 953 | 1089 | 1361 | 2940
                                src={`/img/custom/${category}/${fabricSelect.title ?? "C-Blue"}/${pov}/${placket}/pocket/${pocket}.png`}
                                alt="laxmi" />
                        </div>
                        <div style={{
                            width: 350, // 200 | 350 | 400 | 500 | 1080
                            height: 953, // 544 | 953 | 1089 | 1361 | 2940
                            zIndex: 10, position: 'absolute',
                            // backgroundColor: 'red',
                        }}>
                            <label style={{
                                position: 'absolute',
                                fontFamily: bordirs?.font ?? "Arial",
                                fontSize: 6,
                                top: getBordirPosition('top', bordirs?.position),
                                right: getBordirPosition('right', bordirs?.position),
                                color: bordirs?.color,
                            }}>{bordirs?.name}</label>
                        </div>
                        {/* no model */}
                        <div style={{ zIndex: 11, position: 'relative' }}>
                            <Image
                                width={350} // 200 | 350 | 400 | 500 | 1080
                                height={953} // 544 | 953 | 1089 | 1361 | 2940
                                src={`/img/custom/front_no_model.png`}
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
                        {/* pant */}
                        <div style={{ zIndex: 3, position: 'absolute' }}>
                            <Image
                                width={350} // 200 | 350 | 400 | 500 | 1080
                                height={953} // 544 | 953 | 1089 | 1361 | 2940
                                src={`/img/custom/model_${pov}_pant.png`}
                                alt="laxmi" />
                        </div>
                        {/* body */}
                        <div style={{ zIndex: 4, position: 'absolute' }}>
                            <Image
                                width={350} // 200 | 350 | 400 | 500 | 1080
                                height={953} // 544 | 953 | 1089 | 1361 | 2940
                                src={`/img/custom/${category}/${fabricSelect.title ?? "C-Blue"}/${pov}/body/${bottomSecondary === "Untucked" ? bottom : bottomSecondary}.png`}
                                alt="laxmi" />
                        </div>
                        {/* collar */}
                        <div style={{ zIndex: 5, position: 'absolute' }}>
                            <Image
                                width={350} // 200 | 350 | 400 | 500 | 1080
                                height={953} // 544 | 953 | 1089 | 1361 | 2940
                                src={`/img/custom/${category}/${fabricSelect.title ?? "C-Blue"}/${pov}/collar/collar.png`}
                                alt="laxmi" />
                        </div>
                        {/* accent collar */}
                        {
                            (collarAccent === "Outer" || collarAccent === "All") && collarAccent !== "Default" && collarColor && (
                                <div style={{ zIndex: 6, position: 'absolute' }}>
                                    <Image
                                        width={350} // 200 | 350 | 400 | 500 | 1080
                                        height={953} // 544 | 953 | 1089 | 1361 | 2940
                                        src={`/img/custom/${category}/accent/${pov}/collar/${collarColor}.png`}
                                        alt="laxmi" />
                                </div>
                            )
                        }
                        {/* sleeve */}
                        {
                            sleeve !== "long" && (
                                <div style={{ zIndex: 7, position: 'absolute' }}>
                                    <Image
                                        width={350} // 200 | 350 | 400 | 500 | 1080
                                        height={953} // 544 | 953 | 1089 | 1361 | 2940
                                        src={`/img/custom/${category}/${fabricSelect.title ?? "C-Blue"}/${pov}/sleeve/${sleeve}.png`}
                                        alt="laxmi" />
                                </div>
                            )
                        }
                        {/* cuffs */}
                        {
                            sleeve === "long" && (
                                <div style={{ zIndex: 8, position: 'absolute' }}>
                                    <Image
                                        width={350} // 200 | 350 | 400 | 500 | 1080
                                        height={953} // 544 | 953 | 1089 | 1361 | 2940
                                        src={`/img/custom/${category}/${fabricSelect.title ?? "C-Blue"}/${pov}/cuffs/${cuffs}.png`}
                                        alt="laxmi" />
                                </div>
                            )
                        }
                        {/* accent cuffs */}
                        {
                            sleeve === "long" && cuffsAccent !== "Default" && cuffsColor && cuffsAccent !== "Inner" && (
                                <div style={{ zIndex: 9, position: 'absolute' }}>
                                    <Image
                                        width={350} // 200 | 350 | 400 | 500 | 1080
                                        height={953} // 544 | 953 | 1089 | 1361 | 2940
                                        src={`/img/custom/${category}/accent/${pov}/cuffs/${cuffs} ${cuffsColor}.png`}
                                        alt="laxmi" />
                                </div>

                            )
                        }
                        {/* no model */}
                        <div style={{ zIndex: 10, position: 'relative' }}>
                            <Image
                                width={350} // 200 | 350 | 400 | 500 | 1080
                                height={953} // 544 | 953 | 1089 | 1361 | 2940
                                src={`/img/custom/back_no_model.png`}
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
                                src={`/img/custom/${category}/${fabricSelect.title ?? "C-Blue"}/${pov}/${placket}/body/Regular.png`}
                                alt="laxmi" />
                        </div>
                        {/* collar */}
                        <div style={{ zIndex: 4, position: 'absolute' }}>
                            <Image
                                width={350} // 200 | 350 | 400 | 500 | 1080
                                height={512} // 292 | 512 | 585 | 731 | 1579
                                src={`/img/custom/${category}/${fabricSelect.title ?? "C-Blue"}/${pov}/${placket}/collar/${collar}.png`}
                                alt="laxmi" />
                        </div>
                        {/* accent collar */}
                        {
                            collarAccent !== "Default" && collarColor && (
                                <div style={{ zIndex: 5, position: 'absolute' }}>
                                    <Image
                                        width={350} // 200 | 350 | 400 | 500 | 1080
                                        height={512} // 544 | 953 | 1089 | 1361 | 2940
                                        src={`/img/custom/${category}/accent/${pov}/collar/${collarAccent} ${collar} ${collarColor}.png`}
                                        alt="laxmi" />
                                </div>
                            )
                        }
                        {/* sleeve */}
                        {
                            sleeve !== "long" && (
                                <div style={{ zIndex: 6, position: 'absolute' }}>
                                    <Image
                                        width={350} // 200 | 350 | 400 | 500 | 1080
                                        height={512} // 292 | 512 | 585 | 731 | 1579
                                        src={`/img/custom/${category}/${fabricSelect.title ?? "C-Blue"}/${pov}/${placket}/sleeve/${sleeve}.png`}
                                        alt="laxmi" />
                                </div>
                            )
                        }
                        {/* cuffs */}
                        {
                            sleeve === "long" && (
                                <div style={{ zIndex: 7, position: 'absolute' }}>
                                    <Image
                                        width={350} // 200 | 350 | 400 | 500 | 1080
                                        height={512} // 292 | 512 | 585 | 731 | 1579
                                        src={`/img/custom/${category}/${fabricSelect.title ?? "C-Blue"}/${pov}/cuffs/${cuffs}.png`}
                                        alt="laxmi" />
                                </div>
                            )
                        }
                        {/* accent cuffs */}
                        {
                            sleeve === "long" && cuffsAccent !== "Default" && cuffsColor && cuffsAccent !== "Inner" && (
                                <div style={{ zIndex: 8, position: 'absolute' }}>
                                    <Image
                                        width={350} // 200 | 350 | 400 | 500 | 1080
                                        height={512} // 292 | 512 | 585 | 731 | 1579
                                        src={`/img/custom/${category}/accent/${pov}/cuffs/${cuffs} ${cuffsColor}.png`}
                                        alt="laxmi" />
                                </div>
                            )
                        }

                        {/* pocket */}
                        <div style={{ zIndex: 9, position: 'absolute' }}>
                            <Image
                                width={350} // 200 | 350 | 400 | 500 | 1080
                                height={512} // 292 | 512 | 585 | 731 | 1579
                                src={`/img/custom/${category}/${fabricSelect.title ?? "C-Blue"}/${pov}/${placket}/pocket/${pocket}.png`}
                                alt="laxmi" />
                        </div>
                        {
                            bordirs && bordirs.position && bordirs.position === "Chest" && (
                                <div style={{
                                    width: 350, // 200 | 350 | 400 | 500 | 1080
                                    height: 512, // 544 | 953 | 1089 | 1361 | 2940
                                    zIndex: 10, position: 'absolute',
                                    // backgroundColor: 'red',
                                }}>
                                    <label style={{
                                        position: 'absolute',
                                        fontFamily: bordirs?.font ?? "Arial",
                                        fontSize: 12,
                                        top: 340,
                                        right: 122,
                                        color: bordirs.color,
                                    }}>{bordirs.name}</label>
                                </div>
                            )
                        }
                        {/* no model */}
                        <div style={{ zIndex: 11, position: 'relative' }}>
                            <Image
                                width={350} // 200 | 350 | 400 | 500 | 1080
                                height={512} // 292 | 512 | 585 | 731 | 1579
                                src={`/img/custom/folded_no_model.png`}
                                alt="laxmi" />
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-2 d-flex align-items-center' style={{ height: "80vh", zIndex: 12 }}>
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