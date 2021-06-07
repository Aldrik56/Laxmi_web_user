export default function handler(req, res) {
    res.status(200).json({ 
        "status": true,
        "message": "banner was fetched",
        "data": {
            "image": "/img/promotion/banner.jpg",
            // "image": "https://via.placeholder.com/1280x447",
            // "image": "https://www.wallpapertip.com/wmimgs/178-1781587_man-in-suit-local-feature-man-in-suit.jpg",
            "text" : {
                "color" : "white",
                "title" : "LOOKBOOK THIS MONTH 2021",
                "desc" : "New looks !"
            },
            "token_promo": "blabslanslas"
        }  
    })
}
  