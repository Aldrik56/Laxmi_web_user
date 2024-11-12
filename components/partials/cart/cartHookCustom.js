import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react"

const cartHookCustom = () => {
    const router = useRouter()
    const [listCart, setListCart] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const category = []

    useEffect(() => {
        getCustomStyle()
    }, [])

    useEffect(async () => {
        try {
            const response = await axios.get(`/api/cart/cart`);
            if (response.status === 200) {
                setListCart(response.data.data); // Make sure you are setting the correct part of the response
                setIsLoading(false);
            } else {
                console.log("Error in fetching data, status code:", response.status);
            }
        } catch (e) {
            console.error('Error details:', e.response ? e.response.data : e.message);
        }
    }, [])

    const getCustomStyle = async () => {
        try {
            var response = await axios.get(`/api/cart/cart`);
            const { status, data } = response.data
            setDataStyle(newDataStyle)
        } catch (e) {
            console.log(e);
        }
    }

    return {
        listCart,
        isLoading,
        category,
        setListCart,
        setIsLoading,
    }
}
export default cartHookCustom