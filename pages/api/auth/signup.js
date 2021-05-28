export default function handler(req, res) {
    if (req.method === 'POST') {
        const {email,password} = req.body
        if(email === 'dafa@gmail.com'){
            res.status(200).json({ 
                "status": false,
                "message": "email already exist"            
            })
        }else{
            res.status(200).json({ 
                "status": true,
                "message": "signup was successful, check your email"            
            })
        }
    }
}
  