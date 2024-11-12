import axios from "../../../helpers/axiosConfig";

export default function handler(req, res) {
    // console.log(req);
    if (req.method === "GET") {
        axios.get("/get_fabric").then((response) => {
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