
const SubCategory = ({params,handleSubCategory}) => {

    const subData = [
        {
            title : "Suit",
            subCategory : [
                {
                    id : 1,
                    name : "Mandarin"
                },
                {
                    id : 2,
                    name : "Business Suit"
                },
                {
                    id : 3,
                    name : "Three Piece"
                }                
            ]
        },
        {
            title : "Shirt",
            subCategory : [
                {
                    id : 4,
                    name : "Tuxedo Shirt"
                },
                {
                    id : 5,
                    name : "French Cuff"
                }                
            ]
        },
        {
            title : "Batik",
            subCategory : [
                {
                    id : 6,
                    name : "Long Sleeve"
                },
                {
                    id : 7,
                    name : "Short Sleeve"
                }                
            ]
        }

    ]

    return (
        <div className="sub-category">
            {
                subData.map((data,index) => (
                    <div key={index}>
                        <p className="title">{data.title}</p>   
                        {
                            data.subCategory.map((dataSub,index) => (
                                <p 
                                    onClick={() => handleSubCategory(dataSub.id)}
                                    key={index} 
                                    className={`sub-title mb-0 ${dataSub.id == params.sub_category ? 'active' : ''}`}>{dataSub.name}</p>   
                            ))
                        }                 
                    </div>
                ))
            }
        </div>
    )
}

export default SubCategory ;