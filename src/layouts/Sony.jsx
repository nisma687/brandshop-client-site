import {Link, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const Sony = () => {
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
        mt-10 mb-8 max-w-4xl mx-auto gap-5 text-center ">
           
        <h1 className="text-4xl font-bold text-purple-600">Coming soon....</h1>
        <h2 className="text-2xl text-purple-500 font-semibold">Please Look At the other brands</h2>
        <h3 className='text-xl text-purple-400 font-normal'>Thank You!!!</h3>
        </div>
    );
};

export default Sony;