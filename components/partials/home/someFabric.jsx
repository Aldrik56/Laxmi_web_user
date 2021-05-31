// elements
import Heading from '../../elements/heading'
import Fabric from '../../elements/fabric/fabricHome'

const SomeProduct = ({t}) => {
    const dataFabric = [
        {
            image : '/img/fabric/fabric1.png',
            title : 'SUITS, Vests & Pants Fabrics'
        },
        {
            image : '/img/fabric/fabric2.png',
            title : 'Shirt Fabrics'
        },
        {
            image : '/img/fabric/fabric3.png',
            title : 'Batik Fabrics'
        }
    ]
    return(
        <div className="someProduct pt-5">
            <Heading title={t('Some Of Our Fabrics')} />
            <div className="container-fluid">
                <div className="row">
                    {
                        dataFabric.map((data,index) => (
                            <Fabric data={data} key={index} />
                        ))
                    }
                </div>
                <div className="d-flex justify-content-center mt-5">
                    <button 
                        type="button" 
                        className="btn btn-primary btn-lg py-3">{t('SEE MORE')}</button>
                </div>
            </div>
        </div>
    )
}

export default SomeProduct ;