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
        <div>
             <div className="flex justify-between items-center px-4">
                <p className="text-lg font-bold text-gray-600">Total :</p>
                <span className="font-bold">Rs {total}/-</span>
            </div>
        </div>
        </>
    )
}
export default Price;