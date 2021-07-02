export default function handler(req, res) {
    res.status(200).json({
        "status": true,
        "message": "Details was fetched",
        "data": 
          {
            "_id": "1",
            "images": [
              {
                "small": "/img/product_gallery/product1.png",
                "original": "/img/product_gallery/product1.png"
              },
              {
                "small": "/img/product_gallery/product2.png",
                "original": "/img/product_gallery/product2.png"
              },
              {
                "small": "/img/product_gallery/product3.png",
                "original": "/img/product_gallery/product3.png"
              },
              {
                "small": "/img/product_gallery/product4.png",
                "original": "/img/product_gallery/product4.png"
              }

            ],
            "title": "barang baru bosque",
            "category": "batiks",
            "description": "Handmade SHIRT laxmi tailors. Made by best-in-class Tailor With decades of experience, we guarantee the quality and style of the stitches you order.",
            "stocks": 123,
            "currency": "IDR",
            "price": 1900000,
            "is_new": false,
            "about_this_garment": "Handmade SHIRT laxmi tailors. Made by best-in-class Tailor With decades of experience, we guarantee the quality and style of the stitches you order.",
            "fabric_detail": {
              "name": "Perkins, Merino Wool",
              "fabric_category": "100% Wool",
              "detail": {
                "season": "Premium",
                "thread_style": "",
                "brightness": "Year round",
                "super_shiny": "Light Grey",
                "material": "",
                "tone": "",
                "weight": {
                  "value": "120",
                  "unit": "oz/yd2"
                },
                "thread_count": "",
                "opacity": "",
                "waterproof": "",
                "stretchy_text": "",
                "stretchy": ""
              },
              "quality": {
                "_id": "",
                "name": "Premium",
                "price": ""
              },
              "information": [
                {
                  "_id": "123",
                  "name": "Perkins",
                  "description": "Our wool suit fabrics are the standard choice for a men's suit. Nothing can go wrong when choosing a made to measure wool suit. Most of them can be used all year long, and your grey suit will be perfect for any event, from business to casual and even weddings. And rememberthree piece suitare the the easiest way to add a smart touch to your favorite outfit. with any other outfit",
                  "label": "",
                  "file": "/img/fabric/fabricMaterial.png"
                }
              ],
              "bar": {
                "excellence": "",
                "warmth": "",
                "weight": "",
                "yarn": ""
              },
              "composition": [
                {
                  "_id": "",
                  "fabric_category": "",
                  "percentage": ""
                }
              ],
              "file": "/img/fabric/fabricMaterial.png"
            }
          }
        
    })
}
  