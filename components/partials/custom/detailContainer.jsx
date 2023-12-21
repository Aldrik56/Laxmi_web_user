const OrderContainer = ({ category, t, setSidebar, sidebar, price }) => {
    return (
        <div className="detail-container">
            <p className="title">{t("Custom")} <br /> <span className="fw-bold">{t(`common:${category}`)}</span> </p>
            <p className="price">${price},00</p>
            <p className="fabric-category">Cotton
                <br />
                <span className="ref">ref: Mayfield</span>
                <br />
                <span className="ref detail text-pointer">{t("Fabrics")} {t("Details")}</span>
            </p>
            <div className="d-flex justify-content-end">
                <button
                    onClick={() => {
                        if (sidebar < 3) {
                            if (category === "trousers") {
                                if (sidebar < 2) {
                                    setSidebar(sidebar + 1)
                                }
                            } else {
                                setSidebar(sidebar + 1)
                            }
                        }
                    }}
                    className="btn btn-primary py-2 mt-4 px-5">{t("NEXT")}</button>
            </div>
            <p className="recieve mt-4">{t("Receive it in")} 13 {t("Days")}</p>
        </div>
    )
}

export default OrderContainer