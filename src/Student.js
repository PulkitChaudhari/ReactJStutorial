// functional component example
// function Student(props){
//     return(
//         <div style={{backgroundColor:"skyblue",margin:10}}>
//             <h1>Hello {props.name}</h1>
//             <h2>Your email ID is : {props.email}</h2>
//             <h2>Your address is : {props.address}</h2>
//         </div>
//     )
// }

// Class component example
import React from "react";
export default class Student extends React.Component{
    render(){ 
        return (
            <div>Student : {this.props.name}</div>
        )
    }
}
// export default Student;