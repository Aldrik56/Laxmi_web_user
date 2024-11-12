import axios from "../../../helpers/axiosConfig"

export default function handler(req, res) {
    if (req.method === 'POST') {
        const { email } = req.body
        axios.post("/auth/send_email", {
            email: email,
            // link: `http://localhost:3000/login/forgotpassword`,
            link: `http://34.101.70.83:6500/login/forgotpassword`,
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
