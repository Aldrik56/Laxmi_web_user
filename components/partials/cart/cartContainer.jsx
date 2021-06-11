
// module
import Accordion from './module/accordion'
import ShoppingBag from './module/shoppingBag'

const CartContainer = ({t}) => {
    return (
        <div className="row w-100">
            <div className="col-12 col-lg-9">
                <Accordion t={t} />
            </div>
            <div className="col-12 col-lg-3">
                <ShoppingBag t={t} />
            </div>
        </div>
    )
}

export default  CartContainer;