import { Link, useLoaderData } from "react-router-dom";


const Details = () => {
    const data=useLoaderData();
    console.log(data);
    return (
        <div 
            key={data._id}
            className="  bg-base-100 shadow-xl">
            <figure>
                <img src={data.img_url} alt="Album"/>
                </figure>
            <div className=" ">
             <h2 className=" text-center font-bold">Name:{data.name}</h2>
             <p className=" text-center font-bold">Type:{data.type}</p>
                <p className=" text-center font-bold">Price:{data.price}</p>
                <p className=" text-center font-bold">Ratings:{data.rating}</p> 
                
            <div className=" flex justify-center ">
          <Link
            to={`/netflix/${data._id}`}
          
           className="btn btn-primary">UPDATE</Link>
        </div>
      </div>
    </div>
    );
};

export default Details;