import { Link, useLoaderData } from "react-router-dom";

const Netflix = () => {

    const data=useLoaderData();


    const handleAddtoCart=(_id,name,price)=>{

        console.log("Add to cart");
        console.log(_id,name,price);
        const id={_id,name,price};
        fetch('http://localhost:5000/cart',
         {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(id),
        
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            alert("Added to Cart");
        })
        
    }
   
    // console.log(data);
    return (
        <div className="grid md:grid-cols-2 
        mt-4 mb-4 max-w-4xl mx-auto gap-5">
           
        {
            data.map((data)=><div 
            key={data._id}
            className="card  bg-base-100 shadow-xl">
            <figure>
                <img src={data.img_url} alt="Album"/>
                </figure>
            <div className="card-body ">
             <h2 className=" text-center font-bold">Name:{data.name}</h2>
             <p className=" text-center font-bold">Type:{data.type}</p>
                <p className=" text-center font-bold">Price:{data.price}</p>
                <p className=" text-center font-bold">Ratings:{data.rating}</p> 
                
            <div className=" flex justify-between ">
          <Link
            to={`/update/${data._id}`}
          
           className="btn btn-primary">UPDATE</Link>
           <Link 

           onClick={()=>handleAddtoCart(data._id,data.name,data.price)}
            className="btn btn-primary">Add to Cart</Link>
        </div>
      </div>
    </div>)
        }
        </div>
    );
};

export default Netflix;