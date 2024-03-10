import { useState } from "react"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const People = () => {

    const [istoggled1, setIsToggled1] = useState(false);
    const [istoggled2, setIsToggled2] = useState(false);
    const [istoggled3, setIsToggled3] = useState(false);
    const [istoggled4, setIsToggled4] = useState(false);
    const [istoggled5, setIsToggled5] = useState(false);

    return (
        <div className="people-section">

            <button onClick={() => setIsToggled1(!istoggled1)}>Creative Fields<ExpandMoreIcon fontSize="small" /></button>
            {istoggled1 && (
                <div className="creativeFields">
                <p>All Creative Fields</p>
                <p>Architecture</p>
                <p>Art Design</p>
                <p>Branding</p>
                <p>Fashion</p>
                <p>Graphic Design</p>
                </div>
            )}

            <button onClick={() => setIsToggled2(!istoggled2)}>Location<ExpandMoreIcon fontSize="small" /></button>
            {istoggled2 && (
                <div className="location">
                <div className="location-selector">
                    <label for="cars">Country/Region</label>
                    <select name="country" id="country" placeholder="Country">
                        <option value="india">India</option>
                        <option value="usa">USA</option>
                        <option value="russia">Russia</option>
                        <option value="australia">Australia</option>
                    </select>
                </div>
                    <input type="text" placeholder="City" id="city" />
                </div>

            )}


            <button onClick={() => setIsToggled3(!istoggled3)}>Tools<ExpandMoreIcon fontSize="small" /></button>
            {istoggled3 && (
                <div className="tools">
                <label for="search-tool">Search Tool</label>
                <input id="search-tool" type="text" placeholder="Start typing to see list" />
                <ul type="none">
                    <li>Adobe Photoshop</li>
                    <li>Adobe Illustrator</li>
                    <li>Adobe InDesign</li>
                    <li>Adobe After Effects</li>
                    <li>Adobe Phtoshop Lightroom</li>
                </ul>
                </div>

            )}


            <button onClick={() => setIsToggled4(!istoggled4)}>Availability<ExpandMoreIcon fontSize="small" /></button>
            {istoggled4 && (
                <div className="availability">
                    <label for="all"><input type="radio" id="all" name="availability" value="all" />All</label>           
                    <label for="fullTime"><input type="radio" id="fullTime" name="availability" value="fullTime" />Full Time</label>       
                    <label for="freelanceProject"><input type="radio" id="freelanceProject" name="availability" value="freelanceProject" />Freelance/Project</label>
                </div>
            )}
            
            <button onClick={() => setIsToggled5(!istoggled5)}>Schools<ExpandMoreIcon fontSize="small" /></button>
            {istoggled5 && (
                <div className="tools">
                <input id="search-tool" type="text" placeholder="Start typing to see list" />
                <ul type="none">
                    <li>Pratt Institute</li>
                    <li>Savannah College of Art and Design (SCAD)</li>
                    <li>Rhode Island School Of Design (RISD)</li>
                    <li>Maryland Institute College of Art (MICA)</li>
                    <li>School Of Visual Arts (SVA)</li>
                </ul>
                </div>

            )}

        </div>
    )
}

export default People