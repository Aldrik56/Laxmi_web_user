export default function handler(req, res) {
    res.status(200).json({
        "status": true,
        "message": "Filter was fetched",
        "data": {
            "collections": [
                {
                    "_id": "1",
                    "name": "Business Suits"
                },
                {
                    "_id": "2",
                    "name": "3 Piece Suits"
                },
                {
                    "_id": "3",
                    "name": "Wedding Suits 2021"
                },
                {
                    "_id": "4",
                    "name": "Double-Breasted Suits"
                }
            ],
            "category": [
                {
                    "_id": "5",
                    "name": "Mandarin",
                    "count": 363
                },
                {
                    "_id": "6",
                    "name": "Three Piece",
                    "count": 1453
                },
                {
                    "_id": "7",
                    "name": "Double Breasted",
                    "count": 479
                }              
            ],
            "style": [
                {
                    "_id": "8",
                    "name": "Single Button",
                    "count": 275
                },
                {
                    "_id": "9",
                    "name": "Two Button",
                    "count": 1779
                },
                {
                    "_id": "10",
                    "name": "Three Button",
                    "count": 257
                }              
            ],
            "material": [
                {
                    "_id": "11",
                    "name": "100% Wool",
                    "count": 414
                },
                {
                    "_id": "12",
                    "name": "Wool Blends",
                    "count": 1178
                },
                {
                    "_id": "13",
                    "name": "Linen",
                    "count": 667
                }            
            ],
            "color": [
                {
                    "_id": "14",
                    "name": "grey",
                    "hex_color": "#849CB4",
                    "file": ""
                },
                {
                    "_id": "15",
                    "name": "brown",
                    "hex_color": "#868686",
                    "file": ""
                },
                {
                    "_id": "16",
                    "name": "green",
                    "hex_color": "#7FC07F",
                    "file": ""
                },
                {
                    "_id": "17",
                    "name": "brown",
                    "hex_color": "#868686",
                    "file": ""
                },
                {
                    "_id": "18",
                    "name": "green",
                    "hex_color": "#7FC07F",
                    "file": ""
                }
            ],
            "pattern": [
                {
                    "_id": "19",
                    "name": "Plain",
                    "count": 414
                },
                {
                    "_id": "20",
                    "name": "Checked",
                    "count": 1178
                },
                {
                    "_id": "21",
                    "name": "Floral",
                    "count": 667
                }            
            ],
            "season": [
                {
                    "_id": "22",
                    "name": "Winter",
                    "count": 414
                },
                {
                    "_id": "23",
                    "name": "Summer",
                    "count": 1178
                },
                {
                    "_id": "24",
                    "name": "Year Round",
                    "count": 667
                }                
            ]
        }
    })
}
  