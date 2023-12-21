import axios from "../../../helpers/axiosConfig"

export default async function handler(req, res) {
    console.log(req.headers);
    if (req.method === 'POST') {
        const { email, password } = req.body
        axios.post("/auth/login", {
            email: email,
            password: password
        }).then((response) => {
            const { status, message } = response.data
            if (status) {
                const { _id, status, role, name, token } = response.data.data
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
        // try {
        //     var response = await axios.post("/auth/login", {
        //         email,
        //         password,
        //     })
        //     console.log(response.data);
        //     const { status, message } = response.data
        //     if (status) {
        //         res.status(400).json({
        //             "status": true,
        //             "message": "Login success",
        //             "data": response
        //         })
        //     }
        // } catch (e) {
        //     res.status(200).json({
        //         "status": false,
        //         "message": "Terjadi Kesalahan",
        //         "es": e,
        //         "req": req,

        //     })
        // }
        // if (email !== 'dafa@gmail.com') {
        //     res.status(200).json({
        //         "status": false,
        //         "message": "The email you are inputting is not registered yet",
        //     })
        // } else if (email === 'dafa@gmail.com' && password === '12345678') {
        //     res.status(200).json({
        //         "status": true,
        //         "message": "signin was successful",
        //         "data": {
        //             "name": "dafa",
        //             "email": "dafa@gmail.com",
        //             "phone": "081259539154",
        //             "height": 12,
        //             "weight": 12,
        //             "age": 12,
        //             "token": "2313123123123",
        //             "role": "user"
        //         }
        //     })
        // } else {
        // res.status(200).json({
        //     "status": false,
        //     "message": "Username or Password False",
        // })
        // }
    }
}
