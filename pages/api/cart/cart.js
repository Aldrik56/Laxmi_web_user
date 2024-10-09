import axios from "../../../helpers/axiosConfig"
import jwtDecode from 'jwt-decode';

export default async function handler(req, res) {
    // if (req.method === 'POST') {
    //     const { category, fabric, collar, cuffs, sleeve, bottom, chest_pocket} = req.body
    //     axios.post("/cart", {
            
    //         category: category,
    //         fabric: fabric,
    //         collar: collar,
    //         cuffs: cuffs,
    //         sleeve: sleeve,
    //         bottom: bottom,
    //         chest_pocket: chest_pocket,
    //         price:0,
    //         placket:'aa',
            
    //     }).then((response) => {
    //         const { status, message } = response.data
    //         console.log("responses")
    //         console.log(response)
    //         if (status) {
    //             const { category, fabric, collar, cuffs, sleeve, bottom, chest_pocket } = response.data.data
    //             res.status(200).json({
    //                 "status": true,
    //                 "message": "Add Cart success",
    //                 "data": {
    //                     "category" : category,
    //                     "fabric" : fabric,
    //                     "collar" : collar,
    //                     "cuffs" : cuffs,
    //                     "sleeve" : sleeve,
    //                     "bottom" : bottom,
    //                     "chest_pocket" : chest_pocket,
    //                 }
    //             })
    //         } else {
    //             res.status(200).json({
    //                 "status": false,
    //                 "message": message
    //             })
    //         }
    //     }).catch((e) => {
    //         const { message } = e.response.data
    //         res.status(200).json({
    //             "status": false,
    //             "message": message,
    //         })
    //     })
    // } 
    
    if (req.method === 'GET') {
        axios.get("/cart").then((response) => {
            const { status, message } = response.data
            if (status) {
                const { data } = response.data
                res.status(200).json({
                    "status": status,
                    "message": message,
                    "data": data
                })
            } else {
                res.status(200).json({
                    "status": status,
                    "message": message,
                    "data": []
                })
            }
        }).catch((e) => {
            console.log(e);
            const { message } = e.response.data
            res.status(404).json({
                "status": false,
                "message": message,
            })
        })
    }
}
