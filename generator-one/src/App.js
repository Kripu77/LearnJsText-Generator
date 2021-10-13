import React, { useState } from 'react'
import data from "./Components/data"
import {ToastContainer, toast} from "react-toastify"
  import 'react-toastify/dist/ReactToastify.css';
import "./CSS/index.css"


const App = () => {
    const [count, setCount] = useState(0);
    const [para, setPara] = useState([])
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(count>0 && count<data.length-1){
       setPara([...para, data[count]])
       toast.success("Successfully Generated")}
        

 
    if(count>data.length-1){
        toast.error("You have reached the max paragraph that can be generated")
        return false;
    }
    else if(count < 0 ){
            toast.error("You have reached the minimum paragraph that can be generated")
            return false;
    }}
    return (
    <main>
        <h1> Why you should Learn JavaScript Text Generator?</h1>
        <section className='form-container'>
            <form onSubmit={handleSubmit}>
                <label htmlFor='paragraphs'>Paragraphs:</label>
                {/* set the count as per the target value */}
                <input type="number" id="paragraphs" name="paragraphs" value={count} onChange={(e)=>setCount(e.target.value)}></input>
                <button className="btn" type='submit' onClick={()=>{setCount(parseInt(count)+1)}} >Generate</button>
            </form>
            <ToastContainer/>

        </section>
        <section>
            {para.map((value, index)=>{
                return <p className='info-display' key={index}>{value}</p>
            })}
        </section>
    </main>
    
    )
}

export default App
