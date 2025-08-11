import { useContext } from "react";
import { box } from "./main";

const PageA =()=>{
const {data} = useContext(box);

return(
    <div className="card">
        <div className="card-body"> 
         {data}
        </div>
     </div>
)}
export default PageA;