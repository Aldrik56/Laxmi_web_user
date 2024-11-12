import axios from "../../../helpers/axiosConfig"

export default function handler(req, res) {
    if (req.method === 'POST') {
        const { password, token } = req.body
        axios.post("/auth/forgot_password", {
            password: password,
            token: token
        }).then((response) => {
            const { status, message } = response.data
            if (status) {
                res.status(200).json({
                    "status": true,
                    "message": message
                })
            } else {
                res.status(200).json({
                    "status": false,
                    "message": message
                })
            }
        }).catch((e) => {
            const { message } = e.response.data
            res.status(200).json({
                "status": false,
                "message": message,
            })
        })
    }
}
