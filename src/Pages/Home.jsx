import Nav from "../Components/Nav";

import category from "../Category.jsx";
import Card from "../Components/Card.jsx";
import foodItems from "../food.jsx";

const Home=()=>{
    return (
        <div className="bg-blue-100 w-full min-h-screen">
            <Nav />
            <div className=" flex flex-wrap gap-5 justify-center items-center w-[full] m-2 md:m-4">
                {
                    category.map((elem)=>(
                        <div key={elem.id} className="bg-white text-gray-700 w-35 h-35 flex flex-col justify-center items-center p-3 cursor-pointer gap-3 rounded-lg shadow-lg transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-100 hover:bg-blue-100 ">
                            <img src={elem.image} alt="" className="w-15 h-15" />
                             <h2 className="font-bold">{elem.name}</h2>
                        </div>
                    ))
                }
            </div>
            <div className="w-full flex flex-wrap gap-5 justify-center items-center px-5 py-4">
                {foodItems.map((items)=>(
                    // console.log(items);
                    
                    <Card  id={items.id} name={items.food_name} category={items.food_category} type={items.food_type} image={items.food_image} price={items.price} />
                ))}
            </div>
        </div>
    )
}

export default Home;