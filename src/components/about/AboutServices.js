import {Link} from 'react-router-dom';

const AboutServices = (props) => {
    return (
        <li>
            <span><i className={props.className}></i><b><Link to={props.url}>{props.title}</Link></b></span>
        </li>
    );
}

export default AboutServices;