import { useContext } from "react";
import { RxCross1 } from "react-icons/rx";
import { dataContext } from "../context/UserContext"
import Card2 from "./Card2";

    

const Cart=()=>{
    let {showCart,setShowCart}= useContext(dataContext)
    return(
        <div className={`md:w-[40vw] p-4 w-full h-full bg-blue-100 fixed top-0 right-0 transition-all duration-500 ${showCart?"translate-x-0":"translate-x-full"}`}>
            <header className="w-full flex justify-between items-center p-5">
                <p className="text-lg font-semibold ">
                    Order Items
                </p>
                <RxCross1 className="w-5 h-5 cursor-pointer" onClick={()=>setShowCart(false)}/>

            </header>
            <Card2 />

        </div>
    )
}
export default Cart;