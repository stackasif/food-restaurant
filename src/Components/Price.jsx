import { toast } from "react-toastify";

const Price=({subtotal,delivery,tax,total})=>{
    return(
        <>
        <div  className= " border-t-2 border-b-2 border-gray-400 w-full mt-7 flex flex-col gap-2 p-4">
            <div className="flex justify-between items-center ">
                <p className="text-md font-semibold text-gray-600">SubTotal :</p>
                <span className="font-semibold">Rs {subtotal}/-</span>
            </div>
            <div className="flex justify-between items-center ">
                <p className="text-md font-semibold text-gray-600">Delivery fee:</p>
                <span className="font-semibold">Rs {delivery}/-</span>
            </div>
            <div className="flex justify-between items-center ">
                <p className="text-md font-semibold text-gray-600">Tax :</p>
                <span className="font-semibold">Rs {tax}/-</span>
            </div>
        </div>
        <div className="my-3">
             <div className="flex justify-between items-center px-4">
                <p className="text-lg font-bold text-gray-600">Total :</p>
                <span className="font-bold">Rs {total}/-</span>
            </div>
        </div>
        <div className="w-[full] bg-zinc-800 p-2 rounded-md text-[15px] font-semibold cursor-pointer text-white hover:bg-zinc-900 transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-100 hover:text-white" onClick={()=>toast.success("Order Placed")}>
            <h2 className="text-center">
                Place Order
            </h2>
        </div>
        </>
    )
}
export default Price;