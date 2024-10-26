

function Price({oldPrice, newPrice}) {
    let oldStyles = {
        textDecorationLine:"line-through",
      };
      let newStyles = {
       fontWeight:"bold",
      };
    return (
        <>
            <div style={{backgroundColor:"rgb(225, 110, 57)",height:"30px",borderRadius:"15px",}} >
                <span style={oldStyles}>{oldPrice}</span>&nbsp;&nbsp;&nbsp;
                <span style={newStyles}>{newPrice}</span>


            </div>
        </>

    );
}

export default Price;
