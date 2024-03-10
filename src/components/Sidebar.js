import { useState } from "react"
import Projects from "../sections/Projects";
import Assets from "../sections/Assets";
import Images from "../sections/Images";
import People from "../sections/People";
import './sidebar.css'
import TuneIcon from '@mui/icons-material/Tune';
import WestIcon from '@mui/icons-material/West';


const Sidebar = ({toggleSidebar, setToggleSidebar}) => {

    const sections = ["Projects", "Assets", "Images", "People"]
    const [sectionName, setSectionName] = useState(sections[0]);


    function sectionRender(sectionName){
        switch(sectionName){
            case sections[0]:
                return( <div className="section-details-projects">
                    <Projects />
                </div>)
            case sections[1]:
                return (<div className="section-details-assets">
                    <Assets />
                </div>)
            case sections[2]:
                return (<div className="section-details-images">
                    <Images />
                </div>)
            case sections[3]:
                return (<div className="section-details-people">
                    <People />
                </div>)
            default:
                return (<div>
                    <h1>Error</h1>
                </div>)
        }
    }

    function handleSection(section){
        setSectionName(section);
    }

    function handleSidebar(){
        setToggleSidebar(!toggleSidebar)
    }


    return (
        <div className="sidebar">
            <div className="sidebar-header">
                <span onClick={handleSidebar}><TuneIcon fontSize="small"/><button className="sidebar-filter" >Filter</button></span>
                <button className="sidebar-filter"  onClick={handleSidebar}><WestIcon fontSize="small"/></button>
            </div>
            <div className="sidebar-sections">
                {sections.length > 0 && 
                sections.map((section) => (<button className="sidebar-section-btn" onClick={() => handleSection(section)}>{section}</button>))}

            </div>
            <div className="section-details">
                {sectionRender(sectionName)}
            </div>
        </div>
        
    )
}

export default Sidebar