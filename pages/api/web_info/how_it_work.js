export default function handler(req, res) {
    res.status(200).json({ 
        "status": true,
        "message": "how it work was fetched",
        "data": [
            {
                "image": "https://via.placeholder.com/238x181",
                "title": "Consulting",
                "description": "Let our stylists hear you out and give you our opinions as to what would fabrics and shades would be most suitable for you."
            },
            {
                "image": "https://via.placeholder.com/238x181",
                "title": "Choose The Fabric",
                "description": "The fabrics that we exhibit are sourced only from the finest mills in The world. Each fabric characteristic represents comfort and durability. Our stylists will guide you while you browse through the collection."
            },
            {
                "image": "https://via.placeholder.com/238x181",
                "title": "Design Consultation",
                "description": "Our stylist will then recommend a style and cut to correspond with the event or occasion you need it for."
            },
            {
                "image": "https://via.placeholder.com/238x181",
                "title": "Measuring",
                "description": "This is when our experienced Tailor Master will introduce themselves and take your detailed measurements. All the measurements will then be cut to paper blocks and stored in our archives."
            },
            {
                "image": "https://via.placeholder.com/238x181",
                "title": "Fitting",
                "description": "On average between 7-14 days from your order placed, we will request you to visit us for the 1st fitting."
            },
            {
                "image": "https://via.placeholder.com/238x181",
                "title": "Final Fitting",
                "description": "Unless another fitting is required, this is when your garment is in its final stages to be handed over to you."
            },
            {
                "image": "https://via.placeholder.com/238x181",
                "title": "Taking Home Your Garment",
                "description": "After we are done putting the finishing touches on your commissioned piece, you should find that your garment flatters your shape and fits perfectly. When this is achieved, it is finally ready to take home! Congratulations."
            }

        ]
    })
}
  