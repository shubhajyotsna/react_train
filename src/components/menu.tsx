import { MouseEvent } from "react";
function Menu(){
    const items=["Home","About","MainMenu"," Contact","Help"];
    //items=[];
    const handleEvents=(click:MouseEvent) => console.log(click)
    return(
        <>
        
        <h1>Dynamic List</h1>
        {items.length==0 && <p>Item does not exist</p>}
        <ul className="list-group">
            {items.map((x,index) =>(
            
             <li className="list-group-item" key={index} onClick={(handleEvents)}>{x}</li>
            )
            )}
        </ul>
        
        </>
        );
}
export default Menu;