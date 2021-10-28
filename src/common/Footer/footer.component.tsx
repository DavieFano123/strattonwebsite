import * as React from 'react';
import {useHistory} from 'react-router-dom';
import logo from "../../assets/images/logo/Logo_Plain.png";
import facebook from "../../assets/images/logo/facebook.png";
import instagram from "../../assets/images/logo/instagram.png";
import twitter from "../../assets/images/logo/twitter.png";
import bbbrating from "../../assets/images/logo/BBB-Rating.png";
import youtube from "../../assets/images/logo/youtube.png";

interface Props { }

const FooterComponent: React.FC<Props> = () => {

    const [details, setDetails] = React.useState<any>([]);
    const history = useHistory();

    const goToPublish = () => {
        history.push('/publish');
            window.scrollTo(0, 0);
            behavior: 'smooth';
    }

    const goToAboutus = () => {
        history.push('/about-us');
            window.scrollTo(0, 0);
            behavior: 'smooth';
    }

    const goToContactUs = () => {
        history.push('/contact-us');
            window.scrollTo(0, 0);
            behavior: 'smooth';
    }

    return (
        <footer className="site-footer">
            <div className="footer-container">
                <div className="row row-footer">
                    <div className="col-sm-12 col-md-6">
                        <div className="footer-logo">
                            <a href="index.html"><img src={logo} className="img-fluid"
                                alt="logo" /></a>
                        </div>
                    </div>
                    <div className="flex">
                    <div className="col-xs-5 col-sm footer-nav">
                        {/* <h6>Categories</h6> */}
                        <ul className="footer-links">
                            <li><a href="/">Free Publishing Guide</a></li>
                            <li><a onClick={() => goToPublish()}>Publish Your Book</a></li>
                            <li><a onClick={() => goToAboutus()}>About Us</a></li>
                        </ul>
                    </div>

                    <div className="col-xs-5 col-sm footer-nav">
                        {/* <h6>Quick Links</h6> */}
                        <ul className="footer-links">
                            <li><a href="/">Library</a></li>
                            <li><a href="/">FAQs</a></li>
                            <li><a onClick={() => goToContactUs()}>Contact Us</a></li>
                        </ul>
                    </div>
                    </div>
                </div> 
            
            </div>
            <div className="copyright-section">
                <div className="copyright-row">
                    <div className="col-4 align-self-center copyright-tag">
                        <p className="copyright-text">Copyright &copy; 2021 Stratton Press Publishing
                        </p>
                    </div>
                    <div className="col-4 align-self-center bbbrating">
                        <img src={bbbrating} alt="..."/>
                    </div>
                    <div className="col-4 align-self-center">
                        <ul className="social-icons">
                            <li><a className="facebook" href="https://www.facebook.com/StrattonPressInc/" target="_blank"><img src={facebook} alt="..."/></a></li>
                            <li><a className="instagram" href="https://www.instagram.com/strattonpress/" target="_blank"><img src={instagram} alt="..."/></a></li>
                            <li><a className="twitter" href="https://twitter.com/strattonpress/" target="_blank"><img src={twitter} alt="..."/></a></li>
                            <li><a className="youtube" href="https://twitter.com/strattonpress/" target="_blank"><img src={youtube} alt="..."/></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default FooterComponent;