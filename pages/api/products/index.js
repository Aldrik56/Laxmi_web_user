import axiosConfig from "../../../helpers/axiosConfig";

export default async function handler(req, res) {

    // try {
    //     const response = await axios.get('/')
    // } catch (e) {

    // }
    res.status(200).json({
        "status": true,
        "message": "products was fetched",
        "page": 1,
        "limit": 9,
        "total_page": 1,
        "total_data": 1,
        "req": `${req.body}`,
        "data": [
            {
                "_id": "1",
                "image": "/img/product_gallery/product1.png",
                "title": "Suit - Navy | K0012",
                "stocks": 123,
                "currency": "IDR",
                "price": 1000000,
                "is_new": false
            },
            {
                "_id": "2",
                "image": "/img/product_gallery/product2.png",
                "title": "Suit - Navy | K0013",
                "stocks": 3,
                "currency": "IDR",
                "price": 1500000,
                "is_new": false
            },
            {
                "_id": "3",
                "image": "/img/product_gallery/product3.png",
                "title": "Suit - Navy | K0014",
                "stocks": 5,
                "currency": "IDR",
                "price": 3000000,
                "is_new": true
            },
            {
                "_id": "4",
                "image": "/img/product_gallery/product4.png",
                "title": "Suit - Navy | K0015",
                "stocks": 10,
                "currency": "IDR",
                "price": 500000,
                "is_new": true
            },
            {
                "_id": "5",
                "image": "/img/product_gallery/product5.png",
                "title": "Suit - Navy | K0014",
                "stocks": 5,
                "currency": "IDR",
                "price": 2000000,
                "is_new": true
            },
            {
                "_id": "6",
                "image": "/img/product_gallery/product6.png",
                "title": "Suit - Navy | K0015",
                "stocks": 10,
                "currency": "IDR",
                "price": 500000,
                "is_new": true
            }
        ]
    })
}
