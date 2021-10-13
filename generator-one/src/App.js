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
       setPara([...para, data[count]])
        

    }
    return (
    <main>
        <h1> Why you should Learn JavaScript Text Generator?</h1>
        <section className='form-container'>
            <form onSubmit={handleSubmit}>
                <label htmlFor='paragraphs'>Paragraphs:</label>
                <input type="number" id="paragraphs" name="paragraphs" value={count} onChange={()=>setCount(count+1)}></input>
                <button className="btn" type='submit'  >Generate</button>
            </form>
            

        </section>
        <section>
            {para.map((value, index)=>{
                return <p className='info-dislay' key={index}>{value}</p>
            })}
        </section>
    </main>
    
    )
}

export default App
