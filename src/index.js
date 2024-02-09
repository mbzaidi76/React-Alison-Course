import React from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";


/*function MyForm() {
    const [textarea, setTextarea]= useState ([
        <p key="paragraph">Ullamco tempor cillum deserunt laboris. Sunt sunt do ad id deserunt ea commodo esse incididunt deserunt quis quis ullamco. Ad sint dolor ea consectetur. Et id occaecat laboris dolor aliqua incididunt deserunt sit. Reprehenderit esse magna sunt nostrud ullamco ad. Minim irure aliqua excepteur sit cillum anim ea aliqua veniam occaecat aliqua. Mollit dolor minim amet reprehenderit nisi culpa nostrud sit non veniam excepteur voluptate dolor</p>,
        "Wow this is amazing."
    ]);

    
const handleChange= (event)=>{
    setTextarea(event.target.value)

}

return(
    <form>
        <textarea value={textarea} onChange={handleChange}/>
    </form>
)
}

const root= ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyForm/>);
*/
function MyDropDownList() {
    const [myCar, setMyCar]= useState("Audi");
    const handleChange= (event)=>{
    setMyCar(event.target.value)
    }
return(
    <form>
        <select value={myCar} onChange={handleChange}> 
        <option value="Ford">Ford</option>
        <option value="Mustang">Mustang</option>
        <option value="Ferrari">Ferrari</option>
        </select>
    </form>
)
}

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<MyDropDownList/>);
