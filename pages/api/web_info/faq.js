export default function handler(req, res) {
    res.status(200).json({ 
        "status": true,
        "message": "faq was fetched",
        "page": 1,
        "limit": 10,
        "total_page": 1,
        "total_data": 2,
        "data": [
            {
                "title": "Why would I choose a custom service when there are so many ready suits avaible at deparment stores?",
                "description": `<p style="box-sizing: border-box; margin-top: 0px; margin-bottom: 1rem; color: rgb(65, 65, 65); font-family: sans-serif; font-size: 14px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; text-align: left;"><span style="white-space:pre-wrap;"><strong>Authenticity&nbsp;</strong>&ndash; A custom made suit is unique and one-of-a kind. The sense of pride of walking into a gathering where no one can guess which designer label you&rsquo;re wearing is both worthy and pleasing.</span></p><p style="box-sizing: border-box; margin-top: 0px; margin-bottom: 1rem; color: rgb(65, 65, 65); font-family: sans-serif; font-size: 14px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; text-align: left;"><span style="white-space:pre-wrap;"><strong>Everlasting Elegance</strong>&nbsp;</span><span style="white-space:pre-wrap;">&ndash; <span style="white-space:pre-wrap;">Where any off-the-rack designer label suit will lose its value after one season and gets dumped into the &lsquo;sale&rsquo; basket, your custom suit can be worn after years and still hold exceptional value of class and elegance.</span>&nbsp;</span></p>`
            },
            {
                "title": "Whats is your price range? And how does it compare to a similar quality suit at a retail store",
                "description": `Authenticity – A custom made suit is unique and one-of-a kind. The sense of pride of walking into a gathering where no one can guess which designer label you’re wearing is both worthy and pleasing.`
            },
        ]    })
}
  