import React,{useState} from 'react'
import data from './Components/data'
import "./CSS/index.css"
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';



const App = () => {
    const[ count ,setCount] = useState(1);
    const [text, setText] = useState([])
    //default behaviour prevention i.e. page refresh
    const handleSubmit = (e)=>{
        e.preventDefault();
        let amount = parseInt(count);
        const finalData =  [data[count]]
        console.log(finalData)
        //following functional approach storing the prev state value using spread operator
        setText((prevState)=>[...prevState,finalData]);
if(count>6){
toast.error("Dear user you have reached the max pragraph that can be generated ")
return false;
}
else if(count<0){
toast.error("Dear user you have reached the minimum pragraph that can be generated ")
return false;
}
else{
    toast.success("Thank you, your desired paragraph has been generated")
}
    }
    
    return (
      <section className="section-center">
<h3> Why you should learn JavaScript?</h3>
<form className="lorem-form" onSubmit={handleSubmit}>
<label htmlFor="amount">
    Paragraphs:
</label>
<input type="number" name="amount" id="amount" value={count} onChange={(e)=>setCount(e.target.value)}></input>
<button type="submit" className="btn"> Generate</button>
</form>
   <ToastContainer />
<article className="lorem-text">
{/* map over the data  */}

    {text.map((value, index)=>{
        return <p key={index}>{value}</p>
        
        
    })}
</article>

      </section>
    )
}

export default App
