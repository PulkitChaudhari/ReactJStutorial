import logo from './logo.svg';
import './App.css';
// import User from './User';
// import User1 from './User1';
import React, {useState} from 'react'
// import {Component} from 'react'
// import Student from './Student'

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
// 3.Unmounting - Component is hidden or removed

// Constructor is a life cycle method and is always called when Component is created, you can use
// this functionality to initialize States or other properties in that component.

// class App extends React.Component{
//     // constructor is always called first even before render
//     constructor(){
//         super();
//         this.state={
//             data : " Pulkit"
//         }
//     }
//     render(){
//         return(
//                 <h1>Hello World{this.state.data}</h1>
//         )
//     }
// }

// Render, Life Cycle method
// render method is first called when component is constructed and then when state/props are
// updated.

// import User3 from './User3';
// function App(){
// const [name,setName] = React.useState("Anil");
//     return(
//         <div className='App'>
//             <h1>Render in Life cycle method</h1>
//             <User3 name={name}/>
//             <button onClick={()=>setName("Pulkit")}>Update Name</button>
//         </div>
//     )
// }

// Component did mount - has no effect of states and props
// it is called after constructor and rendering process is done after component calling
// *****USED FOR API Calling*****

// class App extends React.Component{
//     constructor(){
//         super();
//         this.state={
//             name:"pulkit"
//         }
//     }
//     componentDidMount(){
//         console.log("componentdidmount called");
//     }
//     render(){
//         console.log("render called");
//         return(
//             <div className='App'>
//                 <h1>Componentdidmount - {this.state.name}</h1>
//                 <button onClick={()=>this.setState({name:"Chaudhari"})}>Update name</button>
//             </div>
//         )
//     }
// }

// componentDidUpdate

// class App extends React.Component{
//     constructor(){
//         super();
//         this.state={
//             name:"Pulkit",
//             counter:1
//         }
//     }
//     componentDidUpdate(preProps,preState,snapshot){
//         // you can call a setState inside this componentDidUpdate but make sure to use conditions
//         // else the setState will keep on updating the component resulting in endless recursion
//         // snapshot is bydeafult undefined 
//         // but if getSnapshotBeforeUpdate is defined then value is available
//         console.log("componentDidUpdate",preState);
//     }
//     render(){
//         // never use setState inside render as it will result in an endless loop    
//         return(
//             <div className='App'>
//                 <h1>componentDidUpdate - {this.state.name} - {this.state.counter}</h1>
//                 <button onClick={()=>this.setState({name:"Chaudhari",counter:this.state.counter+1})}>Update name</button>
//             </div>
//         )
//     }
// }

// shouldComponentUpdate
// asks questions whether to update or not

// class App extends React.Component{
//     constructor(){
//         super();
//         this.state={
//             count:0
//         }
//     }
//     // by default this function returns false value
//     // add return true statement to update the state
//     shouldComponentUpdate(){
//         // you can see the value being update in the line below
//         console.warn("shouldComponentUpdate function called",this.state.count);
//         // you can make use of conditions to allow the state to update if certain desirability is attained.
//         // Example :-
//         if (this.state.count > 4 && this.state.count < 10) return true;
//         return(false); 
//     }
//     render(){
//         return(
//             <div className='App'>
//                 <h1>shouldComponentUpdate {this.state.count} </h1>
//                 <button onClick={()=>this.setState({count:this.state.count+1})}>Update counter</button>
//             </div>
//         )
//     }
// }

// componentWillUpdate

import Student1 from './Student1';
class App extends React.Component{
    constructor(){
        super();
        this.state={
            show:true
        }
    }
    render(){
        return(
            <div className='App'>
                {
                    this.state.show ? <Student1/> : <h1>Child Component removed</h1>
                }
                <button onClick={()=>this.setState({show:!this.state.show})}>Toggle child component</button>
            </div>
        )
    }
}

export default App;
