import Image from 'next/image'
import { ChevronLeft, ChevronRight } from '../../elements/icon'
import { useEffect, useState } from 'react';
import axios from 'axios';
import useHookCustom from './hookCustom';

const ModelContainer = ({ fabricSelect,isLoading, isLoadingFabric, dataStyle }) => {

    const { pov, updatePov } = useHookCustom();

     // Array containing the possible values
    const povOptions = ['FRONT', 'BACK', 'FOLDED'];
    const duration= 1000;
    const interval = 300
    const [sleeveFlicker, setSleeveFlicker] = useState(false);
    const [collarFlicker, setCollarFlicker] = useState(false);
    const [cuffsFlicker, setCuffsFlicker] = useState(false);
    const [placketFlicker, setPlacketFlicker] = useState(false);
    const [pocketFlicker, setPocketFlicker] = useState(false);
    const [pleatsFlicker, setPleatsFlicker] = useState(false);

    
      useEffect(() => {
        updatePov(povOptions[0], fabricSelect);
      },[])
    

    const handlePrevPovChange = () => {
        const currentIndex = povOptions.indexOf(pov);
        const prevIndex = (currentIndex - 1 + povOptions.length) % povOptions.length; // Fix for negative index
        updatePov(povOptions[prevIndex], fabricSelect)
    };

    // Function to handle next POV change (cyclic forward)
    const handleNextPovChange = () => {
        const currentIndex = povOptions.indexOf(pov);
        const nextIndex = (currentIndex + 1) % povOptions.length;
        updatePov(povOptions[nextIndex], fabricSelect)
        console.log(povOptions[nextIndex])
    };

    return (
        <>
            <div style={{
                width: "100%",
                height: "100vh",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                // backgroundColor: "red"
            }}>
                <div style={{ height: "80%", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                    <div style={{ border: "2px solid black", borderRadius: "24px", padding: "8px 12px", cursor: "pointer" }} onClick={handlePrevPovChange}>
                        &#8678;
                    </div>
                </div>
                {/* front */}
                <div style={{ display: pov === "FRONT" ? 'flex' : 'none', width: "100%", position: "relative", justifyContent: "center" }}>
                    <div style={{ zIndex: 2, position: 'absolute' }}>
                        <Image
                            width={350} // 200 | 350 | 400 | 500 | 1080
                            height={953} // 544 | 953 | 1089 | 1361 | 2940
                            src={`/img/custom/model_${pov}.svg`}
                            alt="laxmi" />
                    </div>
                    <div style={{ zIndex: 3, position: 'absolute' }}>
                        <Image
                            width={350} // 200 | 350 | 400 | 500 | 1080
                            height={953} // 544 | 953 | 1089 | 1361 | 2940
                            src={`/img/custom/model_${pov}_pant.svg`}
                            alt="laxmi" />
                    </div>
                    <div style={{ zIndex: 4, position: 'absolute' }}>
                        {
                            dataStyle.bottom.image !== "" && dataStyle.bottom.image !== null ?
                                <img
                                    width={350} // 200 | 350 | 400 | 500 | 1080
                                    height={953} // 544 | 953 | 1089 | 1361 | 2940
                                    src={dataStyle.bottom.image}
                                    alt="laxmi" /> : <></>
                        }
                    </div>
                    <div style={{ zIndex: 5, position: 'absolute' }}>
                        {
                            dataStyle.collar.image !== "" && dataStyle.collar.image !== null ?
                                <img
                                    width={350} // 200 | 350 | 400 | 500 | 1080
                                    height={953} // 544 | 953 | 1089 | 1361 | 2940
                                    src={dataStyle.collar.image}
                                    alt="laxmi" /> : <></>
                        }
                    </div>
                    <div style={{ zIndex: 6, position: 'absolute' }}>
                        {
                            dataStyle.sleeve.image !== "" && dataStyle.sleeve.image !== null ?
                                <img
                                    width={350} // 200 | 350 | 400 | 500 | 1080
                                    height={953} // 544 | 953 | 1089 | 1361 | 2940
                                    src={dataStyle.sleeve.image}
                                    style={{opacity: sleeveFlicker ? 1 : 0.8}}
                                    alt="laxmi" /> : <></>
                        }
                    </div>
                    <div style={{ zIndex: 20, position: 'absolute' }}>
                        {
                            dataStyle.pocket.image !== "" && dataStyle.pocket.image !== null ?
                                <img
                                    width={350} // 200 | 350 | 400 | 500 | 1080
                                    height={953} // 544 | 953 | 1089 | 1361 | 2940
                                    src={dataStyle.pocket.image}
                                    alt="laxmi" /> : <></>
                        }
                    </div>
                    <div style={{ zIndex: 8, position: 'absolute' }}>
                        {
                            dataStyle.placket.image !== "" && dataStyle.placket.image !== null ?
                                <img
                                    width={350} // 200 | 350 | 400 | 500 | 1080
                                    height={953} // 544 | 953 | 1089 | 1361 | 2940
                                    src={dataStyle.placket.image}
                                    alt="laxmi" /> : <></>
                        }
                    </div>
                    {
                        isLoading ? <div style={{
                            width: "350px",
                            height: "953px",
                            // backgroundColor: "white",
                            // backgroundColor: "rgba(0,0,0,.3)",
                            paddingTop: "30vh",
                            zIndex: 100, position: "absolute",
                        }}><div className="loader"></div></div>
                            : <></>
                    }
                    {
                        isLoadingFabric ? <div style={{
                            width: "350px",
                            height: "953px",
                            backgroundColor: "white",
                            // backgroundColor: "rgba(0,0,0,.3)",
                            paddingTop: "30vh",
                            zIndex: 200, position: "absolute",
                        }}><div className="loader"></div></div>
                            : <></>
                    }
                </div>
                {/* {back} */}
                <div className='slide' style={{ display: pov === "BACK" ? 'block' : 'none', justifyContent: "center" ,width:'100%' }} >
                     <div className="img-container" style={{
                        position: 'relative',
                        zIndex: 1,
                        display: "flex",
                        justifyContent: "center"
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
                                src={`/img/custom/model_${pov}_pant.png`}
                                // src={`/img/custom/${category}/${fabricSelect?.title ?? "C-Blue"}/${pov}/body/${bottomSecondary === "Untucked" ? bottom : bottomSecondary}.png`}
                                alt="laxmi" />
                         </div>
                        {/* collar */}
                        <div style={{ zIndex: 5, position: 'absolute' }}>
                            {dataStyle.collar.image !== "" && dataStyle.collar.image !== null ? 
                             <Image
                                 width={350} // 200 | 350 | 400 | 500 | 1080
                                 height={953} // 544 | 953 | 1089 | 1361 | 2940
                                 src={dataStyle.collarBack.image}
                                // src={`/img/custom/${category}/${fabricSelect?.title ?? "C-Blue"}/${pov}/collar/collar.png`}
                                alt="laxmi" /> : <></>
                            }
                        </div>
                        {/* accent collar */}
                                <div style={{ zIndex: 6, position: 'absolute' }}>
                                    
                                    <Image
                                        width={350} // 200 | 350 | 400 | 500 | 1080
                                        height={953} // 544 | 953 | 1089 | 1361 | 2940
                                        src={`/img/custom/model_${pov}_pant.png`}
                                        // src={`/img/custom/${category}/accent/${pov}/collar/${collarColor}.png`}
                                        alt="laxmi" />
                                </div>
                        {/* sleeve */}
                                <div style={{ zIndex: 7, position: 'absolute' }}>
                                    {console.log(dataStyle)}
                                    {dataStyle.sleeve.image !== "" && dataStyle.sleeve.image !== null ?
                                    <Image
                                        width={350} // 200 | 350 | 400 | 500 | 1080
                                        height={953} // 544 | 953 | 1089 | 1361 | 2940
                                        src={dataStyle.sleeve.image}
                                        alt="laxmi" />
                                    : <></>}
                                </div>
                        
                        {/* cuffs */}
                       
                                <div style={{ zIndex: 8, position: 'absolute' }}>
                                    <Image
                                        width={350} // 200 | 350 | 400 | 500 | 1080
                                        height={953} // 544 | 953 | 1089 | 1361 | 2940
                                        src={`/img/custom/model_${pov}_pant.png`}
                                        // src={`/img/custom/${category}/${fabricSelect?.title ?? "C-Blue"}/${pov}/cuffs/${cuffs}.png`}
                                        alt="laxmi" />
                                </div>
                       
                        {/* pleats */}
                                <div style={{ zIndex: 9, position: 'absolute' }}>
                                    <Image
                                        width={350} // 200 | 350 | 400 | 500 | 1080
                                        height={953} // 544 | 953 | 1089 | 1361 | 2940
                                        src={dataStyle.pleats.image}
                                        alt="laxmi" />
                                </div>
                        
                        {/* accent cuffs */}
                                <div style={{ zIndex: 9, position: 'absolute' }}>
                                    {dataStyle.cuffs.image !== "" && dataStyle.cuffs.image !== null ?
                                    <Image
                                        width={350} // 200 | 350 | 400 | 500 | 1080
                                        height={953} // 544 | 953 | 1089 | 1361 | 2940
                                        src={dataStyle.cuffsBack.image}
                                        alt="laxmi" />
                                    : <></>}
                                </div>

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
                <div style={{ display: pov === "FOLDED" ? 'flex' : 'none', width: "100%", position: "relative", justifyContent: "center" }}>
                    <div style={{ zIndex: 2, position: 'absolute' }}>
                        {/* <Image
                            width={350} // 200 | 350 | 400 | 500 | 1080
                            height={953} // 544 | 953 | 1089 | 1361 | 2940
                            src={`/img/custom/model_${pov}.svg`}
                            alt="laxmi" /> */}
                    </div>
                    <div style={{ zIndex: 3, position: 'absolute' }}>
                        {/* <Image
                            width={350} // 200 | 350 | 400 | 500 | 1080
                            height={953} // 544 | 953 | 1089 | 1361 | 2940
                            src={`/img/custom/model_${pov}_pant.svg`}
                            alt="laxmi" /> */}
                    </div>
                    <div style={{ zIndex: 4, position: 'absolute' }}>
                        {
                            dataStyle.bottom.image !== "" && dataStyle.bottom.image !== null ?
                                <img
                                    width={350} // 200 | 350 | 400 | 500 | 1080
                                    height={953} // 544 | 953 | 1089 | 1361 | 2940
                                    src={dataStyle.bottom.image}
                                    alt="laxmi" /> : <></>
                        }
                    </div>
                    <div style={{ zIndex: 5, position: 'absolute' }}>
                        {
                            dataStyle.collarFold.image !== "" && dataStyle.collarFold.image !== null ?
                                <img
                                    width={350} // 200 | 350 | 400 | 500 | 1080
                                    height={953} // 544 | 953 | 1089 | 1361 | 2940
                                    src={dataStyle.collarFold.image}
                                    alt="laxmi" /> : <></>
                        }
                    </div>
                    {/* <div style={{ zIndex: 6, position: 'absolute' }}>
                        {
                            dataStyle.sleeve.image !== "" && dataStyle.sleeve.image !== null ?
                                <img
                                    width={350} // 200 | 350 | 400 | 500 | 1080 
                                    height={953} // 544 | 953 | 1089 | 1361 | 2940
                                    src={dataStyle.sleeve.image}
                                    alt="laxmi" /> : <></>
                    }
                    </div> */}
                    <div style={{ zIndex: 99, position: 'absolute' }}>
                        {
                            dataStyle.cuffsFold.image !== "" && dataStyle.cuffsFold.image !== null ?
                                <img
                                    width={350} // 200 | 350 | 400 | 500 | 1080
                                    height={953} // 544 | 953 | 1089 | 1361 | 2940
                                    src={dataStyle.cuffsFold.image}
                                    alt="laxmi" /> : <></>
                        }
                    </div>
                    <div style={{ zIndex: 13, position: 'absolute' }}>
                        {
                            dataStyle.pocketFold.image !== "" && dataStyle.pocketFold.image !== null ?
                                <img
                                    width={350} // 200 | 350 | 400 | 500 | 1080
                                    height={953} // 544 | 953 | 1089 | 1361 | 2940
                                    src={dataStyle.pocketFold.image}
                                    alt="laxmi"  style={{marginTop:'-120px'}}/> : <></>
                         }
                    </div>
                    
                    <div style={{ zIndex: 8, position: 'absolute' }}>
                        {
                            dataStyle.placketFold.image !== "" && dataStyle.placketFold.image !== null ?
                                <img
                                    width={350} // 200 | 350 | 400 | 500 | 1080
                                    height={953} // 544 | 953 | 1089 | 1361 | 2940
                                    src={dataStyle.placketFold.image}
                                    alt="laxmi" /> : <></>
                        }
                    </div>
                    {
                        isLoading ? <div style={{
                            width: "350px",
                            height: "953px",
                            // backgroundColor: "white",
                            // backgroundColor: "rgba(0,0,0,.3)",
                            paddingTop: "30vh",
                            zIndex: 100, position: "absolute",
                        }}><div className="loader"></div></div>
                            : <></>
                    }
                    {
                        isLoadingFabric ? <div style={{
                            width: "350px",
                            height: "953px",
                            backgroundColor: "white",
                            // backgroundColor: "rgba(0,0,0,.3)",
                            paddingTop: "30vh",
                            zIndex: 200, position: "absolute",
                        }}><div className="loader"></div></div>
                            : <></>
                    }
                </div>

                <div style={{ height: "80%", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                    <div style={{ border: "2px solid black", borderRadius: "24px", padding: "8px 12px", cursor: "pointer" }} onClick={handleNextPovChange}>
                        &#8680;
                    </div>
                </div>

            </div>
        </>
    )

    // return (
    //     <div className="model-container row">
    //         {/* front */}
    //         <div className='col-2 d-flex align-items-center' style={{ height: "80%" }}>
    //             <div onClick={() => {
    //                 console.log(pov);
    //                 switch (pov) {
    //                     case "front":
    //                         setPov("folded")
    //                         break;
    //                     case "folded":
    //                         setPov("back")
    //                         break;
    //                     case "back":
    //                         setPov("front")
    //                         break;
    //                     default:
    //                         break;
    //                 }
    //             }}>
    //                 <ChevronLeft width={20} height={20} />
    //             </div>
    //         </div>
    //         <div className="col-8">
    //             {/* front */}
    //             <div className='slide' style={{ display: pov === "front" ? 'block' : 'none' }}>
    //                 <div className="img-container" style={{
    //                     position: 'relative',
    //                     zIndex: 1,
    //                 }}>
    //                     {/* model */}
    //                     <div style={{ zIndex: 2, position: 'absolute' }}>
    //                         <Image
    //                             width={350} // 200 | 350 | 400 | 500 | 1080
    //                             height={953} // 544 | 953 | 1089 | 1361 | 2940
    //                             src={`/img/custom/model_${pov}.png`}
    //                             alt="laxmi" />
    //                     </div>
    //                     {/* pant */}
    //                     <div style={{ zIndex: 3, position: 'absolute' }}>
    //                         <Image
    //                             width={350} // 200 | 350 | 400 | 500 | 1080
    //                             height={953} // 544 | 953 | 1089 | 1361 | 2940
    //                             src={`/img/custom/model_${pov}_pant.png`}
    //                             alt="laxmi" />
    //                     </div>
    //                     {/* body */}
    //                     <div style={{ zIndex: 4, position: 'absolute' }}>
    //                         <Image
    //                             width={350} // 200 | 350 | 400 | 500 | 1080
    //                             height={953} // 544 | 953 | 1089 | 1361 | 2940
    //                             src={`/img/custom/${category}/${fabricSelect?.title ?? "C-Blue"}/${pov}/${placket}/body/${bottomSecondary === "Untucked" ? bottom : bottomSecondary}.png`}
    //                             alt="laxmi" />
    //                     </div>
    //                     {/* collar */}
    //                     <div style={{ zIndex: 5, position: 'absolute' }}>
    //                         <Image
    //                             width={350} // 200 | 350 | 400 | 500 | 1080
    //                             height={953} // 544 | 953 | 1089 | 1361 | 2940
    //                             src={`/img/custom/${category}/${fabricSelect?.title ?? "C-Blue"}/${pov}/${placket}/collar/${collar}.png`}
    //                             alt="laxmi" />
    //                     </div>
    //                     {/* accent collar */}
    //                     {
    //                         collarAccent !== "Default" && collarAccent !== "Inner" && collarColor && (
    //                             <div style={{ zIndex: 6, position: 'absolute' }}>
    //                                 <Image
    //                                     width={350} // 200 | 350 | 400 | 500 | 1080
    //                                     height={953} // 544 | 953 | 1089 | 1361 | 2940
    //                                     src={`/img/custom/${category}/accent/${pov}/collar/${collarAccent.replace("All", "Outer")} ${collar} ${collarColor}.png`}
    //                                     alt="laxmi" />
    //                             </div>
    //                         )
    //                     }
    //                     {/* sleeve */}
    //                     <div style={{ zIndex: 7, position: 'absolute' }}>
    //                         <Image
    //                             width={350} // 200 | 350 | 400 | 500 | 1080
    //                             height={953} // 544 | 953 | 1089 | 1361 | 2940
    //                             src={`/img/custom/${category}/${fabricSelect?.title ?? "C-Blue"}/${pov}/${placket}/sleeve/${sleeve}.png`}
    //                             alt="laxmi" />
    //                     </div>
    //                     {/* accent cuffs */}
    //                     {
    //                         sleeve === "long" && cuffsAccent !== "Default" && cuffsAccent !== "Inner" && cuffsColor && (
    //                             <div style={{ zIndex: 8, position: 'absolute' }}>
    //                                 <Image
    //                                     width={350} // 200 | 350 | 400 | 500 | 1080
    //                                     height={953} // 544 | 953 | 1089 | 1361 | 2940
    //                                     src={`/img/custom/${category}/accent/${pov}/cuffs/${cuffsColor}.png`}
    //                                     alt="laxmi" />
    //                             </div>
    //                         )
    //                     }
    //                     {/* pocket */}
    //                     <div style={{ zIndex: 9, position: 'absolute' }}>
    //                         <Image
    //                             width={350} // 200 | 350 | 400 | 500 | 1080
    //                             height={953} // 544 | 953 | 1089 | 1361 | 2940
    //                             src={`/img/custom/${category}/${fabricSelect?.title ?? "C-Blue"}/${pov}/${placket}/pocket/${pocket}.png`}
    //                             alt="laxmi" />
    //                     </div>
    //                     <div style={{
    //                         width: 350, // 200 | 350 | 400 | 500 | 1080
    //                         height: 953, // 544 | 953 | 1089 | 1361 | 2940
    //                         zIndex: 10, position: 'absolute',
    //                         // backgroundColor: 'red',
    //                     }}>
    //                         <label style={{
    //                             position: 'absolute',
    //                             fontFamily: bordirs?.font ?? "Arial",
    //                             fontSize: 6,
    //                             top: getBordirPosition('top', bordirs?.position),
    //                             right: getBordirPosition('right', bordirs?.position),
    //                             color: bordirs?.color,
    //                         }}>{bordirs?.name}</label>
    //                     </div>
    //                     {/* no model */}
    //                     <div style={{ zIndex: 11, position: 'relative' }}>
    //                         <Image
    //                             width={350} // 200 | 350 | 400 | 500 | 1080
    //                             height={953} // 544 | 953 | 1089 | 1361 | 2940
    //                             src={`/img/custom/front_no_model.png`}
    //                             alt="laxmi" />
    //                     </div>

    //                 </div>
    //             </div>
    //             {/* back */}
    //             <div className='slide' style={{ display: pov === "back" ? 'block' : 'none' }}>
    //                 <div className="img-container" style={{
    //                     position: 'relative',
    //                     zIndex: 1,
    //                 }}>
    //                     {/* model */}
    //                     <div style={{ zIndex: 2, position: 'absolute' }}>
    //                         <Image
    //                             width={350} // 200 | 350 | 400 | 500 | 1080
    //                             height={953} // 544 | 953 | 1089 | 1361 | 2940
    //                             src={`/img/custom/model_${pov}.png`}
    //                             alt="laxmi" />
    //                     </div>
    //                     {/* pant */}
    //                     <div style={{ zIndex: 3, position: 'absolute' }}>
    //                         <Image
    //                             width={350} // 200 | 350 | 400 | 500 | 1080
    //                             height={953} // 544 | 953 | 1089 | 1361 | 2940
    //                             src={`/img/custom/model_${pov}_pant.png`}
    //                             alt="laxmi" />
    //                     </div>
    //                     {/* body */}
    //                     <div style={{ zIndex: 4, position: 'absolute' }}>
    //                         <Image
    //                             width={350} // 200 | 350 | 400 | 500 | 1080
    //                             height={953} // 544 | 953 | 1089 | 1361 | 2940
    //                             src={`/img/custom/${category}/${fabricSelect?.title ?? "C-Blue"}/${pov}/body/${bottomSecondary === "Untucked" ? bottom : bottomSecondary}.png`}
    //                             alt="laxmi" />
    //                     </div>
    //                     {/* collar */}
    //                     <div style={{ zIndex: 5, position: 'absolute' }}>
    //                         <Image
    //                             width={350} // 200 | 350 | 400 | 500 | 1080
    //                             height={953} // 544 | 953 | 1089 | 1361 | 2940
    //                             src={`/img/custom/${category}/${fabricSelect?.title ?? "C-Blue"}/${pov}/collar/collar.png`}
    //                             alt="laxmi" />
    //                     </div>
    //                     {/* accent collar */}
    //                     {
    //                         (collarAccent === "Outer" || collarAccent === "All") && collarAccent !== "Default" && collarColor && (
    //                             <div style={{ zIndex: 6, position: 'absolute' }}>
    //                                 <Image
    //                                     width={350} // 200 | 350 | 400 | 500 | 1080
    //                                     height={953} // 544 | 953 | 1089 | 1361 | 2940
    //                                     src={`/img/custom/${category}/accent/${pov}/collar/${collarColor}.png`}
    //                                     alt="laxmi" />
    //                             </div>
    //                         )
    //                     }
    //                     {/* sleeve */}
    //                     {
    //                         sleeve !== "long" && (
    //                             <div style={{ zIndex: 7, position: 'absolute' }}>
    //                                 <Image
    //                                     width={350} // 200 | 350 | 400 | 500 | 1080
    //                                     height={953} // 544 | 953 | 1089 | 1361 | 2940
    //                                     src={`/img/custom/${category}/${fabricSelect?.title ?? "C-Blue"}/${pov}/sleeve/${sleeve}.png`}
    //                                     alt="laxmi" />
    //                             </div>
    //                         )
    //                     }
    //                     {/* cuffs */}
    //                     {
    //                         sleeve === "long" && (
    //                             <div style={{ zIndex: 8, position: 'absolute' }}>
    //                                 <Image
    //                                     width={350} // 200 | 350 | 400 | 500 | 1080
    //                                     height={953} // 544 | 953 | 1089 | 1361 | 2940
    //                                     src={`/img/custom/${category}/${fabricSelect?.title ?? "C-Blue"}/${pov}/cuffs/${cuffs}.png`}
    //                                     alt="laxmi" />
    //                             </div>
    //                         )
    //                     }
    //                     {/* accent cuffs */}
    //                     {
    //                         sleeve === "long" && cuffsAccent !== "Default" && cuffsColor && cuffsAccent !== "Inner" && (
    //                             <div style={{ zIndex: 9, position: 'absolute' }}>
    //                                 <Image
    //                                     width={350} // 200 | 350 | 400 | 500 | 1080
    //                                     height={953} // 544 | 953 | 1089 | 1361 | 2940
    //                                     src={`/img/custom/${category}/accent/${pov}/cuffs/${cuffs} ${cuffsColor}.png`}
    //                                     alt="laxmi" />
    //                             </div>

    //                         )
    //                     }
    //                     {/* no model */}
    //                     <div style={{ zIndex: 10, position: 'relative' }}>
    //                         <Image
    //                             width={350} // 200 | 350 | 400 | 500 | 1080
    //                             height={953} // 544 | 953 | 1089 | 1361 | 2940
    //                             src={`/img/custom/back_no_model.png`}
    //                             alt="laxmi" />
    //                     </div>
    //                 </div>
    //             </div>
    //             {/* folded */}
    //             <div className='slide' style={{ display: pov === "folded" ? 'block' : 'none' }}>
    //                 <div className="img-container" style={{
    //                     position: 'relative',
    //                     zIndex: 1,
    //                 }}>
    //                     {/* model */}
    //                     <div style={{ zIndex: 2, position: 'absolute' }}>
    //                         <Image
    //                             width={350} // 200 | 350 | 400 | 500 | 1080
    //                             height={512} // 292 | 512 | 585 | 731 | 1579
    //                             src={`/img/custom/model_${pov}.png`}
    //                             alt="laxmi" />
    //                     </div>
    //                     {/* body */}
    //                     <div style={{ zIndex: 3, position: 'absolute' }}>
    //                         <Image
    //                             width={350} // 200 | 350 | 400 | 500 | 1080
    //                             height={512} // 292 | 512 | 585 | 731 | 1579
    //                             src={`/img/custom/${category}/${fabricSelect?.title ?? "C-Blue"}/${pov}/${placket}/body/Regular.png`}
    //                             alt="laxmi" />
    //                     </div>
    //                     {/* collar */}
    //                     <div style={{ zIndex: 4, position: 'absolute' }}>
    //                         <Image
    //                             width={350} // 200 | 350 | 400 | 500 | 1080
    //                             height={512} // 292 | 512 | 585 | 731 | 1579
    //                             src={`/img/custom/${category}/${fabricSelect?.title ?? "C-Blue"}/${pov}/${placket}/collar/${collar}.png`}
    //                             alt="laxmi" />
    //                     </div>
    //                     {/* accent collar */}
    //                     {
    //                         collarAccent !== "Default" && collarColor && (
    //                             <div style={{ zIndex: 5, position: 'absolute' }}>
    //                                 <Image
    //                                     width={350} // 200 | 350 | 400 | 500 | 1080
    //                                     height={512} // 544 | 953 | 1089 | 1361 | 2940
    //                                     src={`/img/custom/${category}/accent/${pov}/collar/${collarAccent} ${collar} ${collarColor}.png`}
    //                                     alt="laxmi" />
    //                             </div>
    //                         )
    //                     }
    //                     {/* sleeve */}
    //                     {
    //                         sleeve !== "long" && (
    //                             <div style={{ zIndex: 6, position: 'absolute' }}>
    //                                 <Image
    //                                     width={350} // 200 | 350 | 400 | 500 | 1080
    //                                     height={512} // 292 | 512 | 585 | 731 | 1579
    //                                     src={`/img/custom/${category}/${fabricSelect?.title ?? "C-Blue"}/${pov}/${placket}/sleeve/${sleeve}.png`}
    //                                     alt="laxmi" />
    //                             </div>
    //                         )
    //                     }
    //                     {/* cuffs */}
    //                     {
    //                         sleeve === "long" && (
    //                             <div style={{ zIndex: 7, position: 'absolute' }}>
    //                                 <Image
    //                                     width={350} // 200 | 350 | 400 | 500 | 1080
    //                                     height={512} // 292 | 512 | 585 | 731 | 1579
    //                                     src={`/img/custom/${category}/${fabricSelect?.title ?? "C-Blue"}/${pov}/cuffs/${cuffs}.png`}
    //                                     alt="laxmi" />
    //                             </div>
    //                         )
    //                     }
    //                     {/* accent cuffs */}
    //                     {
    //                         sleeve === "long" && cuffsAccent !== "Default" && cuffsColor && cuffsAccent !== "Inner" && (
    //                             <div style={{ zIndex: 8, position: 'absolute' }}>
    //                                 <Image
    //                                     width={350} // 200 | 350 | 400 | 500 | 1080
    //                                     height={512} // 292 | 512 | 585 | 731 | 1579
    //                                     src={`/img/custom/${category}/accent/${pov}/cuffs/${cuffs} ${cuffsColor}.png`}
    //                                     alt="laxmi" />
    //                             </div>
    //                         )
    //                     }

    //                     {/* pocket */}
    //                     <div style={{ zIndex: 9, position: 'absolute' }}>
    //                         <Image
    //                             width={350} // 200 | 350 | 400 | 500 | 1080
    //                             height={512} // 292 | 512 | 585 | 731 | 1579
    //                             src={`/img/custom/${category}/${fabricSelect?.title ?? "C-Blue"}/${pov}/${placket}/pocket/${pocket}.png`}
    //                             alt="laxmi" />
    //                     </div>
    //                     {
    //                         bordirs && bordirs.position && bordirs.position === "Chest" && (
    //                             <div style={{
    //                                 width: 350, // 200 | 350 | 400 | 500 | 1080
    //                                 height: 512, // 544 | 953 | 1089 | 1361 | 2940
    //                                 zIndex: 10, position: 'absolute',
    //                                 // backgroundColor: 'red',
    //                             }}>
    //                                 <label style={{
    //                                     position: 'absolute',
    //                                     fontFamily: bordirs?.font ?? "Arial",
    //                                     fontSize: 12,
    //                                     top: 340,
    //                                     right: 122,
    //                                     color: bordirs.color,
    //                                 }}>{bordirs.name}</label>
    //                             </div>
    //                         )
    //                     }
    //                     {/* no model */}
    //                     <div style={{ zIndex: 11, position: 'relative' }}>
    //                         <Image
    //                             width={350} // 200 | 350 | 400 | 500 | 1080
    //                             height={512} // 292 | 512 | 585 | 731 | 1579
    //                             src={`/img/custom/folded_no_model.png`}
    //                             alt="laxmi" />
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //         <div className='col-2 d-flex align-items-center' style={{ height: "80%", zIndex: 12 }}>
    //             <div onClick={() => {
    //                 switch (pov) {
    //                     case "front":
    //                         setPov("back")
    //                         break;
    //                     case "back":
    //                         setPov("folded")
    //                         break;
    //                     case "folded":
    //                         setPov("front")
    //                         break;
    //                     default:
    //                         break;
    //                 }
    //             }}>
    //                 <ChevronRight width={20} height={20} />
    //             </div>
    //         </div>


    //     </div >
    // )
}

export default ModelContainer