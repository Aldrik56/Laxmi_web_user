export default function handler(req, res) {
    if (req.method === 'POST') {
        res.status(200).json({ 
            "status": true,
            "message": "email was subscribe",        
        })
    }
}
  