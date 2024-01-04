import Image from 'next/image'
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

const AccentSubCategoryFilter = ({
    t,
    data,
    setOpenFabric,
    setOpenData }) => {
    return (
        <div className="row mt-4">
            {
                data.map((data, index) => (
                    <div
                        onClick={() => {
                            if (data.isData) {
                                setOpenData(true)
                            } else if (data.modalFIlter) {
                                setOpenFabric(true)
                            } else {
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
            {/* <div className="row">
                {
                    colorList.map((data, index) => (
                        <div key={index} className="col-6 col-md-4 col-lg-2 my-2">
                            <div style={{
                                backgroundColor: data
                            }} className="color-item text-pointer"></div>
                        </div>
                    ))
                }
            </div> */}
        </div>
    )
}

export default AccentSubCategoryFilter