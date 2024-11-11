import axios from "axios";
const OrderContainer = ({ fabricSelect ,category, t, setSidebar, sidebar, price, dataStyle }) => {
    const postAddToCart = async () => {
        try {
            var response = await axios.post(`/api/cart/cart`,
                {
                    category: category,
                    fabric: fabricSelect.fabric_name,
                    collar: dataStyle.collar.name,
                    cuffs: dataStyle.cuffs.name,
                    sleeve: dataStyle.sleeve.name,
                    bottom: dataStyle.bottom.name,
                    chest_pocket: dataStyle.pocket.name,
                    // price: price,
                    placket: dataStyle.placket.name
                }
            );

            const { status } = response;
        
        // Check if the status is 200
        if (status === 200) {
            // Log the entire response object
            console.log("Response data:", response);
        } else {
            // Handle other status codes
            console.log("Error in posting data, status code:", status);
        }
        } catch (e) {
            console.log(e);
        } finally {
            
        }
    }
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
                        postAddToCart()
                        console.log(dataStyle)
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