export default function handler(req, res) {
    res.status(200).json({ 
        "status": true,
        "message": "popup was fetched",
        "data": {
            "image": "/img/promotion/popup.png"
        }    
    })
}
  