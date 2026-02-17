import Nav from "../Components/Nav";

import category from "../Category.jsx";

const Home=()=>{
    return (
        <div className="bg-blue-100 w-full min-h-screen">
            <Nav />
            <div className="w-16 h-16 flex gap-5">
                {
                    category.map((elem)=>(
                        <div key={elem.id} className=" bg-amber-400">
                            {/* {elem.image} */}
                            <h2>
                                {elem.name}
                            </h2>
                          <img src={elem.image} alt="" />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Home;