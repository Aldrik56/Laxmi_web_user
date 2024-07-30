import axios from "../../../helpers/axiosConfig"

export default async function handler(req, res) {
    console.log("req.headers");
    console.log(req.headers);
    const { fabric, collar, cuff, sleeve, bottom, chestpocket } = req.query
    if (req.method === 'GET') {
        axios.get(`/custom/style?fabric=${fabric}&collar=${collar}&cuff=${cuff}&sleeve=${sleeve}&bottom=${bottom}&chestpocket=${chestpocket}`
        ).then((response) => {
            console.log(response);
            const { data } = response.data
            res.status(200).json({
                "status": true,
                "data": data
            })
        }).catch((e) => {
            const { message } = e.response.data
            res.status(200).json({
                "status": false,
                "message": message,
            })
        })
    }
}