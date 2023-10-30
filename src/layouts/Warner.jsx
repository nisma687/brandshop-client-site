
import {Link, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
const Warner = () => {
    const data=useLoaderData();

    const handleAddtoCart=(_id,name,price)=>{

        console.log("Add to cart");
        console.log(_id,name,price);
        const id={_id,name,price};
        fetch('https://media-store-server-bakkboswo-nismahossain41982-gmailcom.vercel.app/cart',
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
            // alert("Added to Cart");
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Added to the cart',
              showConfirmButton: false,
              timer: 1500
            })
        })
        
    }
   
    return (
        <div className="
        mt-4 mb-4 max-w-4xl mx-auto ">

        
<h2 className="text-4xl text-bold text-purple-600 mb-4">Most popular at this site......</h2>

<div className="carousel w-full ">
  <div id="slide1" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/nBk6c2Z/Screenshot-2023-10-21-080418.png" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/SJn09L9/the-dark-knight.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/d6vb0NQ/inception.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div> 
 
</div>
   

        <h4 className="text-3xl text-center font-semibold text-purple-500 mb-4">All the Services For this Brand We Have:</h4>












        <div className='grid md:grid-cols-2 gap-5 mt-4 mb-2'>
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
            to={`/warner/${data._id}`}
          
           className="btn btn-primary">UPDATE</Link>
           <Link 

           onClick={()=>handleAddtoCart(data._id,data.name,data.price)}
            className="btn btn-primary">Add to Cart</Link>
        </div>
      </div>
    </div>)
        }
        </div>


           
        
        </div>
    );
};

export default Warner;