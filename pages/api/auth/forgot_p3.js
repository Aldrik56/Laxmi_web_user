export default function handler(req, res) {
    if (req.method === 'POST') {
        const {token_forget} = req.body
        if(token_forget === "12345678"){
            res.status(200).json({ 
                "status": true,
                "message": "password has been changed"      
            })
        }else{
            res.status(200).json({ 
                "status": false,
                "message": "token not valid"        
            })
        }
    }
}
  