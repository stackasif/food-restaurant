import { IoFastFoodOutline } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";


const Nav =() =>{
    return(
        <div className="w-full h-25 flex justify-between items-center px-8">

            <div className="w-15 h-15 bg-white flex justify-center items-center rounded-md shadow-xl">
                <IoFastFoodOutline className="text-blue-500 w-7.5 h-7.5 "/>
            </div>

            <form action="" className="flex items-center gap-2 px-4 bg-white w-[70%] h-[60%] rounded-md shadow-md">
                <IoSearch className="w-5 h-5 text-blue-500"/>
                <input type="text" placeholder="Search Items...." className="w-full outline-none"/>
            </form>

             <div className="w-15 h-15 bg-white flex justify-center items-center rounded-md shadow-xl relative ">
                <span className="absolute top-0 right-2 text-blue-500 font-semibold">
                    0
                </span>
                <MdOutlineShoppingCart className="text-blue-500  w-7.5 h-7.5"/>
            </div>
        </div>
    )
}

export default Nav;