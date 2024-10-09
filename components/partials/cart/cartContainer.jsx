
// module
import Accordion from './module/accordion'
import ShoppingBag from './module/shoppingBag'
import {useRouter} from 'next/router'
import {useState, useEffect} from 'react'
import axios from 'axios'
const CartContainer = ({t}) => {
    const router = useRouter();
    const data = router.query.data ? JSON.parse(router.query.data) : null
    const [listCart, setListCart] = useState(null);


    return (
        <div className="row w-100">
            <div className="col-12 col-lg-9">
                <Accordion t={t} cart={listCart} data={data}/>
            </div>
            <div className="col-12 col-lg-3">
                <ShoppingBag t={t} />
            </div>
        </div>
    )
}

export default  CartContainer;