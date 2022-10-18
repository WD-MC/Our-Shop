import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faRightToBracket, faUserPlus } from '@fortawesome/free-solid-svg-icons'

function Topbar(){

    return(
        <div className="topbar container-fluid bg-dark  text-white pt-3">
            <div className="row">
                <div className="col col-md-6 text-center">
                    <p>Free shipping on all u.s orders over 50XAF</p>
                </div>
                <div className="col col-md-2">
                    <p>eccommer@info.com</p>
                </div>
                <div className="col col-md-2 text-end">
                    <a href="#" className=" text-white text-decoration-none"  style={{marginRight:'10px'}}>Login</a>
                    <FontAwesomeIcon icon={faRightToBracket} className=""/>    
                </div>
                <div className="col col-2">
                    <span className="inline-block p-1 bg-danger rounded">
                        <FontAwesomeIcon icon={faUserPlus}/>
                        <a href="#" className=" text-white text-decoration-none"> Register</a>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Topbar;