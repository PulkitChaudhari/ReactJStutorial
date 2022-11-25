import {useEffect} from 'react';

function App(props){
    useEffect(()=>{
        console.warn("count is ",props.count)
    },[props.count])
    return (
        <div className='App'>
            <h1>Count props : {props.count}</h1>
            <h1>Data props: {props.data}</h1>
        </div>
    );
}

export default App;
