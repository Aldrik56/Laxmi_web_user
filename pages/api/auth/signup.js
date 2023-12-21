import axios from "../../../helpers/axiosConfig"

export default function handler(req, res) {
    if (req.method === 'POST') {
        const { email, name, password } = req.body
        axios.post("/auth/signup", {
            email: email,
            name: name,
            password: password
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
        // if(email === 'dafa@gmail.com'){
        //     res.status(200).json({ 
        //         "status": false,
        //         "message": "email already exist"            
        //     })
        // }else{
        //     res.status(200).json({ 
        //         "status": true,
        //         "message": "signup was successful, check your email"            
        //     })
        // }
    }
}
