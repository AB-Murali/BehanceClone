import { useState } from "react";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Images = () => {

    const [istoggled1, setIsToggled1] = useState(false);
    const [istoggled2, setIsToggled2] = useState(false);
    const [istoggled3, setIsToggled3] = useState(false);
    const [istoggled4, setIsToggled4] = useState(false);
    const [istoggled5, setIsToggled5] = useState(false);
    const [istoggled6, setIsToggled6] = useState(false);
    const [istoggled7, setIsToggled7] = useState(false);
    const [istoggled8, setIsToggled8] = useState(false);

   const colors = ['#FFFFFF', '#000000', '#FF0000', '#FFFF00', '#008000', '#0000FF', '#800080', '#C0C0C0']

    return (
        <div className="image-section">
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

            <button onClick={() => setIsToggled2(!istoggled2)}>Tools<ExpandMoreIcon fontSize="small" /></button>
            {istoggled2 && (
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

            <button onClick={() => setIsToggled3(!istoggled3)}>Color<ExpandMoreIcon fontSize="small" /></button>
            {istoggled3 && (
                <div className="colors">
                    {colors.map((color, i) => {
                        return <button key={i} style={{backgroundColor: color}} className="colorStyle"></button>
                    })}
                </div>
            )}

            <button onClick={() => setIsToggled4(!istoggled4)}>Camera<ExpandMoreIcon fontSize="small" /></button>
            {istoggled4 && (
                <div className="tools">
                <label for="search-tool">Search Cameras</label>
                <input id="search-tool" type="text" placeholder="Start typing to see list" />
                <ul type="none">
                    <li>Canon</li>
                    <li>Nikon</li>
                    <li>Apple</li>
                    <li>Sony</li>
                    <li>Olympus</li>
                </ul>
                </div>

            )}

            <button onClick={() => setIsToggled5(!istoggled5)}>Lens<ExpandMoreIcon fontSize="small" /></button>
            {istoggled5 && (
                <div className="tools">
                <label for="search-tool">SEARCH LENSE</label>
                <input id="search-tool" type="text" placeholder="Start typing to see list" />
                <ul type="none">
                    <li>Canon</li>
                    <li>Fujifilm</li>
                    <li>Leica</li>
                    <li>Olympus</li>
                    <li>Panasonic</li>
                </ul>
                </div>

            )}

            <button onClick={() => setIsToggled6(!istoggled6)}>Tools<ExpandMoreIcon fontSize="small" /></button>
            {istoggled6 && (
                <div className="tools">
                <label for="search-tool">SHUTTER SPEED</label>
                <input id="search-tool" type="text" placeholder="Enter Shutter Speed" />
                <ul type="none">
                    <li>Slow</li>
                    <li>Medium</li>
                    <li>Fast</li>
                </ul>
                <label for="search-tool">APERTURE</label>
                <input id="search-tool" type="text" placeholder="Enter Aperture" />
                <ul type="none">
                    <li>Shallow</li>
                    <li>Normal</li>
                    <li>Deep</li>
                </ul>
                </div>

            )}


            <button onClick={() => setIsToggled7(!istoggled7)}>Lens<ExpandMoreIcon fontSize="small" /></button>
            {istoggled7 && (
                <div className="tools">
                <label for="search-tool">FOCAL LENGTH</label>
                <input id="search-tool" type="text" placeholder="Enter Focal Length" />
                <ul type="none">
                    <li>Wide Angle</li>
                    <li>Normal  Focal Length</li>
                    <li>Telephoto</li>
                </ul>
                </div>

            )}


            <button onClick={() => setIsToggled8(!istoggled8)}>GIFs<ExpandMoreIcon fontSize="small" /></button>
            {istoggled8 && (
                <div className="availability">    
                    <label for="allImages"><input type="radio" id="allImages" name="gifs" value="allImages" />All Images</label>
                    <label for="animatedGIFs"><input type="radio" id="animatedGIFs" name="gifs" value="animatedGIFs" />Animated GIFs</label> 
                </div>
            )}

            
        </div>
    )
}

export default Images