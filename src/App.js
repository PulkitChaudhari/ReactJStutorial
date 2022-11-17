import logo from './logo.svg';
import './App.css';
import User from './User';
import User1 from './User1';
import React, {useState} from 'react'
import {Component} from 'react'
import Student from './Student'

// function App() {
//   // you can also use a function inside a function
//   // function Apple(){
//   //   return(<div>Apple component</div>)
//   // }

//   // return (
//   //   <div className="App">
//   //     <h1>Hello World</h1>
//   //     <User1/>
//   //     <Apple/>
//   //   </div> 
//   // );

//   // here we called alert function - apple and changed the value of data but still the h1 tag data value didnt change
//   // let data = "pulkit"
//   // function apple(){
//   //   data = "chaudhari"
//   //   alert("function called")
//   // }
//   // return (
//   //   <div className="App">
//   //     <h1>{data}</h1>
//   //     <button onClick={apple}>[Click me]</button>
//   //   </div> 
//   // );

//   //State is an object to store data which changes when value for it is changed unlike variable in last example
//   // here when we click on the button we can see that the entire state is refreshed by checking the output on the console of warn statement :-
//   // console.warn("____refreshed___")

//   const[data,setData] = useState(0)
//   function updateData(){
//     setData(data+1)
//   }
//   console.warn("____refreshed___")
//   return (
//     <div className="App">
//       <h1>{data}</h1>
//       <button onClick={updateData}>Update Data</button>
//     </div> 
//   );
// }

//here we update data after button click but by using a Class Component
// class App extends Component{
//   constructor(){
//     super();
//     // super is necessary for calling this
//     this.state={
//       data:"anil"
//     }
//   }
//   apple() {
//     this.setState({data:"sidhu"})
//   }
//   render(){
//     return (
//       <div className="App">
//         <h1>{this.state.data}</h1>
//         <button onClick={()=>this.apple()}>Update Data</button>
//       </div> 
//     );
//   }
// }

//PROPS in React with Functional Component
// props are used to transfer data from one component to another
// basically parameters (properties)
// function App(){
//   const [name,setName] = useState("Pulkit")
//   return(
//     <div className='App'>
//       <h1>Props in React</h1>
//       <Student name={name} email={"pulkitchaudhari@gmail.com"} address={"Kalyan,India"}/>
//       <button onClick={()=>{setName("Sidhu")}}>Update Name</button>
//       {/* <Student name={"John Doe"} email={"johnyboi@gmail.com"} address={"Los Santos,Murica"}/> */}
//       {/* <Student name={"Peter Dostovesky"} email={"petttter@gmail.com"} address={"Moscow,Ruski"}/> */}
//     </div>
//   )
// }

// PROPS in React with Class Component
class App extends React.Component {
  constructor(){
    super();
    this.state={
      name:"Anil"
    }
  }
  render(){
    return(
      <div className="App" style={{backgroundColor:'skyblue',margin:10}}>
        <h1>Props</h1>
        <Student name={this.state.name}></Student>
        <button onClick={()=>this.setState({name:"Sidhu"})}>Update Name</button>
      </div>
    );
  }
}

export default App;
