import { useContext } from "react";
import { RxCross1 } from "react-icons/rx";
import { dataContext } from "../context/UserContext"
import Card2 from "./Card2";
import { useSelector } from "react-redux";
import Price from "./Price";

    

const Cart=()=>{
    let {showCart,setShowCart}= useContext(dataContext)
     let items=useSelector(state=>state.cart)

     let subTotal = items.reduce((total,item)=>
         total+item.price,0
     )
     let delivery= 20
     let tax=subTotal*18/100;
     let total=Math.floor(subTotal+delivery+tax)
     console.log(tax);
     
     console.log(total);
     
    //  console.log(subTotal);
     
//    console.log(items);
    return(
        <div className={`md:w-[40vw] p-4 w-full h-full bg-blue-100 fixed top-0 right-0 transition-all duration-500 ${showCart?"translate-x-0":"translate-x-full"}`}>
            <header className="w-full flex justify-between items-center p-5">
                <p className="text-lg font-semibold ">
                    Order Items
                </p>
                <RxCross1 className="w-5 h-5 cursor-pointer" onClick={()=>setShowCart(false)}/>

            </header>
            <div className="w-full flex flex-col gap-4">
                {
                    items.map((data)=>(
                        <Card2 id={data.id} name={data.name} image={data.image} price={data.price} qty={data.qty} />
                    ))
                }
            </div>

            <Price subtotal={subTotal} delivery={delivery} tax={tax} total={total}/>

        </div>
    )
}
export default Cart;