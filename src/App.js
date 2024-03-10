import Card from "./components/Card";
import FilterandSearch from "./components/FilterandSearch";
import NavBar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";
import axios from "axios";


function App() {
  

  const [toggleSidebar, setToggleSidebar] = useState(false);
  const [data, setData] = useState([])

  const fetchData = async() => {
      const response = await axios.get(`https://api.unsplash.com/photos/?client_id=${API_KEY}&per_page=40`)
      const data = await response.data
      setData(data)
  }


    useEffect(() =>{
        fetchData()
    }, [])

  

  return (
    <div className="App">
      <NavBar/>
      <FilterandSearch  toggleSidebar={toggleSidebar} setToggleSidebar={setToggleSidebar}/>      
      <div className={toggleSidebar?"gallery expanded":"gallery"}>
      {toggleSidebar && <Sidebar toggleSidebar={toggleSidebar} setToggleSidebar={setToggleSidebar}/>}
        <div className="cards">
          {data.length > 0 && (
            data.map((d) => <Card data={d}/>)
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
