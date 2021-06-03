export default function handler(req, res) {
    res.status(200).json({ 
        "status": true,
        "message": "testimonies fetched",
        "page": 1,
        "limit": 9,
        "total_page": 1,
        "total_data": 2,
        "data": [
            {
                "_id": "1",
                "image": "https://via.placeholder.com/82",
                "name": "Jhon Doe",
                "profession": "President",
                "description": "I really like the quality of the materials and the style it offers. Service also makes me want to order again.",
                "date": "04/05/2021",
                "star": 5
            },
            {
                "_id": "2",
                "image": "https://via.placeholder.com/82",
                "name": "Jhon Duck",
                "profession": "Comisaris",
                "description": "I really like it so much, i feel handsome.",
                "date": "04/06/2021",
                "star": 3
            },
            {
                "_id": "3",
                "image": "https://via.placeholder.com/82",
                "name": "Hanis",
                "profession": "Designer",
                "description": "I really like it so much, i feel beautiful.",
                "date": "01/06/2021",
                "star": 3.6
            },
        ]
    })
}
  