const Heading = ({title}) => {
    return(
        <>
            <h1 className="head text-center mt-5 mb-0 text-capitalize">
                {title}
            </h1>
            <div className="d-flex justify-content-center text-capitalize">
                <hr />
            </div>        
        </>
    )
}

export default Heading;