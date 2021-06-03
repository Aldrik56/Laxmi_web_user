import parse from 'html-react-parser';

const About = ({t,data}) => {
    return (
        <div className="html-parse container-fluid px-5">
            {parse(data.about_us)}
        </div>
    )
}

export default About ;