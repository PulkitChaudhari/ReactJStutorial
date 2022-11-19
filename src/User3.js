import React from "react";

class User3 extends React.Component{
    constructor(){
        super();
        this.state={
            email:"pulkit@email.com"
        }
    }
    render(){
        console.warn("render method",this.state.email)
        return(
            <div>
                <h1>{this.props.name} Component</h1>
                <h1>{this.state.email} is your email ID</h1>
                <button onClick={()=>this.setState({email:"chaudhari@gmail.com"})}>Update email</button>
            </div>
        )
    }
}
export default User3;