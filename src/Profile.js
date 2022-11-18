import React,{useState} from "react";
function Profile(){
    // for binary choice in a state
    const [loggedin,setLoggedIn] = useState(true);
    // for multiple choices in a state
    const [login,setLogIn] = useState(3);
    // Below method is not recommended as it uses extra line of code for doing redundant work
    // if (loggedin){
    //     return(
    //         <div>
    //             <h1> Pulkit Component</h1>
    //         </div>
    //     )
    // }
    // else {
    //     return(
    //         <div>
    //             <h1>Welcome Guest</h1>
    //         </div>
    //     )
    // }
    return(
        <div>
            <h1> Welcome {loggedin ?  "Pulkit" : "Guest"} </h1>
            <h1> Welcome {login == 1 ? "Admin" : (login == 2) ? "Pulkit" : "Guest"} </h1>
        </div>
    )
}

export default Profile;