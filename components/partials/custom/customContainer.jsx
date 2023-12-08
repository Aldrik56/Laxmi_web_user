import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import Link from 'next/link'
import Image from 'next/image'

// elements
import { ChevronRight } from '../../elements/icon'

// sidebar
import FabricContainer from './sidebar/fabricContainer'
import StyleContainer from './sidebar/styleContainer'
import AccentContainer from './sidebar/accentContainer'

import ModelContainer from './modelContainer'
import DetailContainer from './detailContainer'

const CustomContainer = ({ t }) => {
    const [sidebar, setSidebar] = useState(1)
    const [fabricSelect, setFabricSelect] = useState({})
    const [styleSelect, setStyleSelect] = useState({})

    const router = useRouter()
    const { category } = router.query

    const StepSidebar = () => {
        switch (sidebar) {
            case 1:
                return <FabricContainer t={t} onClick={(v) => {
                    setFabricSelect(v);
                }} />
            case 2:
                return <StyleContainer t={t} onClick={(v) => {
                    setStyleSelect(v);
                }} />
            case 3:
                return <AccentContainer t={t} />
            default:
                return <p>Page Not Found</p>
        }
    }

    return (
        <div className="container-fluid custom">
            <div className="position-relative w-100 d-flex justify-content-center align-items-center nav">
                {/* <div className="hamburger text-pointer">
                    <Image 
                        src="/img/icon/dehaze.svg" 
                        alt="laxmi tailer"
                        width={26}
                        height={26} />                        
                </div>                                 */}
                {/* <div className="logo text-pointer">
                    <Link href='/'>
                        <Image
                            src="/img/logo.png"
                            alt="laxmi tailer"
                            width={60}
                            height={52} />
                    </Link>
                </div> */}
                <div className="stepper mt-4 d-flex flex-row">
                    <p
                        onClick={() => setSidebar(1)}
                        className={`${sidebar === 1 ? 'active' : ''} text-pointer`}>{t("Fabrics")}</p>
                    <ChevronRight />
                    <p
                        onClick={() => setSidebar(2)}
                        className={`${sidebar === 2 ? 'active' : ''} text-pointer`}>{t("Style")}</p>
                    {
                        category !== "trousers" ?
                            <>
                                <ChevronRight />
                                <p
                                    onClick={() => setSidebar(3)}
                                    className={`${sidebar === 3 ? 'active' : ''} text-pointer`}>{t("Accents")}</p>
                            </> : null
                    }
                </div>
            </div>
            <hr className="hr-stepper w-100 mb-0" />
            <div className="row">
                <div className="col-4">
                    <StepSidebar />
                </div>
                <div className="col-5 d-flex justify-content-center">
                    <ModelContainer t={t} fabricSelect={fabricSelect} styleSelect={styleSelect} category={category.toLowerCase()} />
                </div>
                <div className="col-3">
                    <DetailContainer
                        category={category}
                        sidebar={sidebar}
                        setSidebar={setSidebar}
                        t={t} />
                </div>
            </div>
        </div>
    )
}

export default CustomContainer;