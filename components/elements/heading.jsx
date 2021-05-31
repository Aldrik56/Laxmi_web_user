const Heading = ({title}) => {
    return(
        <>
            <h1 className="head text-center mt-5 mb-0">
                {title}
            </h1>
            <div className="d-flex justify-content-center">
                <hr />
            </div>        
        </>
    )
}

export default Heading;