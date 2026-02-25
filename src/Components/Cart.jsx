import { useContext } from "react";
import { RxCross1 } from "react-icons/rx";
import { dataContext } from "../context/UserContext"
import Card2 from "./Card2";
import { useSelector } from "react-redux";

    

const Cart=()=>{
    let {showCart,setShowCart}= useContext(dataContext)
     let items=useSelector(state=>state.cart)
   console.log(items);
    return(
        <div className={`md:w-[40vw] p-4 w-full h-full bg-blue-100 fixed top-0 right-0 transition-all duration-500 ${showCart?"translate-x-0":"translate-x-full"}`}>
            <header className="w-full flex justify-between items-center p-5">
                <p className="text-lg font-semibold ">
                    Order Items
                </p>
                <RxCross1 className="w-5 h-5 cursor-pointer" onClick={()=>setShowCart(false)}/>

            </header>
            <div>
                {
                    items.map((data)=>(
                        <Card2 id={data.id} name={data.name} image={data.image} price={data.price} qty={data.qty} />
                    ))
                }
            </div>

        </div>
    )
}
export default Cart;