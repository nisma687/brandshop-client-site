
import { useState } from 'react';

import { useLoaderData } from 
'react-router-dom';
import Swal from 'sweetalert2';

const MyCart = () => {
    const cart=useLoaderData();
    console.log(cart);
    const[carts,setCarts]=useState(cart);
    
    console.log(carts);
    const handleDelete=(_id)=>{
        console.log("delete",_id);
        Swal.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            )
            fetch(`https://media-store-server-ffaumifm6-nismahossain41982-gmailcom.vercel.app/cart/${_id}`,
            {
                method:'DELETE'
            })
            .then(res=>res.json())
            .then(result=>{
                console.log(result);
                if(result.deletedCount>0)
                {
                    
    
                    const remainingCarts=
                carts.filter(cart=>cart._id!==_id);
    
                    setCarts(remainingCarts);
                }
               
            })
          }
        })
        
        // fetch(`https://media-store-server-ffaumifm6-nismahossain41982-gmailcom.vercel.app/cart/${_id}`,
        // {
        //     method:'DELETE'
        // })
        // .then(res=>res.json())
        // .then(result=>{
        //     console.log(result);
        //     if(result.deletedCount>0)
        //     {
        //         alert("Deleted from Cart");

        //         const remainingCarts=
        //     carts.filter(cart=>cart._id!==_id);

        //         setCarts(remainingCarts);
        //     }
           
        // })
    }

    

    return (
        <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        
        <th>Name</th>
        <th>Price</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
     {
        carts.map((item) => (
          <tr key={item._id}>
            <td>{item.name}</td>
            <td>{item.price}</td>
            <td><button onClick={()=>handleDelete(item._id)} className='btn'>X</button></td>
          </tr>
        ))
     }
      
     
      
    </tbody>
  </table>
</div>
    );
};

export default MyCart;