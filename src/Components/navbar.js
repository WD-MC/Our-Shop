import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faCartShopping} from "@fortawesome/free-solid-svg-icons"

function NavBar() {
    
    
    const panier ={
        backgroundColor: '#e3e3e3',
        fontSize:'25px',
        padding:'10px',
        borderRadius:'50px',
        cursor:'pointer'
        
    }

    const shop = {
        cursor:'pointer'
    }

    return(
        <div className="navbar-collapse container">
            <div className="row pt-4">
                <div className=" ourShop col col-md-4" style={shop}>
                    <span className="d-flex">
                        <h1 className="text-dark"><strong>OUR</strong></h1>
                        <h1 className="text text-danger"><strong>Shop</strong></h1>
                    </span>
                </div>
                <div className="col col-md-5">
                    <ul className="list-unstyled d-flex pt-3 text-dark justify-content-around">
                        <li><a className="active text-danger text-decoration-none" style={{marginRight:'5px'}}>Home</a></li>
                        <li><a  style={{marginRight:'5px'}}>Promotion</a></li>
                        <li><a>Contact</a></li>
                    </ul>
                </div>
                <div className=" cart col col-md-3 text-center pt-1">
                    {/* <span >
                        <FontAwesomeIcon style={panier} icon={faCartShopping} />
                        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                            99
                        </span>
                    </span> */}

                    <button type="button" className="btn position-relative">
                        <FontAwesomeIcon style={panier} icon={faCartShopping} />
                        <span className="position-absolute top-0 start-30 translate-middle badge rounded-pill bg-danger">0</span>
                    </button>
                    
                </div>
            </div><br/>
        </div>
    )
}

export default NavBar;