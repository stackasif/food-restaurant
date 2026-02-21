import { GiFallingLeaf } from "react-icons/gi";
import { GiChickenOven } from "react-icons/gi";


// import image1 from "../assets/images/pizza.avif"
// import image2 from "../assets/images/chicken-burger.avif"

const Card=({id,name,category,type,image,price})=>{
    return(
        
        <div key={id} className="w-75 h-82 bg-white p-2 gap-3 flex flex-col cursor-pointer rounded-md
        shadow-lg transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-100
       
        ">
            <div className="w-full h-[70%] overflow-hidden rounded-md">
                <img src={image} alt="" className=" object-cover" />
            </div>
            <div>
                <p className="text-[20px] font-semibold text-gray-700">
                    {name}
                </p>
            </div>
            <div className="flex justify-between items-center">
                <p className="text-[16px] font-bold">
                    Rs {price}/-
                </p>
                <div className="flex justify-center items-center gap-2 text-gray-700">
                    {type==="veg"?<GiFallingLeaf />:<GiChickenOven />}
                    <span>{type}</span>
                </div>
            
            </div>
            <button className="w-full bg-zinc-800 p-2 rounded-md text-[15px] font-semibold cursor-pointer text-white hover:bg-zinc-900 transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-100 hover:text-white">Add to dish</button>
        </div>

           
           
           
    

    )
}

export default Card;