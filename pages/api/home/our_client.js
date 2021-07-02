export default function handler(req, res) {
    res.status(200).json({
        "status": true,
        "message": "our client was fetched",
        "data": [
          {
            "_id": "1",
            "image": "/img/clients/client1.png",
            "name": "Lexmark"
          },
          {
            "_id": "2",
            "image": "/img/clients/client2.png",
            "name": "Lexmark"
          },
          {
            "_id": "3",
            "image": "/img/clients/client3.png",
            "name": "Lexmark"
          }          
        ]
    })
}
  