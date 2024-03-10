import NotificationsIcon from '@mui/icons-material/Notifications'
import './navbar.css'

const NavBar = () => {

    return (
        <div className="navbar">
            <div className="navbar-left">
                <h1>Behance</h1>
                <h2>For You</h2>
                <h2>Discover</h2>
                <h2>Hire</h2>
                <h2>Assets</h2>
                <h2>Jobs</h2>
            </div>
            <div className="navbar-right">
                <span className="navbar-noti"><NotificationsIcon fontSize='small'/></span>
                <button className="navbar-login">Log In</button>
                <button className="navbar-signup">Sign Up</button>
                <span className="navbar-divider">|</span>
                <button className="navbar-btn">Free Trail</button>
                <button className="navbar-adobe">Adobe</button>
            </div>
        </div>
    )
}

export default NavBar