import { useEffect , useState} from "react";  

const Lifecycle = () =>{

   const [count1 , setCount] = useState(0)

    //mounting
    useEffect(()=>{
        console.log('Comp Mounted')

        //cleanup function inside useEffect
        return()=>{
            console.log('comp unmounted')
        }
    } , [])  // blank dependency 

       
    useEffect(()=>{
        console.log('Comp Updating')
        
    },[count1])  
     
     // updating on the basis of count+
    
    return(
        <div>
            <h2>Lifecycle Comp</h2>
           {/*  Updating */}
            <h1 >{count1}</h1>
            <button className="btn btn-success me-3"onClick={()=>setCount(count1+1)}>+</button>
            <button className="btn btn-danger me-3"onClick={()=>setCount(count1-1)}>-</button>
            <button className="btn btn-warning"onClick={()=>setCount(0)}>RESET</button>   
        </div>
    )
}
export default Lifecycle;