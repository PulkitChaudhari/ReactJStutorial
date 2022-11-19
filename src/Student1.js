import React from "react";
class Student1 extends React.Component{
    componentWillUnmount(){
        console.log("componentWillUnmount called")
    }
    render(){
        return(
            <div className='Student1'>
                <h1>componentWillUpdate</h1>
            </div>
        )
    }
}

export default Student1;