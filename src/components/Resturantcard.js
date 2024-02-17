import { cdnurl } from "../Util/Constants";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "./cartSlice";

const Resturantcard = (props) => {
  const { resData } = props;
  const info = resData?.info || {};
  
  
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
  } = info;
 

  // Check if cloudinaryImageId is available before rendering the image
  const renderImage = cloudinaryImageId && (
    <img className='res-logo  rounded-lg' src={cdnurl + cloudinaryImageId} alt={name} />
  );

  const dispatch=useDispatch();
  const handaleAddItem=(info2)=>{
    dispatch(addItem(info2));
  }

  return (
    <div className='    relative m-4 p-4 w-[270px]  rounded-lg  bg-gray-100 hover:bg-gray-200 cursor-pointer' >
      {renderImage}
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines && cuisines.join(' , ')}</h4>
      <h4>{avgRating} Star</h4>
      <h4>{costForTwo} </h4>
      <div className="absolute top-0 right-0 m-2">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded "  onClick={()=>handaleAddItem(info)}>
      + Add
     </button>
      </div>

    </div>
  );
};

 export const withPromotedLabel=(Resturantcard)=>{
  return()=>{
    return(

      <div>
        <label>promoted</label>
        <Resturantcard />
      </div>
    )
  }
}

export default Resturantcard;




































/*import {cdnurl} from "../Util/Constants"
const Resturantcard=(props)=>{
    const  {resData}=props;
     const {
         cloudinaryImageId,
         name,
         cuisines,
         avgRating,
         costForTwo,
         deliveryTime,
       } = resData?.info;
     
     return(
         <div className='res-card' style={{backgroundColor:"#f0f0f0"}}>
             <img   className='res-logo' src={ cdnurl+cloudinaryImageId
         } />
         <h3>{name}</h3>
             <h4>{cuisines.join(' , ')}</h4>
             <h4>{avgRating}</h4>
             <h4>{costForTwo/100} For Two</h4>
             <h4>{deliveryTime} Delivery Time</h4>
         </div>
     )
 }
 export default Resturantcard;*/