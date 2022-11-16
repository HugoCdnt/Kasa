// STYLES //
import '../styles/Footer.css';

// IMAGES //
import white_logo from '../images/white_logo.svg';

const Footer = () => {
    return (
        <footer>
            <img className='white-logo' src={white_logo} alt={`Logo KASA`} />
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
};

export default Footer;