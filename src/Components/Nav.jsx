import { IoFastFoodOutline } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";


const Nav =() =>{
    return(
        <div className="w-full h-20 md:h-25 flex justify-between items-center px-4 md:px-8">

            <div className="w-10 md:w-15 h-10 md:h-15 bg-white flex justify-center items-center rounded-md shadow-xl">
                <IoFastFoodOutline className="text-blue-500 w-5 md:w-7.5 h-5 md:h-7.5 "/>
            </div>

            <form action="" className="flex items-center gap-2 px-4 bg-white w-[65%] md:w-[70%] h-[40%] md:h-[60%] rounded-md shadow-md">
                <IoSearch className="w-5 h-5 text-blue-500"/>
                <input type="text" placeholder="Search Items...." className="w-full outline-none text-[12px] md:text-[16px]"/>
            </form>

             <div className="w-10 md:w-15 h-10 md:h-15 bg-white flex justify-center items-center rounded-md shadow-xl relative ">
                <span className="absolute top-0 right-1 md:right-2 text-blue-500 font-semibold text-[12px] md:text-[16px]">
                    0
                </span>
                <MdOutlineShoppingCart className="text-blue-500 w-5 md:w-7.5 h-5 md:h-7.5"/>
            </div>

        </div>
    )
}

export default Nav;