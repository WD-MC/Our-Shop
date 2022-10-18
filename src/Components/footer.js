import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTabletAndroid } from "@fortawesome/free-solid-svg-icons";


function Footer() {

    const image={
        width:'40px',
    }

    return(
        <div className="section1">
            <div className="row m-auto container">
                    
                <div className="col col-10 pt-4">
                    <h3>© Tech Women Factory 2022</h3>
                </div>
                <div className="col col-2 text-center pt-4">
                    <div className="icon d-flex justify-content-around">
                        <div className="face">
                            <img style={image} src="files/twitter.svg"/>
                        </div>
                        <div className="face">
                            <img style={image} src="files/facebook.svg"/>
                        </div>
                        <div className="face">
                            <img style={image} src="files/youtube.svg"/>
                        </div>
                    </div>
                </div>
            </div>
            <br/><br/><br/>
        </div>
    )
    
}

export default Footer;