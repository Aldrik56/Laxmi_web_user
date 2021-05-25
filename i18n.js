module.exports = {
    "locales": ["en", "id"],
    "defaultLocale" : "en",
    "pages" :{
        "*" : ["common","navbar"],
        "/login" :["login"],
        "/login/forgotpassword" :["login"],
        "/login/register" :["login"],
        "/login/forgotpassword/[id]" :["login"],

    },
    "loadLocaleFrom": (lang, ns) =>
    import(`./public/locales/${lang}/${ns}.json`).then((m) => m.default)
}