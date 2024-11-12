import Link from 'next/link'
import useTranslation from 'next-translate/useTranslation';

const BreadCrumb = ({path}) => {
    const {t} = useTranslation("common")

    return (
        <div className="breadcrumb">
            <p> 
                <Link href={'/'} > 
                    <a className="link">{t("Home")}</a> 
                </Link> 
            {
                path.map((data,index) => (
                    <span className="link-container" key={index}>
                        <span className="mx-3 link-splitter" key={index}>/</span>
                        <Link href={data.path} > 
                            <a className={`link ${path.length-1 === index ? 'active' : ''}`}>
                                {data.name}
                            </a>
                        </Link>
                    </span>
                ))
            }</p>
        </div>
    )
}

export default BreadCrumb ;