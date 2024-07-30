import axios from "axios";
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
        "name": "Cutaway"
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
            newDataStyle.bottom.name = data.bottom.name
            newDataStyle.bottom.image = data.bottom.image
            newDataStyle.collar.name = data.collar.name
            newDataStyle.collar.image = data.collar.image
            newDataStyle.sleeve.name = data.sleeve.name
            newDataStyle.sleeve.image = data.sleeve.image
            newDataStyle.pocket.name = data.chestpocket.name
            newDataStyle.pocket.image = data.chestpocket.image
            setDataStyle(newDataStyle)
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