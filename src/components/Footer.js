import './footer.css'
import { useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Footer = () => {

    const languages = ['English', 'Spanish', 'Portuguese', 'Dutch', 'Chinese', 'Hindi', 'Japanese']
    const [language, setLanguage] = useState(languages[0]);

    return (
        <div className='footer'>
            <div className='footer-top'>
                <div className='logo'>
                    <h1>Behance</h1>
                </div>
                <div className='creatives'>
                    <h3>Built For Creatives</h3>
                        <p>Find Inspiration</p>
                        <p>Get Hired</p>
                        <p>Sell Creative Assets</p>
                        <p>Sell Freelance Services</p>
                </div>
                <div className='talents'>
                    <h3>Find Talent</h3>
                        <p>Post a Job</p>
                        <p>All Featured Freelance Designers</p>
                        <p>Graphic Designers</p>
                        <p>Photographers</p>
                        <p>Video Editors</p>
                        <p>Web Designers</p>
                        <p>Illustrators</p>

                </div>
                <div className='behance'>
                    <h3>behance</h3>
                        <p>About Behance</p>
                        <p>Adobe Portifolio</p>
                        <p>Download the App</p>
                        <p>Blog</p>
                        <p>Careers</p>
                        <p>Help Center</p>
                        <p>Contact Us</p>
                </div>
                <div className='socials'>
                    <h3>Social</h3>
                        <p>Facebook</p>
                        <p>Instagram</p>
                        <p>Twitter</p>
                        <p>LinkedIn</p>
                        <p>Pinterest</p>
                </div>
            </div>
            <div className='footer-bottom'>
                <div className='footer-bottom-copyright'>
                    <p>Adobe</p>
                    <p>© 2024 Adobe Inc. All rights reserved.</p>
                </div>
                <div>
                    <div  className='footer-bottom-content'>
                        <div className="languages">
                            <button class="languageBtn">{language}<ExpandMoreIcon fontSize="small"/></button>
                                <div id="languagesDropdown" class="languagesDropdown">
                                    {languages.length > 0 && languages.map((option) => (
                                        <a value={option} onClick={() => setLanguage(option)}>{option}</a>
                                    ))}
                                </div>
                        </div>
                    
                    
                        <p>TOU</p>
                        <p>Privacy</p>
                        <p>Community</p>
                        <p>Do not sell or share my personal information</p>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default Footer