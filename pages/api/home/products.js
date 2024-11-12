export default function handler(req, res) {
    res.status(200).json({ 
        "status": true,
        "message": "home products was fetched",
        "data": [
           {
                "_id": "1",
                "image": "https://via.placeholder.com/332x430",
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
                "image": "https://via.placeholder.com/332x430",
                "title": "Suit - Pattern | K0022",
                "category" : "suits",
                "sub_category" : "dasdasd",    
                "stocks": 123,
                "currency": "IDR",
                "price": 300000,
                "is_new": true,
                "is_cart": false
            },
            {
                "_id": "3",
                "image": "https://via.placeholder.com/332x430",
                "category" : "suits",
                "sub_category" : "dasdasd",    
                "stocks": 123,
                "title": "Suit - Navy 2 | K0032",
                "currency": "IDR",
                "price": 350000,
                "is_new": false,
                "is_cart": false
            },    
            {
                "_id": "4",
                "image": "https://via.placeholder.com/332x430",
                "category" : "suits",
                "sub_category" : "dasdasd",    
                "title": "Suit - Navy | K0012",
                "stocks": 123,
                "currency": "IDR",
                "price": 1000000,
                "is_new": false,
                "is_cart": true
            },
            {
                "_id": "5",
                "image": "https://via.placeholder.com/332x430",
                "category" : "suits",
                "sub_category" : "dasdasd",    
                "title": "Suit - Pattern | K0022",
                "stocks": 123,
                "currency": "IDR",
                "price": 300000,
                "is_new": true,
                "is_cart": false
            },
            {
                "_id": "6",
                "image": "https://via.placeholder.com/332x430",
                "category" : "suits",
                "sub_category" : "dasdasd",    
                "stocks": 123,
                "title": "Suit - Navy 2 | K0032",
                "currency": "IDR",
                "price": 350000,
                "is_new": false,
                "is_cart": false
            }                
        ] 
    })
}
  