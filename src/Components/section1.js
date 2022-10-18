import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faArrowAltCircleRight} from "@fortawesome/free-solid-svg-icons"

import './footer.css'

function Section1(params) {
    
    const number ={
        backgroundColor:'white',
        borderRadius:'50%',
        width:'120px',
        padding:'10px',
        margin:'5px'
    }
    const text ={
        fontSize:'50px',
        fontWeight:'bold',
    }

    const txt1 = {
        color:'#FD3035',
        fontWeight:'bold',
        fontSize:'65px',
        margin:'0px'
    }
    return(
        <div className="section1">
            <div className=" so d-flex justify-content-around" style={{backgroundColor:'#e3e3e3'}}>
                <div className="s1 text-center">
                    <img src="files/black-hoodie-mockup_125540-877-removebg-preview.png"/>
                </div>
                <div className=" s2 text-center pt-4">
                    <h1 className="text" style={text}>Deal Of The Week</h1>
                    <hr style={{width:'200px', margin:'auto', height:'10px', backgroundColor:'#FD3035'}}/>
                    <br/><br/>
                    <div className="day d-flex justify-content-around">
                        <div style={number}>
                            <h1 style={txt1}>1</h1>
                            <h5 className="text"style={{margin:'0px'}}>Day</h5>
                        </div>
                        <div style={number}>
                            <h1 style={txt1}>24</h1>
                            <h5 className="text"style={{margin:'0px'}}>Hours</h5>
                        </div>
                        <div style={number}>
                            <h1 style={txt1}>54</h1>
                            <h5 className="text"style={{margin:'0px'}}>Minutes</h5>
                        </div>
                        <div style={number}>
                            <h1 style={txt1}>12</h1>
                            <h5 className="text"style={{margin:'0px'}}>Seconds</h5>
                        </div>
                    </div>
                    <br/><br/>
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

export default Section1;