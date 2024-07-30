import axios from "../../../helpers/axiosConfig"
import jwtDecode from 'jwt-decode';

export default async function handler(req, res) {
    console.log(req.headers);
    if (req.method === 'POST') {
        const { email, password } = req.body
        axios.post("/auth/login", {
            email: email,
            password: password
        }).then((response) => {
            const { status, message } = response.data
            console.log("responses")
            console.log(response)
            if (status) {
                const { _id, status, role, name, token } = response.data.data
                const jsonDecode = jwtDecode(token)
                console.log(jsonDecode);
                res.status(200).json({
                    "status": true,
                    "message": "Login success",
                    "data": {
                        "name": name,
                        "email": email,
                        "phone": "081259539154",
                        "height": 12,
                        "weight": 12,
                        "age": 12,
                        "token": token,
                        "role": role
                    }
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
