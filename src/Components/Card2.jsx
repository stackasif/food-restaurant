import image1 from '../assets/images/img5.avif'
import { RiDeleteBin6Line } from "react-icons/ri";

const Card2=()=>{
    return(
        <div className='w-full h-30 p-3 shadow-lg rounded-lg flex justify-between '>
            {/* left */}
            <div className='w-[60%] h-full  flex rounded gap-4'>
                <div className='w-[60%] h-full overflow-hidden rounded'>
                    <img src={image1} alt="" className=''/>
                </div>
                <div className='w-[40%] h-full flex flex-col gap-2 justify-center items-center'>
                    <p className='font-semibold'>Pancake</p>
                    <div className='w-25 h-12 flex ustify-center items-center rounded-lg overflow-hidden shadow-lg font-semibold border-2 border-blue-500'>
                        <button className='w-[30%] h-full bg-white flex justify-center items-center cursor-pointer'>-</button>
                        <span className='w-[40%] h-full bg-gray-300  flex justify-center items-center'>1</span>
                        <button className='w-[30%] h-full bg-white flex justify-center items-center cursor-pointer'>+</button>
                    </div>
                </div>
            </div>

            {/* right */}
            <div className='flex flex-col justify-start items-end gap-4'>
                <p className='font-semibold'>Rs 499/-</p>
                <RiDeleteBin6Line className='text-red-600 text-2xl cursor-pointer' />
                
            </div>
        </div>
    )
}

export default Card2;