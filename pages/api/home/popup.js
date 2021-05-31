export default function handler(req, res) {
    res.status(200).json({ 
        "status": true,
        "message": "popup was fetched",
        "data": {
            "image": "https://via.placeholder.com/650x550"
        }    
    })
}
  