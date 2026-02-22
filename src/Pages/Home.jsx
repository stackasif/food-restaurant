import Nav from "../Components/Nav";

import foodCategory from "../Category.jsx";
import foodItems from "../food.jsx";
import Card from "../Components/Card.jsx";
import { useState } from "react";

const Home=()=>{
    let [cate,setCate]=useState(foodItems)

    function filter(cateName) {
        // console.log(cateName);
        
        if (cateName==="All") {
            setCate(foodItems)
        }else{
           let newItems = foodItems.filter((items)=>(
                // console.log(items);
                items.food_category===cateName
                
           ))
            setCate(newItems)
        }
    }

    return (
        <div className="bg-blue-100 w-full min-h-screen">
            <Nav />
            <div className=" flex flex-wrap gap-5 justify-center items-center w-[full] m-2 md:m-4">
                {
                    foodCategory.map((elem)=>(
                        <div key={elem.id} className="bg-white text-gray-700 w-35 h-35 flex flex-col justify-center items-center p-3 cursor-pointer gap-3 rounded-lg shadow-lg transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-100 hover:bg-blue-100" onClick={()=>filter(elem.name)}>
                            <img src={elem.image} alt="" className="w-15 h-15" />
                             <h2 className="font-bold">{elem.name}</h2>
                        </div>
                    ))
                }
            </div>

            {/* // card Components   // */}

            <div className="w-full flex flex-wrap gap-5 justify-center items-center px-5 py-4">
                {cate.map((items)=>(
                    // console.log(items);
                    
                    <Card key={items.id}  id={items.id} name={items.food_name} category={items.food_category} type={items.food_type} image={items.food_image} price={items.price} />
                ))}
            </div>
        </div>
    )
}

export default Home;