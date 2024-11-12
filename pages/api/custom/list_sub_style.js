import axios from "../../../helpers/axiosConfig";

export default function handler(req, res) {
    if (req.method === "GET") {
        axios.get("/detail_sub_style?name_style=Collar").then((response) => {
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