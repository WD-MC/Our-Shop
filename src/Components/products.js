

const Products=({item, handleClick}) => {

    
    const btn={
        width: '190px',
        backgroundColor:'#FD3035',
        color:'#FFFFFF',
        textDecoration:'none',
        cusor:'pointer',
        padding:'5px 40px 5px 40px',
        marginBottom:'5px',
        border:'none'
        
    }
    const image={
        backgroundColor:'#e3e3e3',
    }
    

    const {id, title, price, img, category, detail} = item
    return(

        <div className="products container " >
            <div className="cards text-center">
                <img src={img} className="card-img-top" style={image} alt="..."/>
                <div className="details">
                    <h4 className="text"><strong>{title}</strong></h4>
                    <h4 className="text"><strong>{detail}</strong></h4>
                    <h4 className="text-danger"><strong>{price}XAF</strong></h4>
                    <div className="bouton pt-3">
                        <button style={btn} className=" rounded" onClick={()=>handleClick(item)}>Add to card</button>
                    </div>
                </div>
            </div>

            {/* <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col">
                    <div className="card" style={{border:'none'}}>
                        <div className="image_box">
                            <img src={img} className="card-img-top" style={image} alt="..."/>
                        </div>
                        <div className="card-body">
                            <h4 className="card-title text-center"><strong>{title}</strong></h4>
                            <h4 className="card-title text-center"><strong>{category}</strong></h4>
                            <h4 className="card-title text-center  text-danger"><strong>{price}</strong></h4>
                        </div>
                        <span className="text-center">
                            <button style={btn} className=" rounded">Add to card</button>
                        </span>
                    </div>
                </div> */}
                {/* <div className="col">
                    <div className="card" style={{border:'none'}}>
                        <img src={img} className="card-img-top"  style={image}  alt="..."/>
                        <div className="card-body">
                            <h4 className="card-title text-center"><strong>{title}</strong></h4>
                            <h4 className="card-title text-center"><strong>{category}</strong></h4>
                            <h4 className="card-title text-center  text-danger"><strong>{price}</strong></h4>
                        </div>
                        <span className="text-center">
                            <button style={btn} className=" rounded">Add to card</button>
                        </span>
                    </div>
                </div>
                <div className="col">
                    <div className="card" style={{border:'none'}}>
                        <img src={img}className="card-img-top" style={image} alt="..."/>
                        <div className="card-body">
                            <h4 className="card-title text-center"><strong>{title}</strong></h4>
                            <h4 className="card-title text-center"><strong>{category}</strong></h4>
                            <h4 className="card-title text-center  text-danger"><strong>{price}</strong></h4>
                        </div>
                        <span className="text-center">
                            <button style={btn} className=" rounded">Add to card</button>
                        </span>
                    </div>
                </div> */}
            {/* </div> */}
            <br/><br/><br/>
        </div>
        // <div className="products container " >

        //     <div className="row row-cols-1 row-cols-md-3 g-4">
        //         <div className="col">
        //             <div className="card" style={{border:'none'}}>
        //                 <img src="files/xproduct_2.png.pagespeed.ic.xZ0lu64cc1.png" className="card-img-top" style={image} alt="..."/>
        //                 <div className="card-body">
        //                     <h4 className="card-title text-center"><strong>Pryma Headphones, Rose </strong></h4>
        //                     <h4 className="card-title text-center"><strong>Gold & Grey </strong></h4>
        //                     <h4 className="card-title text-center  text-danger"><strong>10,000XAF</strong></h4>
        //                 </div>
        //                 <span className="text-center">
        //                     <button style={btn} className=" rounded">Add to card</button>
        //                 </span>
        //             </div>
        //         </div>
        //         <div className="col">
        //             <div className="card" style={{border:'none'}}>
        //                 <img src="files/xproduct_5.png.pagespeed.ic.kldysOLIUb.png" className="card-img-top"  style={image}  alt="..."/>
        //                 <div className="card-body">
        //                     <h4 className="card-title text-center"><strong>Pryma Headphones, Rose </strong></h4>
        //                     <h4 className="card-title text-center"><strong>Gold & Grey </strong></h4>
        //                     <h4 className="card-title text-center  text-danger"><strong>10,000XAF</strong></h4>
        //                 </div>
        //                 <span className="text-center">
        //                     <button style={btn} className=" rounded">Add to card</button>
        //                 </span>
        //             </div>
        //         </div>
        //         <div className="col">
        //             <div className="card" style={{border:'none'}}>
        //                 <img src="files/xproduct_7.png.pagespeed.ic.lfgemaw9IL.png" className="card-img-top" style={image} alt="..."/>
        //                 <div className="card-body">
        //                     <h4 className="card-title text-center"><strong>Pryma Headphones, Rose </strong></h4>
        //                     <h4 className="card-title text-center"><strong>Gold & Grey </strong></h4>
        //                     <h4 className="card-title text-center  text-danger"><strong>10,000XAF</strong></h4>
        //                 </div>
        //                 <span className="text-center">
        //                     <button style={btn} className=" rounded">Add to card</button>
        //                 </span>
        //             </div>
        //         </div>
        //     </div>
        //     <br/><br/><br/><br/><br/>
        // </div>
    )
    
}

export default Products;