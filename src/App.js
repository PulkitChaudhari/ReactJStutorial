import logo from './logo.svg';
import './App.css';
// import User from './User';
// import User1 from './User1';
import React, {useMemo, useRef, useState} from 'react'
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

// componentDidUpdate() method allows us to execute the React code when the component is updated.

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

// componentDidUpdate vs componentDidMount
// componentDidMount() is invoked immediately after a component is mounted. 
// Initialization that requires DOM nodes should go here. 
// If you need to load data from a remote endpoint, this is a good place to instantiate the network request. 
// Setting state in this method will trigger a re-rendering.
// componentDidUpdate() is invoked immediately after updating occurs. 
// This method is not called for the initial render.

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

// componentWillUpdate - The componentWillUpdate gives you control to manipulate the component just before it receives new props or state.

// import Student1 from './Student1';
// class App extends React.Component{
//     constructor(){
//         super();
//         this.state={
//             show:true
//         }
//     }
//     render(){
//         return(
//             <div className='App'>
//                 {
//                     this.state.show ? <Student1/> : <h1>Child Component removed</h1>
//                 }
//                 <button onClick={()=>this.setState({show:!this.state.show})}>Toggle child component</button>
//             </div>
//         )
//     }
// }

// HOOKS in ReactJS - useState

// function App(){
//     const [data,setData] = useState("Anil")
//     return(
//         <div className='App'>
//             <h1>Hooks in React</h1>
//             <h2>{data}</h2>
//             <button onClick={()=>setData("Sidhu")}>Update data</button>
//         </div>
//     )
// }

// useEffect hook - performs function of compdidmount,compdidupd,compwillmount

// import {useEffect} from 'react';

// function App(){
//     const [count,setCount] = useState(0);
//     useEffect(()=>{
//         // alert("useEffect called")
//     })
//     return (
//         <div className='App'>
//             <h1>useEffect in React {count}</h1>
//             <button onClick={()=>setCount(count+1)}>Update Counter</button>
//         </div>
//     );
// }

// useEffect with state and props
// here useEffect is called only if the value in [] is changed.
// import {useEffect} from 'react'; 
// import User4 from './User4'

// function App(){
//     const [data,setData] = useState(10);
//     const [count,setCount] = useState(100);
//     return (
//         <div className='App'>
//             <User4 count={count} data={data} />
//             <button onClick={()=>setCount(count+1)}>Update Count</button>
//             <button onClick={()=>setData(data+1)}>Update Data</button>
//         </div>
//     );
// }

// Style type in ReactJS

// import './style.css'
// import style from './custom.module.css'

// function App(){
//     return (
//         <div className='App'>
//             <h1 className='primary'>Style type 1 in ReactJS</h1>
//             <h1 style={{color:'red',backgroundColor:'black'}}>Style type 2 in ReactJS</h1>
//             <h1 className={style.success}>Style type 3 in ReactJS</h1>
//         </div>
//     );
// }

// Installing bootstrap for ReactJS

// add import 'bootstrap/dist/css/bootstrap.min.css'; to index.js if not opting for CDN(WORKs only on internet
// connection)

// import {Button,Alert} from 'react-bootstrap'

// function App(){
//     return(
//         <div className='App'>
//             {[
//         'primary',
//         'secondary',
//         'success',
//         'danger',
//         'warning',
//         'info',
//         'light',
//         'dark',
//       ].map((variant) => (
//         <Alert key={variant} variant={variant}>
//           This is a {variant} alert—check it out!
//         </Alert>
//       ))}
//         </div>
//     );
// }

// Handle array with List
// Array for looping can not be done inside JSX and hence map function is used.

// function App(){
//     const students = ["Pulkit","Satish","Chaudhari"]
//     const studs = [
//         {name:"pulkit",email:"pulkit@email.com",phno:888},
//         {name:"satish",email:"satish@email.com",phno:100},
//         {name:"darshana",email:"darshana@email.com",phno:200}
//     ]
//     students.map((item)=>{
//         console.warn("My name is ",item)
//     })
//     for(let i = 0;i < students.length;i++){
//         console.log("My name is (for loop) ",students[i])
//     }
//     return(
//         <div className='App'>
//             <h1>Handle array with List</h1>
//             {/* {
//                 students.map((data)=>
//                     <h1>{data}</h1>
//                 )
//             } */}
//             <table border="1">
//                 <tr>
//                     <td>Email</td>
//                     <td>Name</td>
//                     <td>Ph. No.</td>
//                 </tr>
//             {
//                 studs.map((data)=>
                    
//                     <tr>
//                         <td>{data.email}</td>
//                         <td>{data.name}</td>
//                         <td>{data.phno}</td>
//                     </tr>
//                 )
//             }
//             </table>
//             {/* // we can use for loops inside jsx */}
//             {/* {
//                 for(let i = 0;i < students.length;i++){
//                     console.log("My name is (for loop) ",students[i])
//                 }
//             } */}
//         </div>
//     );
// }

// List with bootstrap in ReactJS

// import {Table} from 'react-bootstrap';

// function App(){
//     const users = [
//         {name:'Pulkit',email:'pulkit@test.com',contact:'111'},
//         {name:'Satish',email:'satish@test.com',contact:'222'},
//         {name:'Chaudhari',email:'chaudhari@test.com',contact:'333'},
//         {name:'Darshana',email:'darshana@test.com',contact:'444'}
//     ]
//     return(
//         <div className='App'>
//             <h1>List with bootstrap table</h1>
//             <Table striped bordered hover variant='dark'>
//                 <tbody>
//                 <tr>
//                     <td>Name</td>
//                     <td>Email</td>
//                     <td>Contact</td>
//                 </tr>
//                 {
//                     users.map((item,i)=>
//                     item.contact === '111' ? 
//                     <tr key={i}>
//                         <td>{item.name}</td>
//                         <td>{item.email}</td>
//                         <td>{item.contact}</td>
//                     </tr> : null
//                     )
//                 }
//                 </tbody>
//             </Table>
//         </div>
//     )
// }

// Nested array in ReactJS

// import {Table} from 'react-bootstrap';

// function App(){
//     const users = [
//         {
//             name:'Pulkit',email:'pulkit@test.com',address:[
//                 {Hn:"10",City:"Mumbai",Country:'India'},
//                 {Hn:"11",City:"Delhi",Country:'India'},
//                 {Hn:"12",City:"Bangalore",Country:'India'},
//                 {Hn:"13",City:"Kolkata",Country:'India'}
//             ]
//         },
//         {
//             name:'Darshana',email:'darshana@test.com',address:[
//                 {Hn:"10",City:"Mumbai",Country:'India'},
//                 {Hn:"11",City:"Delhi",Country:'India'},
//                 {Hn:"12",City:"Bangalore",Country:'India'},
//                 {Hn:"13",City:"Kolkata",Country:'India'}
//             ]
//         },
//         {
//             name:'Satish',email:'satish@test.com',address:[
//                 {Hn:"10",City:"Mumbai",Country:'India'},
//                 {Hn:"11",City:"Delhi",Country:'India'},
//                 {Hn:"12",City:"Bangalore",Country:'India'},
//                 {Hn:"13",City:"Kolkata",Country:'India'}
//             ]
//         }
//     ]
//     return(
//         <div className='App'>
//             <h1>List with nested array</h1>
//             <Table striped bordered hover variant = "dark">
//                 <tbody>
//                     <tr>
//                         <td>Name</td>
//                         <td>Email ID</td>
//                         <td>Address</td>
//                     </tr>
//                 </tbody>
                
//                 <tbody>
//                 {
//                     users.map((item)=>
//                         <tr>
//                             <td>{item.name}</td>
//                             <td>{item.email}</td>
//                             <td>
//                                 <Table variant='dark' striped hover>
//                                 <tbody>{
//                                     item.address.map((data)=>
//                                         <tr>
//                                             <td>{data.Hn}</td>
//                                             <td>{data.City}</td>
//                                             <td>{data.Country}</td>
//                                         </tr> 
//                                     )}
//                                 </tbody>
//                                 </Table>
//                             </td>
//                         </tr>
//                     )
//                 }
//                 </tbody>
//             </Table>
//         </div>
//     )
// }

// Reuse Component in ReactJS

// import User5 from './User5'

// function App(){
//     const users = [
//         {name : 'Pulkit', email : 'pulkit@test.com', contact : '111'},
//         {name : 'Darshana', email : 'darshana@test.com', contact : '222'},
//         {name : 'Satish', email : 'satish@test.com', contact : '333'},
//     ]
//     return(
//         <div className='App'>
//             <h1>Reuse component in ReactJS</h1>
//             {
//                 users.map((item)=>
//                     <User5 data={item}/>
//                 )
//             }
//         </div>
//     )
// }

//React Fragment - solves the problem of using <div> unnecessarily. 
// Initially we see that without div in App we can only use single tag
// React fragment helps tackle that problem.

// import {Fragment} from 'react';
// import Cols from './Cols';

// function App() {
//     // return(
//     //     <Fragment>
//     //         <h1>Hello</h1>
//     //         <h1>Hello</h1>
//     //     </Fragment>
//     // )
//     // OR
//     // return( 
//     //     <>
//     //         <h1>Hello</h1>
//     //         <h1>Hello</h1>
//     //     </>
//     // )
    
//     return(
//         <div>
//             <h1>React Fragment</h1>
//             <table>
//                 <tbody>
//                     <tr>
//                         <Cols />
//                     </tr>
//                 </tbody>
//             </table>
//         </div>
//     );
// }

// Lifting stateup - i.e transferring data from child to parent

// import User6 from './User6'
// function App() {
//     function parentAlert(data){
//         console.log(data);
//     }
//     return(
//         <div className='App'>
//             <h1>LIFTING STATE UP</h1>
//             <User6 alert={parentAlert} />
//         </div>
//     )
// }

// Pure Component - stops re-rendering by checking if call to function has same state or not
// this turns out to be beneficial if state doesnt change in parent so we can use child as Pure Comp to save 
// rednering time

// class App extends React.PureComponent {
//     constructor(){
//         super();
//         this.state={count:1};
//     }
//     render(){
//         console.warn("check-rerendering")
//         return( 
//             <div className='App'>
//                 <h1>Pure Component in React {this.state.count}</h1>
//                 <button onClick={()=>this.setState({count:1})}>Update Count</button>
//             </div>
//         );
//     }
// }

// useMemo in functional Component 

// function App() {
//     const [count,setCount] = useState(0);
//     const [item,setItem] = useState(10);
//     const multiCountMemo = useMemo(function multiCount() {
//         console.log("multiCount called");
//         return count * 5;
//     },[count])
//     // here memo is updated only when count is called
//     // we can add Item too if we want the memo to update when item is updated
//     return(
//         <div className='App'>
//             <h1>useMemo in functional Component</h1>
//             <h2>Count : {count}</h2>
//             <h2>Count : {item}</h2>
//             <h2>{multiCountMemo}</h2>
//             <button onClick={()=>setCount(count+1)}>Update Count</button>
//             <button onClick={()=>setItem(item*10)}>Update Item</button>
//         </div>
//     )
// }

// Ref - use as less as possible (emergency) as it manipulates DOM and this hampers performance

// class App extends React.Component {
//     constructor(){
//         super();
//         this.inputRef = React.createRef();
//     }
//     componentDidMount() {
//         console.log(this.inputRef.current.value="1000");
//     }
//     getVal() {
//         console.log(this.inputRef.current.value);
//         this.inputRef.current.style.color="red";
//         this.inputRef.current.style.backgroundColor="black";
//     }
//     render(){
//         return(
//             <div className='App'>
//                 <h1>Ref in React</h1>
//                 <input type="text" ref={this.inputRef}></input>
//                 <button onClick={()=>this.getVal()}>Check ref</button>
//             </div>
//         );
//     }
// }

// useRef - hook for using ref in functional component

// import {useRef} from 'react';

// function App() {
//     let inputRef = useRef(null);
//     function handleInput() {
//         console.log("function called");
//         inputRef.current.value = "100";
//         inputRef.current.focus();
//     }
//     return(
//         <div className='App'>
//             <h1>useRef in React</h1>
//             <input type="text" ref={inputRef}/>
//             <button onClick={handleInput}>Handle Input</button>
//         </div>
//     )
// }

// forwardRef - manipulates DOM to apply change in child component from Parent component
// Use should be minimized as it updates DOM which is not suggested. 

// import { useRef } from 'react';
// import User7 from './User7';

// function App() {
//     const inputRef = useRef(null);
//     function updateInput() {
//         inputRef.current.value = "1000"
//     }
//     return(
//         <div className='App'>
//             <div>forwardRef</div>
//             <User7 ref = {inputRef} />
//             <button onClick={updateInput}>Update Input Box</button>      
//         </div> 
//     );
// }

// Controlled Component - if we control input fields via state then that comp is said to be Controlled comp

// function App() {
//     let [val,setVal] = useState("");
//     return(
//         <div className='App'>
//             <h1>Controlled Component</h1>
//             <input type="text" value={val} onChange={(e)=>setVal(e.target.value)}></input>
//         </div>
//     );
// }

// Uncontrolled comp - input fields are handled via Javascript DOM / Ref and needs input fields in comp.

// function App() {
//     let inputRef = useRef(null);
//     function submitForm(e) {
//         e.preventDefault()
//         console.warn("input field 1 value : ", inputRef.current.value);
//     }    
//     return(
//         <div className='App'>
//             <h1>Uncontrolled Component</h1>
//             <form onSubmit={submitForm}>
//                 <input type="text" ref = {inputRef}></input>
//                 <br></br>
//                 <br></br>
//                 <input type="text"></input>
//                 <br></br>
//                 <br></br>
//                 <button>Submit form</button>
//             </form>
//         </div>
//     );
// }

// Simple HOC - High Order Component
// takes other component as an input and component as output

function App() {
    return(
        <div className='App'>
            <HOCRed cmp={Counter}/>
            <h1>This is my Heading tag</h1>
        </div>
    );
}

function HOCRed(props) {
    return(
        <div className='HOCRed'>
            <props.cmp/>
            <Counter />
        </div>
    );
}

function Counter () {
    const [count,setCount] = useState(0);
    return (
        <div className='Counter'>
            <h3>Simple HOC - {count}</h3> 
            <button onClick={()=>setCount(count+1)}> Update </button>
        </div>
    );
}




export default App;
