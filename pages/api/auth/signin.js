export default function handler(req, res) {
    if (req.method === 'POST') {
        const {email,password} = req.body
        if(email === 'dafa@gmail.com' && password === '12345678'){
            res.status(200).json({ 
                "status": true,
                "message": "signin was successful",
                "data": {
                    "name": "dafa",
                    "email": "dafa@gmail.com",
                    "phone": "081259539154",
                    "height": 12,
                    "weight": 12,
                    "age": 12,
                    "token": "2313123123123",
                    "role": "user"
                }
            })
        }else{
            res.status(200).json({ 
                "status": false,
                "message": "Username or Password False",
            })
        }
    }
}
  