import {useState} from "react"
import TuneIcon from '@mui/icons-material/Tune';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SearchIcon from '@mui/icons-material/Search';
import './filter.css'

const FilterandSearch = ({toggleSidebar, setToggleSidebar}) => {

    let sorthandle = false;
    
    const sortOptions = ['Recommended', 'Curated', 'Most Appriciated', 'Most Viewed', 'Most Discussed', 'Most Recent']
    const [title, setTitle] = useState(sortOptions[0]);
    function handleClick(){
        sorthandle =!sorthandle;
        if(sorthandle){
            document.getElementById("myDropdown").style.display = "block";
        }else{
            document.getElementById("myDropdown").style.display = "none";
        }
    }

    window.onclick = function(event) {
        if (!event.target.matches('.dropbtn')) {
          sorthandle = false;
          document.getElementById("myDropdown").style.display = "none";
        }
      }

    function handleSidebar(){
        setToggleSidebar(!toggleSidebar);    
    }
    

    return (
        <div className={toggleSidebar?"filter-search-toggle":"filter-search"}>
            {!toggleSidebar && 
            <div className="filter-btn" onClick={handleSidebar}>
                <TuneIcon fontSize="small"/><button className="filter">Filter</button>
            </div>
            }
            <div className="search">
                <div className="search-bar">
                    <SearchIcon /><input  type="text" placeholder="Search the Creative World at work"></input>
                </div>
            </div>
            <div className="sort">
                <h3>Sort</h3>
                <button onClick={handleClick} class="dropbtn">{title}<ArrowDropDownIcon fontSize="small"/></button>
                <div id="myDropdown" class="dropdown-content">
                    {sortOptions.length > 0 && sortOptions.map((option) => (
                        <a  value={option} onClick={() => setTitle(option)}>{option}</a>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default FilterandSearch