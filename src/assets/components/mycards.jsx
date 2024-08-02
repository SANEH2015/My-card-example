import { FaRegHeart } from "react-icons/fa";
import { IoBedOutline } from "react-icons/io5";
import { LiaBathSolid } from "react-icons/lia";
  
function mycards({accommodation}){
  console.log(accommodation);
return(
  <div className="main" > 
     <div className="picbox" style={{backgroundImage:`url(${require("../src/house.jpeg")})`}}>
     <FaRegHeart style={{fontSize:"20px",float:"right",margin:"15px",color:"white",}} />
     </div>
      <div className="secondbox" style={{ backgroundColor:"white", width:"100%",height:"100px"}}> 
        <span style={{display:"inline-block",fontWeight:"bold",marginRight:"250px"}}>{accommodation.typeofhouse} . {accommodation.year} </span>
         <span style={{display:"block",fontSize:"35px",fontWeight:"bold",marginRight:"350px"}}> {accommodation.price}</span>
          <span style={{display:"block",fontsize:"20px",marginRight:"330px"}}>{accommodation.address}</span>
      </div>
        <div className="3rdbox" style={{backgroundColor:"white", width:"100%",height:"100px", display:"flex"}}>
       <div style={{margin:"10px"}}> <IoBedOutline  size={50} style={{fontsize:"100px"}} /> <span>{accommodation.bedrooms}</span><span>Bedrooms</span></div>
        <div style={{margin:"10px"}}><LiaBathSolid  size={50} style={{}} /><span>{accommodation.bathroom}</span><span>Bathrooms</span></div>
        </div>
        <div className="4thbox" style={{backgroundColor:"whitesmoke", width:"100%",height:"100px"}}>
        <span style={{float:"left",margin:"10px"}}>REALTOR</span>
        <div className="last">
          <div></div>
          <div>
             <span>{accommodation.realtor}</span>
             <span>{accommodation.realtorPhon}</span>
          </div>
        </div>
         </div>
  </div>
)
}
export default mycards;