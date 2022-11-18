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
// class App extends React.Component {
//   constructor(){
//     super();
//     this.state={
//       name:"Anil"
//     }
//   }
//   render(){
//     return(
//       <div className="App" style={{backgroundColor:'skyblue',margin:10}}>
//         <h1>Props</h1>
//         <Student name={this.state.name}></Student>
//         <button onClick={()=>this.setState({name:"Sidhu"})}>Update Name</button>
//       </div>
//     );
//   }
// }

// IMPORTANT FUNCTION MUST SEE FOR HOW SEARCH ENGINE PROVIDE RESULTS DYNAMICALLY
// function App(){
//   const [data,setData] = useState(null);
//   const [print,setPrint] = useState(false);

//   function getData(val){
//     console.log(val.target.value);
//     setData(val.target.value)
//   }
//   return(
//     <div className='App'>
//       {
//         print ? <h1>{data}</h1> : null
//       }
//       <input type="text" onChange={getData}/>
//       <button onClick={()=>setPrint(true)}>Print Data</button>
//     </div>
//   )
// }

// HIDE AND SHOW ELEMENT

// function App(){
//   const [status,setStatus] = useState(true)
//   return(
//     <div className='App'>
//       {
//         status ? <h1>Hello World</h1> : null
//       }
//       {/* <button onClick={()=>setStatus(false)}>Hide</button> */}
//       {/* <button onClick={()=>setStatus(true)}>Show</button> */}
//       <button onClick={()=>setStatus(!status)}>Toggle</button>
//     </div>
//   )
// }

// Basic form

// function App(){
//   const [name,setName] = useState("");
//   const [tnc,setTnC] = useState(false);
//   const [interest,setInterest] = useState("");
//   function getFormData(e){
//     console.warn(name,tnc,interest);
//     e.preventDefault();
//   }
//   return(
//     <div className='App'>
//         <h1>Handle form in react</h1>
//         <form onSubmit={getFormData}>
//           <input type = "text" placeholder='enter name' onChange={(e)=>setName(e.target.value)}/> <br /><br />
//           <select onChange={(e)=>setInterest(e.target.value)}>
//             <option>None </option>
//             <option>Marvel</option>
//             <option>DC</option>
//             <option>Cartoon Network</option>
//           </select>
//           <br/>
//           <br/>
//           <input type = "checkbox" onChange={(e)=>setTnC(e.target.checked)}/> <span> Accept terms and Conditions</span>
//           <button type = "submit"> Submit </button>
//         </form>
//     </div>
//   )
// }

// Conditional  Rendering

// import Profile from './Profile';
// function App(){
//   return (
//     <div className='App'>
//       <h1>Conditional Rendering</h1>
//       <Profile />
//     </div>
//   )
// }

// passing functions as props
// import User2 from './User2'
// function App(){
//   function getData(){
//     console.log("getData called");
//   }
//   return (
//     <div className='App'>
//       <h1>Pass function as Props</h1>
//       <User2 data = {getData}/>
//     </div>
//   )
// }

// Life cycle method in React
// React has 3 life cycle methods
// 1.Mounting - Constructor is called for Component
// 2.Updating - Rendering and Re-rendring the component
// 3.Unmounting - Component is hidden or

export default App;
