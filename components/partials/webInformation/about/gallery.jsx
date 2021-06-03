import parse from 'html-react-parser';

// module
import ImageGallery from './module/imageGallery'

const Gallery = ({t,data}) => {
    return (
        <>
            <div className="html-parse container-fluid px-5 py-5">
                {parse(data.history.description)}
            </div>        
            <div className="gallery container-fluid px-5 py-5">
                <ImageGallery data={data} />
            </div>
        </>
    )
}

export default Gallery ;