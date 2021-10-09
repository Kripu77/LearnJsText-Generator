import React,{useState} from 'react'
import data from './Components/data'
import "./CSS/index.css"

const App = () => {
    const[ count ,setCount] = useState(1);
    const [text, setText] = useState([])
    //default behaviour pprevention
    const handleSubmit = (e)=>{
        e.preventDefault();
        let amount = parseInt(count);
        setText(data);

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
<article className="lorem-text">
{/* map over the data  */}
    <p> If you want to become a web developer, you’ll be wondering what programming languages to learn. Not only that, you’ll want to know what languages you should focus on first. Do you start with the easiest ones? Or the most useful ones? Both? With so many options these days, why learn JavaScript?</p>
    {text.map((value, index)=>{
        return <p key={index}>{value}</p>
    })}
</article>

      </section>
    )
}

export default App
