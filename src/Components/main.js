
import './mainResponsive.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faArrowAltCircleRight} from "@fortawesome/free-solid-svg-icons"


function Main() {

    return(
        <div className="main">
            <div className="card">
                <img className="card-img" src="./files/hero.webp" />
                <div className=" section card-img-overlay">
                    <h4 >Spring / Summer Collection 2022</h4>
                    <h1 className="card-title"><strong>Get up to 45% Off</strong></h1>
                    <h1 className="card-title"> <strong>New Arrivals</strong></h1>
                    
                    <button className="btn text-white" style={{backgroundColor:'#FD3035', width:'150px', height:'40px'}}>
                        <strong>SHOP NOW </strong>
                        <FontAwesomeIcon icon={faArrowAltCircleRight}/>
                    </button>
                </div>
            </div>
            <br/><br/>
        </div>
    )
    
}

export default Main;