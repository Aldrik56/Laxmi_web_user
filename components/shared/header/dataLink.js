export default [
    {
        title : "Home",
        path : "/",
        extend : false
    },
    {
        title : "Product",
        path : "/product",
        extend : true,
        subMenu : [
            {
                title : "suits",
                path : "/Suits"
            },
            {
                title : "shirts",
                path : "/Shirts"
            },
            {
                title : "blazzers",
                path : "/Blazzers"
            },
            {
                title : "tuxedo",
                path : "/Tuxedo"
            },
            {
                title : "batiks",
                path : "/Batik"
            },
            {
                title : "vests",
                path : "/Vest"
            },
            {
                title : "bomber jacket",
                path : "/BomberJacket"
            }
        ]
    },
    {
        title : "Custom",
        path : "/custom",
        extend : true,
        subMenu : [
            {
                title : "suits",
                path : "/Suits",
                img : "/img/product_gallery/suits.png"
            },
            {
                title : "shirts",
                path : "/Shirts",
                img : "/img/product_gallery/shirt.png"
            },
            {
                title : "blazzers",
                path : "/Blazzers",
                img : "/img/product_gallery/blazer.png"
            },
            {
                title : "trousers",
                path : "/Trousers",
                img : "/img/product_gallery/trouser.png"
            },
            {
                title : "tuxedo",
                path : "/Tuxedo",
                img : "/img/product_gallery/tuxedo.png"
            },
            {
                title : "batiks",
                path : "/Batik",
                img : "/img/product_gallery/batik.png"
            },
            {
                title : "vests",
                path : "/Vest",
                img : "/img/product_gallery/vests.png"
            }
        ]        
    },
    {
        title : "Know More",
        path : "/knowmore",
        extend : true,
        subMenu : [
            {
                title : "Why Custom",
                path : "/WhyCustom"
            },
            {
                title : "How It Works",
                path : "/HowItWorks"
            },
            {
                title : "About Us",
                path : "/AboutUs"
            },
            {
                title : "Our Fabrics",
                path : "/OurFabrics"
            },
            {
                title : "Reviews",
                path : "/Reviews"
            },
            {
                title : "Contact Us",
                path : "/ContactUs"
            },
            {
                title : "Blog",
                path : "/Blog"
            },
            {
                title : "Social Media",
                path : "/SocialMedia"
            }
        ]
    },
    {
        title : "Language",
        path : "/language",
        extend : true,
        subMenu : [
            {
                title : "English",
                img : "/img/icon/ID_flag.png"
            },
            {
                title : "Indonesian",
                img : "/img/icon/UK_flag.png"
            }
        ]        
    },
    {
        title : "My Account",
        path : "/account",
        extend : true,
        subMenu : [
            {
                title : "Customer Data",
                path : "/CustomerData",
                img : "/img/icon/profile.svg"
            },
            {
                title : "Order",
                path : "/Order",
                img : "/img/icon/paper.svg"
            },
            {
                title : "Notification",
                path : "/Notification",
                img : "/img/icon/bell_notification.svg"
            },
            {
                title : "Measurement Profiles",
                path : "/MeasurementProfiles",
                img : "/img/icon/straighten.svg"
            },
            {
                title : "Address",
                path : "/Address",
                img : "/img/icon/loc_pin.svg"
            },
            {
                title : "Log Out",
                path : "/LogOut",
                img : "/img/icon/power.svg"
            }            
        ]   
    }
]