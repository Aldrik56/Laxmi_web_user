export default function handler(req, res) {
    res.status(200).json({ 
        "status": true,
        "message": "products was fetched",
        "page": 1,
        "limit": 9,
        "total_page": 1,
        "total_data": 1,
        "data": [
            {
                "_id": "1",
                "image": "https://via.placeholder.com/314",
                "title": "Suit - Navy | K0012",
                "category" : "suits",
                "sub_category" : "dasdasd",    
                "stocks": 123,
                "currency": "IDR",
                "price": 1000000,
                "is_new": false,
                "is_cart": true
            },
            {
                "_id": "2",
                "image": "https://via.placeholder.com/314",
                "title": "Suit - Navy | K0013",
                "category" : "suits",
                "sub_category" : "dasdasd",    
                "stocks": 3,
                "currency": "IDR",
                "price": 1500000,
                "is_new": false,
                "is_cart": false
            },
            {
                "_id": "3",
                "image": "https://via.placeholder.com/314",
                "title": "Suit - Navy | K0014",
                "category" : "suits",
                "sub_category" : "dasdasd",    
                "stocks": 5,
                "currency": "IDR",
                "price": 3000000,
                "is_new": true,
                "is_cart": false
            },
            {
                "_id": "4",
                "image": "https://via.placeholder.com/314",
                "title": "Suit - Navy | K0015",
                "category" : "suits",
                "sub_category" : "dasdasd",    
                "stocks": 10,
                "currency": "IDR",
                "price": 500000,
                "is_new": true,
                "is_cart": false
            }
        ]
    })
}
  