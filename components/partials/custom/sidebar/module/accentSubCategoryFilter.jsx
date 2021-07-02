import Image from 'next/image'

const AccentSubCategoryFilter = ({
    t,
    data,
    setOpenFabric,
    setOpenData}) => {
    return(
        <div className="row mt-4">
            {
                data.map((data,index) => (
                    <div
                        onClick={() => {
                            if(data.isData){
                                setOpenData(true)
                            }else if(data.modalFIlter){
                                setOpenFabric(true)
                            }else{
                                return false
                            }
                        }}
                        key={index} 
                        className="text-pointer col-12 col-lg-6 d-flex flex-column align-items-center">
                        <Image
                            width={80}
                            height={80}
                            src={data.image} 
                            alt="laxmi" />   
                        <p className="text-center">{t(data.title)}</p> 
                    </div>    
                ))
            }
        </div>          
    )
}

export default AccentSubCategoryFilter