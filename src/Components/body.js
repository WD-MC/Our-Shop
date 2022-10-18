import React, {useState} from "react";
import Section from "./section";
import data from "../datas";
import Products from "./products";
import Section1 from "./section1";

function Body() {

    const article={
        display:'grid',
        gridTemplateColumns:'repeat(3, 1fr)',
        gridTemplateRows:'auto',
    }

    const [cart, setCart] = useState([]);

    function HandleClick(item) {
        cart.push(item);
    }
    
    return(
        <div className="body">
            <Section/>
            <article className="container" style={article}>
                {data.map((item) => (<Products key={item.id} item={item} handleClick={HandleClick}/>))}
            </article>
            <Section1/>
        </div>
    )
}

export default Body;