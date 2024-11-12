import axios from "../../../helpers/axiosConfig"

export default function handler(req, res) {
    if (req.method === 'POST') {
        const { email, name, password } = req.body
        axios.post("/auth/signup", {
            email: email,
            name: name,
            password: password
        }).then((response) => {
            console.log(response);
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
