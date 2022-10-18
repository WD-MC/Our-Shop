import Topbar from "./topBar";
import NavBar from "./navbar";

function Header() {
    
    return(
        <div className="header">
            <Topbar/>
            <NavBar/>
        </div>
    );
}

export default Header;