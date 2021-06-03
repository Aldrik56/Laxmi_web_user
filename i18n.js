module.exports = {
    "locales": ["en", "id"],
    "defaultLocale" : "en",
    "pages" :{
        "*" : ["common","navbar","footer"],
        "/login" :["login"],
        "/login/forgotpassword" :["login"],
        "/login/register" :["login"],
        "/login/forgotpassword/[id]" :["login"],
        "/" :["home"],
        "/aboutus" :["aboutus"],
        "/contactus" :["contactus"]
    },
    "loadLocaleFrom": (lang, ns) =>
    import(`./public/locales/${lang}/${ns}.json`).then((m) => m.default)
}