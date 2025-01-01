import React from "react";

class Navbar extends React.Component{
    render() {
        return(
            <>
            <div style={{width:"100%", height:70,background:"aquamarine",display:"flex",justifyContent:"space-between"}}>
                <div className="title">
                    Movie-App
                </div>
                <div>
                    <img alt="cart icon"/>
                    <span>0</span>
                </div>
            </div>
            </>
        )
    }
}

export default Navbar;

// width: 100%;
//   height: 70px;
//   background-color: aquamarine;
//   display: flex;
//   justify-content: space-between;