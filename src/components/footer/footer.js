import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faFacebook } from "@fortawesome/free-brands-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"

const Footer = () => {
    return (
        <div className = "footer fixed-bottom bg-dark">
    <div className = "social-btns" >

           
            <a className = "btn github" href = "https://github.com/kavitagupta972" target="_blank"><FontAwesomeIcon className = "icon" icon={faGithub}/></a>

            <a className = "btn twitter"  href = "https://twitter.com/sharetoolearn" target="_blank"><FontAwesomeIcon className = "icon" icon={faTwitter}/></a>

            <a className = "btn instagram"  href = "https://www.instagram.com/sharetoolearn/" target="_blank"><FontAwesomeIcon className = "icon" icon={faInstagram}/></a>
            <a className = "btn  facebook"  href = "https://www.facebook.com/sharetoolearn" target="_blank"><FontAwesomeIcon className = "icon" icon={faFacebook}/></a>
            <a className = "btn linkedin"  href = "https://www.facebook.com/sharetoolearn" target="_blank"><FontAwesomeIcon className = "icon" icon={faLinkedin}/></a>
    </div>
    </div>
    );
}

export default Footer;