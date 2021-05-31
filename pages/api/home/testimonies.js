export default function handler(req, res) {
    res.status(200).json({ 
        "status": true,
        "message": "testimonies was fetched",
        "data": [
            {
                "_id": "1",
                "image": "https://via.placeholder.com/220",
                "name": "Jhon Doe",
                "profession": "programmer",
                "description": "I am happy about the suits I picked up yesterday. The quality and the services rendered are excellent. Thank you. With best regards.",
                "date": "04/05/2021"
            },
            {
                "_id": "2",
                "image": "https://via.placeholder.com/220",
                "name": "Dafa",
                "profession": "Chef",
                "description": "mantap banget web ini uhuy I am happy about the suits I picked up yesterday. The quality and the services rendered are excellent. Thank you. With best regards. I am happy about the suits I picked up yesterday. The quality and the services rendered are excellent. Thank you. With best regards.",
                "date": "04/05/2021"
            },
            {
                "_id": "3",
                "image": "https://via.placeholder.com/220",
                "name": "Zakhulhaq",
                "profession": "designer",
                "description": "I am happy about the suits I picked up yesterday. The quality and the services rendered are excellent. Thank you. With best regards.",
                "date": "04/05/2021"
            },
            {
                "_id": "4",
                "image": "https://via.placeholder.com/220",
                "name": "Fachrudin",
                "profession": "Photgrapher",
                "description": "I am happy about the suits I picked up yesterday. The quality and the services rendered are excellent. Thank you. With best regards.",
                "date": "04/05/2021"
            },
        ]
    })
}
  