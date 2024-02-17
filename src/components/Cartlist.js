
import { cdnurl } from "../Util/Constants";
const Cartlist=(info)=>{
    
    const {
        cloudinaryImageId,
        name,
        cuisines,
        avgRating,
        costForTwo,
      } = info.info;
      
      const renderImage = cloudinaryImageId && (
        <img className='res-logo  rounded-lg' src={cdnurl + cloudinaryImageId} alt={name} />
      );
    
      return (
        <div className='relative m-4 p-4 w-[270px] rounded-lg bg-gray-100 hover:bg-gray-200 cursor-pointer'>
          {/* Remove Item button */}
          <button
            //onClick={handleRemoveItem}}
            className="absolute top-0 right-0 m-2 p-1 text-xs text-red-500 bg-transparent border-none cursor-pointer"
          >
            Remove
          </button>
    
          {renderImage}
          <h3 className="font-bold py-4 text-lg">{name}</h3>
          <h4>{cuisines && cuisines.join(' , ')}</h4>
          <h4>{avgRating} Star</h4>
          <h4>{costForTwo}</h4>
        </div>
      );




}
export default Cartlist;



