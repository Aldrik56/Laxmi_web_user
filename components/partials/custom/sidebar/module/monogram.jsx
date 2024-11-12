
const fontList = [
    {
        fontFamily : "Mr Bedfort",
        type : "cursive"
    },
    {
        fontFamily : "Philosopher",
        type : "sans-serif"
    },
    {
        fontFamily : "Princess Sofia",
        type : "cursive"
    },
    {
        fontFamily : "Rakkas",
        type : "cursive"
    },
    {
        fontFamily : "Revalia",
        type : "cursive"
    },
    {
        fontFamily : "Ananda Black",
        type : "sans-serif"
    },
    {
        fontFamily : "Curetro",
        type : "sans-serif"
    },
    {
        fontFamily : "Naliko Betah",
        type : "sans-serif"
    },
]

const colorList = [
    "#28568C",
    "#DDB210",
    "#987734",
    "#C1386C",
    "#898279",
    "#B4272C",
    "#F0EFEC",
    "#359540"
]

const intialPosition = [
    "High",
    "Low",
    "Medium",
    "Cuff"
]

const Monogram = ({t,category}) => {
    return(
        <>
            <input 
                className="form-control mt-4" 
                type="search" 
                placeholder="Type your initials" />
            <p className="mt-4 title-sub-accent">{t("Font")} : </p>
            <div className="row">
                {
                    fontList.map((data,index) => (
                        <div className="col-12 col-lg-5" key={index}>
                            <div className="form-check d-flex align-items-center">
                                <input 
                                    className="form-check-input" 
                                    type="radio" 
                                    name="MonogramCheckbox" 
                                    id={`monogramItemCheck${index}`} 
                                    value="option1" />
                                <label 
                                    style={{
                                        fontFamily : data.fontFamily
                                    }}
                                    className="form-check-label" 
                                    for={`monogramItemCheck${index}`}>
                                    ABC
                                </label>
                            </div>
                        </div>
                    ))
                }
            </div>     
            <p className="mt-4 title-sub-accent">{t("Monogram Thread Color")} : </p>     
            <div className="row">
                {
                    colorList.map((data,index) => (
                        <div key={index} className="col-6 col-md-4 col-lg-2 my-2">
                            <div style={{
                                backgroundColor : data
                            }} className="color-item text-pointer"></div>
                        </div>
                    ))
                }
            </div>
            {
                category === "shirts" ?
                <>
                    <p className="mt-4 title-sub-accent">Initial Position : </p>      
                    <div className="row">
                        {
                            intialPosition.map((data,index) => (
                                <div className="col-12 col-lg-5" key={index}>
                                    <div className="form-check d-flex align-items-center">
                                        <input 
                                            className="form-check-input" 
                                            type="radio" 
                                            name="InitialPositionCheckbox" 
                                            id={`positionCheck${index}`} 
                                            value="option1" />
                                        <label  
                                            className="form-check-label" 
                                            for={`positionCheck${index}`}>
                                            {data}
                                        </label>
                                    </div>
                                </div>
                            ))
                        }
                    </div>                                      
                </>   : null
            }  
        </> 
    )
}

export default Monogram