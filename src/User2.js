import React from "react";

function User2(props){
    return(
        <div>
            <h1>User component</h1>
            <button onClick={props.data}>Call getData function</button>
        </div>
    )
}

export default User2;