import React,{useState} from "react"
import { createRoot } from "react-dom/client";
import { Peoples } from "./Peoples";
import People from "./People"
import "./index.css"
function Bp(){
    const [text,setText] = useState("5 birthdays today")
    const [p,setp]=useState(Peoples)
    const change = () => {
        
        setText("0 birthdays today")
        setp([])
    }
    return(
        <>
        <div className="container">
            <h2>{text}</h2>
        {p.map(person => {
        return(
           
            <People key={person.id} person={person} />
            
            

        )
        })}
        <button className="btn" onClick={change}>Clear All</button>
         </div>
        </>

       
    )
    
}







createRoot(document.getElementById("root")).render(<Bp />);