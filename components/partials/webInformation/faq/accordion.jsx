import Image from 'next/image'
import parse from 'html-react-parser';

const Accordion = ({data,index}) => {
    return (
        <>
            <div className="accordion-item" key={index}>
                <h2 className="accordion-header" id={`heading${index}`}>
                <button 
                    className="accordion-button collapsed" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target={`#collapse${index}`} 
                    aria-expanded="false" 
                    aria-controls={`collapse${index}`}>
                    <div className="img-container">
                        <Image
                            width={30}
                            height={57} 
                            src='/img/icon/question.svg' 
                            alt="laxmi" />  
                    </div>
                    {data.title}
                </button>
                </h2>
                <div id={`collapse${index}`} className="accordion-collapse collapse" aria-labelledby={`heading${index}`} data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    {parse(data.description)}
                </div>
                </div>
            </div>       
        </>
    )
}

export default Accordion