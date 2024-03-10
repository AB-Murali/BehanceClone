import { useState } from "react"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Projects = ()=> {

    const [istoggled1, setIsToggled1] = useState(false);
    const [istoggled2, setIsToggled2] = useState(false);
    const [istoggled3, setIsToggled3] = useState(false);
    const [istoggled4, setIsToggled4] = useState(false);
    const [istoggled5, setIsToggled5] = useState(false);

   const colors = ['#FFFFFF', '#000000', '#FF0000', '#FFFF00', '#008000', '#0000FF', '#800080', '#C0C0C0']

    return (
        <div className="project-section">
            <button onClick={() => setIsToggled1(!istoggled1)}>Creative Fields<ExpandMoreIcon fontSize="small"/></button>
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

            <button onClick={() => setIsToggled2(!istoggled2)}>Availability<ExpandMoreIcon fontSize="small"/></button>
            {istoggled2 && (
                <div className="availability">
                    <label className="section-label" for="all"><input type="radio" id="all" name="availability" value="all" />All</label>
                    <label className="section-label" for="fullTime"><input type="radio" id="fullTime" name="availability" value="fullTime" />Full Time</label>
                    <label className="section-label" for="freelanceProject"><input type="radio" id="freelanceProject" name="availability" value="freelanceProject" />Freelance/Project</label>
                </div>
            )}
            
            <button onClick={() => setIsToggled3(!istoggled3)}>Location<ExpandMoreIcon fontSize="small"/></button>
            {istoggled3 && (
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

            <button onClick={() => setIsToggled4(!istoggled4)}>Tools<ExpandMoreIcon fontSize="small"/></button>
            {istoggled4 && (
                <div className="tools">
                    <label className="sectionSubHead" for="search-tool">Search Tool</label><br/>
                    <input id="search-tool" type="text" placeholder="Start typing to see list" /><br/>
                    <label className="sectionSubHead" for="popularTools">Popular Tools</label><br/>
                    <ul id="popularTools" type="none">
                        <li>Adobe Photoshop</li>
                        <li>Adobe Illustrator</li>
                        <li>Adobe InDesign</li>
                        <li>Adobe After Effects</li>
                        <li>Adobe Phtoshop Lightroom</li>
                    </ul>
                </div>

            )}

            <button onClick={() => setIsToggled5(!istoggled5)}>Color<ExpandMoreIcon fontSize="small"/></button>
            {istoggled5 && (
                <div className="colors">
                    {colors.map((color, i) => {
                        return <button key={i} style={{backgroundColor: color}} className="colorStyle"></button>
                    })}
                </div>
            )}
            
        </div>
    )
}


export default Projects