import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import KeyApiFunctional from './Component/KeyApiFunctional';
//import Lifecycle from './Component/Lifecycle';
//import { useState } from 'react';
//import Fetchingdata from './Fetchingdata';
//import KeyApi from './Component/KeyApi';

function App() {

  /* const [show , setShow] = useState(true) */

  return (
    <div className="App">
      <h1>Life cycle app</h1>
      
      <KeyApiFunctional/>
    {/*   <KeyApi/> */}
     {/* <h1>Learn Lifecycle of React Comp</h1>

     <button className=' btn btn-primary mt-2 mb-2'
     onClick={()=>setShow(!show)}>Unmount Comp</button>
     {
      show ?  <Lifecycle/> : <div>Comp Unmounted</div>
     } */}
   {/*  <Fetchingdata/> */}
    </div>
  );
}

export default App;
