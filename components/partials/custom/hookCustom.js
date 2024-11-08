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
        "name": "Double Rounded French"
    },
    "cuffsBack": {
        "image": "/img/sleeve_back/Cuffs Double Rounded French Back.svg",
        "name": "Double Rounded French"
    },
    "pocket": {
        "image": "",
        "name": "No Pocket"
    },
    "placket": {
        "image": "",
        "name": "Standard"
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
    const [pov, setPov] = useState("folded")

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
        console.log(fabricList)
        console.log(dataStyle)
        try {
            var response = await axios.get(`/api/custom/custom_style?fabric=${fabricSelect._id}&collar=Collar Botton Down Placket French Folded&cuff=${dataStyle.cuffs.name}&sleeve=${dataStyle.sleeve.name}&bottom=${dataStyle.bottom.name}&chestpocket=${dataStyle.pocket.name}&pov=${pov}`);
            const { status, data } = response.data
            console.log(data)
            const newDataStyle = { ...dataStyle }
            // newDataStyle.bottom.name = data.bottom.name
            // newDataStyle.bottom.image = data.bottom.image
            newDataStyle.collar.name = data.collar.name
            newDataStyle.collar.image = data.collar.image
            newDataStyle.sleeve.name = data.sleeve.name
            newDataStyle.sleeve.image = data.sleeve.image
            newDataStyle.pocket.name = data.chestpocket.name
            newDataStyle.pocket.image = data.chestpocket.image
            // red
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
  
                if(dataStyle.cuffs.name==="Double Rounded French"){
                    newDataStyle.cuffsBack.name = 'Double Rounded French'
                    newDataStyle.cuffsBack.image = '/img/sleeve_back/red/Cuffs Double Rounded French Back.svg';

                }else if(dataStyle.cuffs.name==="Double Square French"){
                    newDataStyle.cuffsBack.name = 'Double Square French'
                    newDataStyle.cuffsBack.image = '/img/sleeve_back/red/Cuffs Double Square French Back';

                }else if(dataStyle.cuffs.name==="Rounded One"){
                    newDataStyle.cuffsBack.name = "Rounded One"
                    newDataStyle.cuffsBack.image = '/img/sleeve_back/red/Cuffs Rounded French Back.svg';
                }else if(dataStyle.cuffs.name==="Rounded Two"){
                    newDataStyle.cuffsBack.name = "Rounded Two"
                    newDataStyle.cuffsBack.image = '/img/sleeve_back/red/Cuffs Rounded French Back.svg';
                }else if(dataStyle.cuffs.name==="Square French"){
                    newDataStyle.cuffsBack.name = "Square French"
                    newDataStyle.cuffsBack.image = '/img/sleeve_back/red/Cuffs Rounded French Back.svg';
                }else if(dataStyle.cuffs.name==="Single One Button"){
                    newDataStyle.cuffsBack.name = "Single One Button"
                    newDataStyle.cuffsBack.image = '/img/sleeve_back/red/Cuffs Single One Button Back.svg';
                }else if(dataStyle.cuffs.name==="Single Two Button"){
                    newDataStyle.cuffsBack.name = "Single Two Button"
                    newDataStyle.cuffsBack.image = '/img/sleeve_back/red/Cuffs Single Two Button Back.svg';
                }else if(dataStyle.cuffs.name==="One Button Cut"){
                    newDataStyle.cuffsBack.name = "One Button Cut"
                    newDataStyle.cuffsBack.image = '/img/sleeve_back/red/Cuffs One Button Cut Back.svg';
                }else if(dataStyle.cuffs.name==="Two Button Cut"){
                    newDataStyle.cuffsBack.name = "Two Button Cut"
                    newDataStyle.cuffsBack.image = '/img/sleeve_back/red/Cuffs Two Button Cut Back.svg';
                }
                newDataStyle.pleats.image="/img/pleats/red/Pleats Box Tucked.svg"
                newDataStyle.collarBack.image="/img/pleats/red/Collar Back.svg"

                // folded red
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

                if(dataStyle.placket.name==="French"){
                    newDataStyle.placketFold.image="/img/folded/red/pleats/Placket French Body Folded.svg"
                }else if(dataStyle.placket.name==="Hidden"){
                    newDataStyle.placketFold.image="/img/folded/red/pleats/Placket Hidden Body Folded.svg"
                }else if(dataStyle.placket.name==="Standard"){
                    newDataStyle.placketFold.image="/img/folded/red/pleats/Placket Standard Body Folded.svg"
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

            }else if(fabricSelect._id==="670600c78f14879009126d4c" || fabricSelect._id==="6728881c596d15d9e5951ddc" || fabricSelect._id==="67241efd596d15d9e5951d28" || fabricSelect._id==="672411d2596d15d9e5951c0b"){
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
                
                if(dataStyle.cuffs.name==="Double Rounded French"){
                    newDataStyle.cuffsBack.name = 'Double Rounded French'
                    newDataStyle.cuffsBack.image = '/img/sleeve_back/yellow/Cuffs Double Rounded French Back.svg';
                }else if(dataStyle.cuffs.name==="Double Square French"){
                    newDataStyle.cuffsBack.name = 'Double Square French'
                    newDataStyle.cuffsBack.image = '/img/sleeve_back/yellow/Cuffs Double Square French Back';
                }else if(dataStyle.cuffs.name==="Rounded One"){
                    newDataStyle.cuffsBack.name = "Rounded One"
                    newDataStyle.cuffsBack.image = '/img/sleeve_back/yellow/Cuffs Rounded French Back.svg';
                }else if(dataStyle.cuffs.name==="Single Rounded French"){
                    newDataStyle.cuffsBack.name = "Rounded Two"
                    newDataStyle.cuffsBack.image = '/img/sleeve_back/yellow/Cuffs Rounded French Back.svg';
                }else if(dataStyle.cuffs.name==="Square French"){
                    newDataStyle.cuffsBack.name = "Square French"
                    newDataStyle.cuffsBack.image = '/img/sleeve_back/yellow/Cuffs Rounded French Back.svg';
                }else if(dataStyle.cuffs.name==="Single One Button"){
                    newDataStyle.cuffsBack.name = "Single One Button"
                    newDataStyle.cuffsBack.image = '/img/sleeve_back/yellow/Cuffs Single One Button Back.svg';
                }else if(dataStyle.cuffs.name==="Single Two Button"){
                    newDataStyle.cuffsBack.name = "Single Two Button"
                    newDataStyle.cuffsBack.image = '/img/sleeve_back/yellow/Cuffs Single Two Button Back.svg';
                }else if(dataStyle.cuffs.name==="One Button Cut"){
                    newDataStyle.cuffsBack.name = "One Button Cut"
                    newDataStyle.cuffsBack.image = '/img/sleeve_back/yellow/Cuffs One Button Cut Back.svg';
                }else if(dataStyle.cuffs.name==="Two Button Cut"){
                    newDataStyle.cuffsBack.name = "Two Button Cut"
                    newDataStyle.cuffsBack.image = '/img/sleeve_back/yellow/Cuffs Two Button Cut Back.svg';
                }

                newDataStyle.pleats.image="/img/pleats/yellow/Pleats Box Tucked.svg"
                newDataStyle.collarBack.image="/img/pleats/yellow/Collar Back.svg"

                // folded yellow
                if(dataStyle.collar.name==="Stand Up"){
                    newDataStyle.collarFold.image="/img/folded/yellow/collar/Collar Stand Up Placket French Folded.svg"
                }else if(dataStyle.collar.name==="Button Down"){
                    newDataStyle.collarFold.image="/img/folded/yellow/collar/Collar Button Down Placket French Folded.svg"

                }else if(dataStyle.collar.name==="Cutaway"){
                    newDataStyle.collarFold.image="/img/folded/yellow/collar/Collar Cutaway Placket French Folded.svg"

                }else if(dataStyle.collar.name==="Kent Collar"){
                    newDataStyle.collarFold.image="/img/folded/yellow/collar/Collar Kent Collar Placket French Folded.svg"
                }else if(dataStyle.collar.name==="New Kent"){
                    newDataStyle.collarFold.image="/img/folded/yellow/collar/Collar New Kent Placket French Folded.svg"
                }else if(dataStyle.collar.name==="Pinned"){
                    newDataStyle.collarFold.image="/img/folded/yellow/collar/Collar Pinned Placket French Folded.svg"
                }else if(dataStyle.collar.name==="Rounded"){
                    newDataStyle.collarFold.image="/img/folded/yellow/collar/Collar Rounded Placket French Folded.svg"
                }else if(dataStyle.collar.name==="Wing"){
                    newDataStyle.collarFold.image="/img/folded/yellow/collar/Collar Wing Placket French Folded.svg"
                }else if(dataStyle.collar.name==="Long"){
                    newDataStyle.collarFold.image="/img/folded/yellow/collar/Collar Long Placket French Folded.svg"
                }else if(dataStyle.collar.name==="Short Classic"){

                }

                if(dataStyle.cuffs.name==="Double Rounded French"){
                    newDataStyle.cuffsFold.image="/img/folded/yellow/sleeve/Cuffs Double Rounded French Folded.svg"
                }else if(dataStyle.cuffs.name==="Double Square French"){

                }else if(dataStyle.cuffs.name==="Rounded One"){
                    newDataStyle.cuffsFold.image="/img/folded/yellow/sleeve/Cuffs Rounded One Button Folded.svg"
                }else if(dataStyle.cuffs.name==="Rounded Two"){

                }else if(dataStyle.cuffs.name==="Square French"){
                    newDataStyle.cuffsFold.image="/img/folded/yellow/sleeve/Cuffs Square French Folded.svg"
                }else if(dataStyle.cuffs.name==="Single One Button"){

                }else if(dataStyle.cuffs.name==="Single Two Button"){

                }else if(dataStyle.cuffs.name==="One Button Cut"){
                    newDataStyle.cuffsFold.image="/img/folded/yellow/sleeve/Cuffs One Button Cut  Folded.svg"
                }else if(dataStyle.cuffs.name==="Two Button Cut"){

                }else if(dataStyle.cuffs.name==="Short"){
                    newDataStyle.cuffsFold.image="/img/folded/yellow/sleeve/Sleeve Short Folded.svg"
                }

                if(dataStyle.placket.name==="French"){
                    newDataStyle.placketFold.image="/img/folded/yellow/pleats/Placket French Body Folded.svg"
                }else if(dataStyle.placket.name==="Hidden"){
                    newDataStyle.placketFold.image="/img/folded/yellow/pleats/Placket Hidden Body Folded.svg"
                }else if(dataStyle.placket.name==="Standard"){
                    newDataStyle.placketFold.image="/img/folded/yellow/pleats/Placket Standard Body Folded.svg"
                }

                if(dataStyle.pocket.name==="No Pocket"){

                }else if(dataStyle.pocket.name==="Standard"){
                    newDataStyle.pocketFold.image="/img/folded/yellow/pocket/Chestpocket Standard Folded.svg"
                }else if(dataStyle.pocket.name==="With Flap"){
                    newDataStyle.pocketFold.image="/img/folded/yellow/pocket/Chestpocket With Flap Folded.svg"
                }else if(dataStyle.pocket.name==="Double Standard"){
                    newDataStyle.pocketFold.image="/img/folded/yellow/pocket/Chestpocket Double Standard Folded.svg"
                }else if(dataStyle.pocket.name==="Double With Flap"){
                    newDataStyle.pocketFold.image="/img/folded/yellow/pocket/Chestpocket Double With Flap Folded.svg"
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
                
                if(dataStyle.cuffs.name==="Double Rounded French"){
                    newDataStyle.cuffsBack.name = 'Double Rounded French'
                    newDataStyle.cuffsBack.image = '/img/sleeve_back/blackdot/Cuffs Double Rounded French Back.svg';
                }else if(dataStyle.cuffs.name==="Double Square French"){
                    newDataStyle.cuffsBack.name = 'Double Square French'
                    newDataStyle.cuffsBack.image = '/img/sleeve_back/blackdot/Cuffs Double Square French Back';
                }else if(dataStyle.cuffs.name==="Rounded One"){
                    newDataStyle.cuffsBack.name = "Rounded One"
                    newDataStyle.cuffsBack.image = '/img/sleeve_back/blackdot/Cuffs Rounded French Back.svg';
                }else if(dataStyle.cuffs.name==="Single Rounded French"){
                    newDataStyle.cuffsBack.name = "Rounded Two"
                    newDataStyle.cuffsBack.image = '/img/sleeve_back/blackdot/Cuffs Rounded French Back.svg';
                }else if(dataStyle.cuffs.name==="Square French"){
                    newDataStyle.cuffsBack.name = "Square French"
                    newDataStyle.cuffsBack.image = '/img/sleeve_back/blackdot/Cuffs Rounded French Back.svg';
                }else if(dataStyle.cuffs.name==="Single One Button"){
                    newDataStyle.cuffsBack.name = "Single One Button"
                    newDataStyle.cuffsBack.image = '/img/sleeve_back/blackdot/Cuffs Single One Button Back.svg';
                }else if(dataStyle.cuffs.name==="Single Two Button"){
                    newDataStyle.cuffsBack.name = "Single Two Button"
                    newDataStyle.cuffsBack.image = '/img/sleeve_back/blackdot/Cuffs Single Two Button Back.svg';
                }else if(dataStyle.cuffs.name==="One Button Cut"){
                    newDataStyle.cuffsBack.name = "One Button Cut"
                    newDataStyle.cuffsBack.image = '/img/sleeve_back/blackdot/Cuffs One Button Cut Back.svg';
                }else if(dataStyle.cuffs.name==="Two Button Cut"){
                    newDataStyle.cuffsBack.name = "Two Button Cut"
                    newDataStyle.cuffsBack.image = '/img/sleeve_back/blackdot/Cuffs Two Button Cut Back.svg';
                }

                newDataStyle.pleats.image="/img/pleats/blackdot/Pleats Box Tucked.svg"
                newDataStyle.collarBack.image="/img/pleats/blackdot/Collar Back.svg"

                // folded blackdot
                if(dataStyle.collar.name==="Stand Up"){
                    newDataStyle.collarFold.image="/img/folded/blackdot/collar/Collar Stand Up Placket French Folded.svg"
                }else if(dataStyle.collar.name==="Button Down"){
                    newDataStyle.collarFold.image="/img/folded/blackdot/collar/Collar Button Down Placket French Folded.svg"

                }else if(dataStyle.collar.name==="Cutaway"){
                    newDataStyle.collarFold.image="/img/folded/blackdot/collar/Collar Cutaway Placket French Folded.svg"

                }else if(dataStyle.collar.name==="Kent Collar"){
                    newDataStyle.collarFold.image="/img/folded/blackdot/collar/Collar Kent Collar Placket French Folded.svg"
                }else if(dataStyle.collar.name==="New Kent"){
                    newDataStyle.collarFold.image="/img/folded/blackdot/collar/Collar New Kent Placket French Folded.svg"
                }else if(dataStyle.collar.name==="Pinned"){
                    newDataStyle.collarFold.image="/img/folded/blackdot/collar/Collar Pinned Placket French Folded.svg"
                }else if(dataStyle.collar.name==="Rounded"){
                    newDataStyle.collarFold.image="/img/folded/blackdot/collar/Collar Rounded Placket French Folded.svg"
                }else if(dataStyle.collar.name==="Wing"){
                    newDataStyle.collarFold.image="/img/folded/blackdot/collar/Collar Wing Placket French Folded.svg"
                }else if(dataStyle.collar.name==="Long"){
                    newDataStyle.collarFold.image="/img/folded/blackdot/collar/Collar Long Placket French Folded.svg"
                }else if(dataStyle.collar.name==="Short Classic"){

                }

                if(dataStyle.cuffs.name==="Double Rounded French"){
                    newDataStyle.cuffsFold.image="/img/folded/blackdot/sleeve/Cuffs Double Rounded French Folded.svg"
                }else if(dataStyle.cuffs.name==="Double Square French"){

                }else if(dataStyle.cuffs.name==="Rounded One"){
                    newDataStyle.cuffsFold.image="/img/folded/blackdot/sleeve/Cuffs Rounded One Button Folded.svg"
                }else if(dataStyle.cuffs.name==="Rounded Two"){

                }else if(dataStyle.cuffs.name==="Square French"){
                    newDataStyle.cuffsFold.image="/img/folded/blackdot/sleeve/Cuffs Square French Folded.svg"
                }else if(dataStyle.cuffs.name==="Single One Button"){

                }else if(dataStyle.cuffs.name==="Single Two Button"){

                }else if(dataStyle.cuffs.name==="One Button Cut"){
                    newDataStyle.cuffsFold.image="/img/folded/blackdot/sleeve/Cuffs One Button Cut  Folded.svg"
                }else if(dataStyle.cuffs.name==="Two Button Cut"){

                }else if(dataStyle.cuffs.name==="Short"){
                    newDataStyle.cuffsFold.image="/img/folded/blackdot/sleeve/Sleeve Short Folded.svg"
                }

                if(dataStyle.placket.name==="French"){
                    newDataStyle.placketFold.image="/img/folded/blackdot/pleats/Placket French Body Folded.svg"
                }else if(dataStyle.placket.name==="Hidden"){
                    newDataStyle.placketFold.image="/img/folded/blackdot/pleats/Placket Hidden Body Folded.svg"
                }else if(dataStyle.placket.name==="Standard"){
                    newDataStyle.placketFold.image="/img/folded/blackdot/pleats/Placket Standard Body Folded.svg"
                }

                if(dataStyle.pocket.name==="No Pocket"){

                }else if(dataStyle.pocket.name==="Standard"){
                    newDataStyle.pocketFold.image="/img/folded/blackdot/pocket/Chestpocket Standard Folded.svg"
                }else if(dataStyle.pocket.name==="With Flap"){
                    newDataStyle.pocketFold.image="/img/folded/blackdot/pocket/Chestpocket With Flap Folded.svg"
                }else if(dataStyle.pocket.name==="Double Standard"){
                    newDataStyle.pocketFold.image="/img/folded/blackdot/pocket/Chestpocket Double Standard Folded.svg"
                }else if(dataStyle.pocket.name==="Double With Flap"){
                    newDataStyle.pocketFold.image="/img/folded/blackdot/pocket/Chestpocket Double With Flap Folded.svg"
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

                
                if(dataStyle.cuffs.name==="Double Rounded French"){
                    newDataStyle.cuffsBack.name = 'Double Rounded French'
                    newDataStyle.cuffsBack.image = '/img/sleeve_back/rsk/Cuffs Double Rounded French Back.svg';
                }else if(dataStyle.cuffs.name==="Double Square French"){
                    newDataStyle.cuffsBack.name = 'Double Square French'
                    newDataStyle.cuffsBack.image = '/img/sleeve_back/rsk/Cuffs Double Square French Back.svg';
                }else if(dataStyle.cuffs.name==="Rounded One"){
                    newDataStyle.cuffsBack.name = "Rounded One"
                    newDataStyle.cuffsBack.image = '/img/sleeve_back/rsk/Cuffs Rounded French Back.svg';
                }else if(dataStyle.cuffs.name==="Single Rounded French"){
                    newDataStyle.cuffsBack.name = "Rounded Two"
                    newDataStyle.cuffsBack.image = '/img/sleeve_back/rsk/Cuffs Rounded French Back.svg';
                }else if(dataStyle.cuffs.name==="Square French"){
                    newDataStyle.cuffsBack.name = "Square French"
                    newDataStyle.cuffsBack.image = '/img/sleeve_back/rsk/Cuffs Rounded French Back.svg';
                }else if(dataStyle.cuffs.name==="Single One Button"){
                    newDataStyle.cuffsBack.name = "Single One Button"
                    newDataStyle.cuffsBack.image = '/img/sleeve_back/rsk/Cuffs Single One Button Back.svg';
                }else if(dataStyle.cuffs.name==="Single Two Button"){
                    newDataStyle.cuffsBack.name = "Single Two Button"
                    newDataStyle.cuffsBack.image = '/img/sleeve_back/rsk/Cuffs Single Two Button Back.svg';
                }else if(dataStyle.cuffs.name==="One Button Cut"){
                    newDataStyle.cuffsBack.name = "One Button Cut"
                    newDataStyle.cuffsBack.image = '/img/sleeve_back/rsk/Cuffs One Button Cut Back.svg';
                }else if(dataStyle.cuffs.name==="Two Button Cut"){
                    newDataStyle.cuffsBack.name = "Two Button Cut"
                    newDataStyle.cuffsBack.image = '/img/sleeve_back/rsk/Cuffs Two Button Cut Back.svg';
                }
                newDataStyle.pleats.image="/img/pleats/rsk/Pleats Box Tucked.svg"
                newDataStyle.collarBack.image="/img/pleats/rsk/Collar Back.svg"

                // folded rsk
                if(dataStyle.collar.name==="Stand Up"){
                    newDataStyle.collarFold.image="/img/folded/rsk/collar/Collar Stand Up Placket French Folded.svg"
                }else if(dataStyle.collar.name==="Button Down"){
                    newDataStyle.collarFold.image="/img/folded/rsk/collar/Collar Button Down Placket French Folded.svg"

                }else if(dataStyle.collar.name==="Cutaway"){
                    newDataStyle.collarFold.image="/img/folded/rsk/collar/Collar Cutaway Placket French Folded.svg"

                }else if(dataStyle.collar.name==="Kent Collar"){
                    newDataStyle.collarFold.image="/img/folded/rsk/collar/Collar Kent Collar Placket French Folded.svg"
                }else if(dataStyle.collar.name==="New Kent"){
                    newDataStyle.collarFold.image="/img/folded/rsk/collar/Collar New Kent Placket French Folded.svg"
                }else if(dataStyle.collar.name==="Pinned"){
                    newDataStyle.collarFold.image="/img/folded/rsk/collar/Collar Pinned Placket French Folded.svg"
                }else if(dataStyle.collar.name==="Rounded"){
                    newDataStyle.collarFold.image="/img/folded/rsk/collar/Collar Rounded Placket French Folded.svg"
                }else if(dataStyle.collar.name==="Wing"){
                    newDataStyle.collarFold.image="/img/folded/rsk/collar/Collar Wing Placket French Folded.svg"
                }else if(dataStyle.collar.name==="Long"){
                    newDataStyle.collarFold.image="/img/folded/rsk/collar/Collar Long Placket French Folded.svg"
                }else if(dataStyle.collar.name==="Short Classic"){

                }

                if(dataStyle.cuffs.name==="Double Rounded French"){
                    newDataStyle.cuffsFold.image="/img/folded/rsk/sleeve/Cuffs Double Rounded French Folded.png"
                }else if(dataStyle.cuffs.name==="Double Square French"){

                }else if(dataStyle.cuffs.name==="Rounded One"){
                    newDataStyle.cuffsFold.image="/img/folded/rsk/sleeve/Cuffs Rounded One Button Folded.png"
                }else if(dataStyle.cuffs.name==="Rounded Two"){

                }else if(dataStyle.cuffs.name==="Square French"){
                    newDataStyle.cuffsFold.image="/img/folded/rsk/sleeve/Cuffs Square French Folded.png"
                }else if(dataStyle.cuffs.name==="Single One Button"){

                }else if(dataStyle.cuffs.name==="Single Two Button"){

                }else if(dataStyle.cuffs.name==="One Button Cut"){
                    newDataStyle.cuffsFold.image="/img/folded/rsk/sleeve/Cuffs One Button Cut  Folded.png"
                }else if(dataStyle.cuffs.name==="Two Button Cut"){

                }else if(dataStyle.cuffs.name==="Short"){
                    newDataStyle.cuffsFold.image="/img/folded/rsk/sleeve/Sleeve Short Folded.png"
                }

                if(dataStyle.placket.name==="French"){
                    newDataStyle.placketFold.image="/img/folded/rsk/pleats/Placket French Body Folded.svg"
                }else if(dataStyle.placket.name==="Hidden"){
                    newDataStyle.placketFold.image="/img/folded/rsk/pleats/Placket Hidden Body Folded.svg"
                }else if(dataStyle.placket.name==="Standard"){
                    newDataStyle.placketFold.image="/img/folded/rsk/pleats/Placket Standard Body Folded.svg"
                }

                if(dataStyle.pocket.name==="No Pocket"){

                }else if(dataStyle.pocket.name==="Standard"){
                    newDataStyle.pocketFold.image="/img/folded/rsk/pocket/Chestpocket Standard Folded.svg"
                }else if(dataStyle.pocket.name==="With Flap"){
                    newDataStyle.pocketFold.image="/img/folded/rsk/pocket/Chestpocket With Flap Folded.svg"
                }else if(dataStyle.pocket.name==="Double Standard"){
                    newDataStyle.pocketFold.image="/img/folded/rsk/pocket/Chestpocket Double Standard Folded.svg"
                }else if(dataStyle.pocket.name==="Double With Flap"){
                    newDataStyle.pocketFold.image="/img/folded/rsk/pocket/Chestpocket Double With Flap Folded.svg"
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
        pov,
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