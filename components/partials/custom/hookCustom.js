import axios from "axios";
// import frenchPlacket from "../../../public/img/placket/Placket French.svg";

import { useRouter } from "next/router";
import { useCallback, useEffect, useState,useRef } from "react"
import {
    BlazerListStyle,
    ShirtListStyle,
    TrouserListStyle,
    VestListStyle,
    BatikListStyle
} from './sidebar/dataSidebar'

const initStyle = {
    "bottom": {
        "image": "",
        "name": "Square"
    },
    "collar": {
        "image": "",
        "name": "Stand Up"
    },
    "collarBack": {
        "image": "/img/pleats/red/Collar Back.svg",
        "name": "Stand Up"
    },
    "sleeve": {
        "image": "",
        "name": "Short"
    },
    "cuffs": {
        "image": "",
        "name": "One Button Cut"
    },
    "cuffsBack": {
        "image": "/img/sleeve_back/Cuffs Double Rounded French Back.svg",
        "name": "Square French"
    },
    "pocket": {
        "image": "",
        "name": "With Flap"
    },
    "placket": {
        "image": "",
        "name": "Standard Body Untucked With Square"
    },
    "pleats": {
        "image": "/img/pleats/red/Pleats Box Tucked.svg",
        "name": "Pleats"
    },
    "collarFold":{
        "image":""
    },
    "cuffsFold":{
        "image":""
    },
    "pocketFold":{
        "image":""
        // "image":"/img/pleats/red/Chest Pocket Folded.svg"
    },
    "placketFold":{
        "image":"/img/folded/red/pleats/Placket Standard Body Folded.svg"
    }
}

const useHookCustom = () => {
    const router = useRouter()
    const [fabricList, setFabricList] = useState([])
    const [fabricSelect, setFabricSelect] = useState(null)
    const [listStyle, setListStyle] = useState([])
    const [openStyle, setOpenStyle] = useState(false)
    const [styleSelect, setStyleSelect] = useState(null)
    const [dataStyle, setDataStyle] = useState(initStyle)
    const [isLoading, setIsLoading] = useState(false)
    const [isLoadingFabric, setIsLoadingFabric] = useState(false)
    const { category } = router.query
    const [pov, setPov] = useState("FRONT")
    const fabricSelectRef = useRef(null)
    var fabric;

    
    useEffect(() => {
        if (fabricSelect) {
            getCustomStyle()
            fabricSelectRef.current = fabricSelect
        }
    }, [fabricSelect])

    useEffect(() => {
        setIsLoadingFabric(true)
        console.log("ini new pov", pov);
        if (!fabricSelect && fabricSelectRef.current) {
            setFabricSelect(fabricSelectRef.current)
        } else {
            getCustomStyle()
        }
    }, [pov]);

    const updatePov = (newPov, newFabric) => {
        setPov(newPov);
        setFabricSelect(newFabric)
      };

    useEffect(() => {
        getCustomStyle()
    }, [])

    useEffect(async () => {
        try {
            var response = await axios.get("/api/fabric/list");
            const { status, message } = response.data
            if (status) {
                const { data } = response.data
                setFabricList(data)
            } else {
                setFabricList([])
            }
        } catch (e) {
            setFabricList([])
        }
    }, [])

    useEffect(async () => {
        setIsLoadingFabric(true)
        getCustomStyle()
    }, [fabricSelect]);

    useEffect(() => {
        console.log("DataStyle:", dataStyle)
    },[dataStyle])

    useEffect(() => {
        setIsLoading(true)
        console.log(styleSelect);
        const newDataStyle = { ...dataStyle }
        switch (styleSelect?.title) {
            case "Collar":
                newDataStyle.collar.name = styleSelect.name
                break;
            case "Sleeve":
                newDataStyle.sleeve.name = styleSelect.name
                break;
            case "Bottom":
                newDataStyle.bottom.name = styleSelect.name
                break;
            case "Chest Pocket":
                newDataStyle.pocket.name = styleSelect.name
                break;
            case "Cuffs":
                newDataStyle.cuffs.name = styleSelect.name
                newDataStyle.cuffsBack.name = styleSelect.name
                newDataStyle.sleeve.name = "Long"
                break;
            case "Placket":
                newDataStyle.placket.name = styleSelect.name
            // case "Pleats":
            //     newDataStyle.pleats.name = styleSelect.name
            default: break;
        }
        getCustomStyle()
    }, [styleSelect])
    


    useEffect(() => {
        switch (category) {
            case 'vests':
                setListStyle(VestListStyle)
                break;
            case 'batiks':
                setListStyle(BatikListStyle)
                break;
            case 'shirts':
                setListStyle(ShirtListStyle)
                break;
            case 'trousers':
                setListStyle(TrouserListStyle)
                break;
            case 'blazer':
                setListStyle(BlazerListStyle)
                break;
        }
    }, [category]);

    const getCustomStyle = async () => {
        const currentFabricSelect = fabricSelect || fabricSelectRef.current;
        console.log(currentFabricSelect);
        if (!currentFabricSelect) {
            console.log("No fabric selected");
            setIsLoadingFabric(false);
            return;
        }
        try {
            let placketName = "",
            isTucked = false;
            if(dataStyle.placket.name.split(" ").length > 1){ //* Check apakah isi nya "Standar" atau sudah lengkap dengan "Body Untucked With Square"
                placketName = dataStyle.placket.name;
            }else {
                placketName = dataStyle.placket.name.concat(" Body", isTucked ? "" : "Untucked" ,"With Square")
            }
        
            
            var url = `/api/custom/custom_style?fabric=${currentFabricSelect._id}&collar=${dataStyle.collar.name}&cuffs=${dataStyle.cuffs.name}&sleeve=${dataStyle.sleeve.name}&bottom=${dataStyle.bottom.name}&chestpocket=${dataStyle.pocket.name}&placket=${dataStyle.placket.name}&pov=${pov}`;
            var response = await axios.get(url);
            console.log(url)
            const { status, data } = response.data
            console.log(data)
            const newDataStyle = { ...dataStyle }
            // newDataStyle.bottom.name = data.bottom.name
            // newDataStyle.bottom.image = data.bottom.image
            
            newDataStyle.collar.name = data.styles.collar?.name || ""
            newDataStyle.collar.image = data.styles.collar?.image || ""
            newDataStyle.sleeve.name = data.styles.sleeve?.name || ""
            newDataStyle.sleeve.image = data.styles.sleeve?.image || ""
            newDataStyle.pocket.name = data.styles.chestpocket?.name || ""
            newDataStyle.pocket.image = data.styles.chestpocket?.image || ""
            newDataStyle.placket.name = data.styles.placket?.name || ""
            newDataStyle.placket.image = data.styles.placket?.image || ""
            fabric= fabricSelect
            
            console.log(fabricSelect._id)
            setDataStyle(newDataStyle)
            console.log(newDataStyle)

            // if(fabricSelect._id==="6705fffa8f14879009126d1d"){
                
                newDataStyle.pleats.image="/img/pleats/red/Pleats Box Tucked.svg"
                newDataStyle.collarBack.image="/img/pleats/red/Collar Back.svg"
              
                if(dataStyle.placket.name==="French"){
                    newDataStyle.placketFold.image="/img/folded/red/pleats/Placket French Body Folded.svg"
                }else if(dataStyle.placket.name==="Hidden"){
                    newDataStyle.placketFold.image="/img/folded/red/pleats/Placket Hidden Body Folded.svg"
                }else if(dataStyle.placket.name==="Standard"){
                    newDataStyle.placketFold.image="/img/folded/red/pleats/Placket Standard Body Folded.svg"
                }

                if(dataStyle.collar.name==="Stand Up"){
                    newDataStyle.collarFold.image="/img/folded/red/collar/Collar Stand Up Placket French Folded.svg"
                }else if(dataStyle.collar.name==="Button Down"){
                    newDataStyle.collarFold.image="/img/folded/red/collar/Collar Button Down Placket French Folded.svg"

                }else if(dataStyle.collar.name==="Cutaway"){
                    newDataStyle.collarFold.image="/img/folded/red/collar/Collar Cutaway Placket French Folded.svg"

                }else if(dataStyle.collar.name==="Kent Collar"){
                    newDataStyle.collarFold.image="/img/folded/red/collar/Collar Kent Collar Placket French Folded.svg"
                }else if(dataStyle.collar.name==="New Kent"){
                    newDataStyle.collarFold.image="/img/folded/red/collar/Collar New Kent Placket French Folded.svg"
                }else if(dataStyle.collar.name==="Pinned"){
                    newDataStyle.collarFold.image="/img/folded/red/collar/Collar Pinned Placket French Folded.svg"
                }else if(dataStyle.collar.name==="Rounded"){
                    newDataStyle.collarFold.image="/img/folded/red/collar/Collar Rounded Placket French Folded.svg"
                }else if(dataStyle.collar.name==="Wing"){
                    newDataStyle.collarFold.image="/img/folded/red/collar/Collar Wing Placket French Folded.svg"
                }else if(dataStyle.collar.name==="Long"){
                    newDataStyle.collarFold.image="/img/folded/red/collar/Collar Long Placket French Folded.svg"
                }else if(dataStyle.collar.name==="Short Classic"){

                }

                if(dataStyle.pocket.name==="No Pocket"){

                }else if(dataStyle.pocket.name==="Standard"){
                    newDataStyle.pocketFold.image="/img/folded/red/pocket/Chestpocket Standard Folded.svg"
                }else if(dataStyle.pocket.name==="With Flap"){
                    newDataStyle.pocketFold.image="/img/folded/red/pocket/Chestpocket With Flap Folded.svg"
                }else if(dataStyle.pocket.name==="Double Standard"){
                    newDataStyle.pocketFold.image="/img/folded/red/pocket/Chestpocket Double Standard Folded.svg"
                }else if(dataStyle.pocket.name==="Double With Flap"){
                    newDataStyle.pocketFold.image="/img/folded/red/pocket/Chestpocket Double With Flap Folded.svg"
                }

                if(dataStyle.cuffs.name==="Double Rounded French"){
                    newDataStyle.cuffsFold.image="/img/folded/red/sleeve/Cuffs Double Rounded French Folded.svg"
                }else if(dataStyle.cuffs.name==="Double Square French"){

                }else if(dataStyle.cuffs.name==="Rounded One"){
                    newDataStyle.cuffsFold.image="/img/folded/red/sleeve/Cuffs Rounded One Button Folded.svg"
                }else if(dataStyle.cuffs.name==="Rounded Two"){

                }else if(dataStyle.cuffs.name==="Square French"){
                    newDataStyle.cuffsFold.image="/img/folded/red/sleeve/Cuffs Square French Folded.svg"
                }else if(dataStyle.cuffs.name==="Single One Button"){

                }else if(dataStyle.cuffs.name==="Single Two Button"){

                }else if(dataStyle.cuffs.name==="One Button Cut"){
                    newDataStyle.cuffsFold.image="/img/folded/red/sleeve/Cuffs One Button Cut  Folded.svg"
                }else if(dataStyle.cuffs.name==="Two Button Cut"){

                }else if(dataStyle.cuffs.name==="Short"){
                    newDataStyle.cuffsFold.image="/img/folded/red/sleeve/Sleeve Short Folded.svg"
                }

        } catch (e) {
            console.log(e);
        } finally {
            setTimeout(() => {
                setIsLoading(false)
            }, 700);
            setTimeout(() => {
                setIsLoadingFabric(false)
            }, 1000);
        }
    }

    return {
        openStyle,
        listStyle,
        fabricList,
        styleSelect,
        fabricSelect,
        dataStyle,
        isLoading,
        isLoadingFabric,
        pov,
        updatePov,
        setPov,
        setDataStyle,
        setIsLoading,
        setOpenStyle,
        setFabricList,
        setStyleSelect,
        setFabricSelect,
        setIsLoadingFabric,
    }
}
export default useHookCustom