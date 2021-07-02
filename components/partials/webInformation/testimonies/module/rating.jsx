import {StarRate,StarRateHalf,StarRateEmpty} from '../../../../elements/icon';

const Rating = ({data}) => {
    let star = []

    for (let i = 1; i < 6; i++) {
        if(data < i){
            if(data >= i-0.5){
                star.push(<StarRateHalf />)
            }else{
                star.push(<StarRateEmpty />)
            }
        }else{
            star.push(<StarRate />)
        }
    }
    return(
        <div className="d-flex flex-row">
            {star}
        </div>
    )
}

export default Rating ;