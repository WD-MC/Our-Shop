

function Section() {

    const btn = {
        backgroundColor:'#e3e3e3',
        width:'200px',
        height:'55px', 
        fontSize:'30px',
        marginTop:'6px'
    }
    const search={
        width:'470px', 
        backgroundColor:'#e3e3e3',
        height:'60px', 
        border:'none',
        padding:'15px',
        borderRadius:'8px',
        fontSize:'25px'
    }
    return(
        <div className="section">
            < div className="text-center">
                <h1 className="text text-dark" style={{fontSize:'60px'}}><strong>SHOP</strong></h1>
                <hr style={{width:'100px', margin:'auto', height:'10px', backgroundColor:'#FD3035'}}/>
            </div>
            <br/><br/><br/>

            <div className=" container">
                <div className="row  justify-content-around">
                    
                    <button className="btn" style={{backgroundColor:'#FD3035', width:'200px', height:'55px', fontSize:'30px', color:'#e3e3e3', marginTop:'6px'}}>
                        <strong>All</strong>
                    </button>
                    <button className="btn text-dark" style={btn}>
                        <strong>Women's</strong>
                    </button>
                    <button className="btn text-dark" style={btn}>
                        <strong>Men's</strong>
                    </button>
                    <button className="btn text-dark" style={btn}>
                        <strong>Child</strong>
                    </button>
                </div>
            </div> 
            <br/><br/>
            <div className="search text-center" >
                <input type="text" placeholder="Search Item" style={search}/>
            </div> 
            <br/><br/><br/><br/>
        </div>
    )
}

export default Section;