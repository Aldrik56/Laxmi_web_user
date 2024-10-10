import axios from "axios";
// import frenchPlacket from "../../../public/img/placket/Placket French.svg";

import { useRouter } from "next/router";
import { useEffect, useState } from "react"
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
    "sleeve": {
        "image": "",
        "name": "Short"
    },
    "cuffs": {
        "image": "",
        "name": ""
    },
    "pocket": {
        "image": "",
        "name": "No Pocket"
    },
    "placket": {
        "image": "",
        "name": "Standard"
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
        console.log("fabricSelect");
        setIsLoadingFabric(true)
        getCustomStyle()
    }, [fabricSelect])

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
                newDataStyle.sleeve.name = "Long"
                break;
            case "Placket":
                newDataStyle.placket.name = styleSelect.name
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
        try {
            var response = await axios.get(`/api/custom/custom_style?fabric=${fabricSelect._id}&collar=${dataStyle.collar.name}&cuff=${dataStyle.cuffs.name}&sleeve=${dataStyle.sleeve.name}&bottom=${dataStyle.bottom.name}&chestpocket=${dataStyle.pocket.name}`);
            const { status, data } = response.data
            const newDataStyle = { ...dataStyle }
            // newDataStyle.bottom.name = data.bottom.name
            // newDataStyle.bottom.image = data.bottom.image
            newDataStyle.collar.name = data.collar.name
            newDataStyle.collar.image = data.collar.image
            newDataStyle.sleeve.name = data.sleeve.name
            newDataStyle.sleeve.image = data.sleeve.image
            newDataStyle.pocket.name = data.chestpocket.name
            newDataStyle.pocket.image = data.chestpocket.image
            if(fabricSelect._id==="6705fffa8f14879009126d1d"){
                if(dataStyle.placket.name==="French"){
                    newDataStyle.placket.name = 'French'
                    newDataStyle.placket.image = '/img/placket/Placket French Red.svg';
                }else if(dataStyle.placket.name==="Hidden"){
                    newDataStyle.placket.name = 'Hidden'
                    newDataStyle.placket.image = '/img/placket/Placket Hidden Red.svg';
                }else if(dataStyle.placket.name==="Standard"){
                    newDataStyle.placket.name = 'Standard'
                    newDataStyle.placket.image = '/img/placket/Placket Standard Red.svg';
                }
            }else if(fabricSelect._id==="670600c78f14879009126d4c"){
                if(dataStyle.placket.name==="French"){
                    newDataStyle.placket.name = 'French'
                    newDataStyle.placket.image = '/img/placket/Placket French.svg';
                }else if(dataStyle.placket.name==="Hidden"){
                    newDataStyle.placket.name = 'Hidden'
                    newDataStyle.placket.image = '/img/placket/Placket Hidden.svg';
                }else if(dataStyle.placket.name==="Standard"){
                    newDataStyle.placket.name = 'Standard'
                    newDataStyle.placket.image = '/img/placket/Placket Standard.svg';
                }
            }else if(fabricSelect._id==="6706008c8f14879009126d3a"){
                if(dataStyle.placket.name==="French"){
                    newDataStyle.placket.name = 'French'
                    newDataStyle.placket.image = '/img/placket/Placket French Blackdot.svg';
                }else if(dataStyle.placket.name==="Hidden"){
                    newDataStyle.placket.name = 'Hidden'
                    newDataStyle.placket.image = '/img/placket/Placket Hidden Blackdot.svg';
                }else if(dataStyle.placket.name==="Standard"){
                    newDataStyle.placket.name = 'Standard'
                    newDataStyle.placket.image = '/img/placket/Placket Standard Blackdot.svg';
                }
            }else if(fabricSelect._id==="67060d5e8f14879009126d8e"){
                if(dataStyle.placket.name==="French"){
                    newDataStyle.placket.name = 'French'
                    newDataStyle.placket.image = '/img/placket/Placket French RSK.svg';
                }else if(dataStyle.placket.name==="Hidden"){
                    newDataStyle.placket.name = 'Hidden'
                    newDataStyle.placket.image = '/img/placket/Placket Hidden RSK.svg';
                }else if(dataStyle.placket.name==="Standard"){
                    newDataStyle.placket.name = 'Standard'
                    newDataStyle.placket.image = '/img/placket/Placket Standard RSK.svg';
                }
            }
            
            console.log(fabricSelect.id)
            setDataStyle(newDataStyle)
            console.log(newDataStyle)
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