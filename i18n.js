module.exports = {
    "locales": ["en", "id"],
    "defaultLocale" : "en",
    "pages" :{
        "*" : ["common","navbar","footer","notFound"],
        "/login" :["login"],
        "/login/forgotpassword" :["login"],
        "/login/register" :["login"],
        "/login/forgotpassword/[id]" :["login"],
        "/" :["home",'product'],
        "/productportal/[category]" :["home",'product'],
        "/aboutus" :["aboutus"],
        "/contactus" :["contactus"],
        "/products" : ["product"],
        "/products/[category]" : ["product"],
        "/products/[category]/[id]" : ["product"],
        "/products/cart" : ["cart"],
        "/products/cart/order" : ["cart"],
        "/accountdetail" : ["accountDetail"],
        "/changeemail" : ["accountDetail"],
        "/notification" : ["accountDetail"],
        "/myorder" : ["accountDetail"],
        "/myaddress" : ["accountDetail"],
        "/custom/[category]" : ["custom"]
    },
    "loadLocaleFrom": (lang, ns) =>
    import(`./public/locales/${lang}/${ns}.json`).then((m) => m.default)
}