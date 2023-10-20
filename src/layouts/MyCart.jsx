
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const MyCart = () => {
    const cart=useLoaderData();
    console.log(cart);
    const[carts,setCarts]=useState(cart);
    
    console.log(carts);
    const handleDelete=(_id)=>{
        console.log("delete",_id);
        fetch(`http://localhost:5000/cart/${_id}`,{
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(result=>{
            console.log(result);
            alert("Deleted from Cart");
            const remainingCarts=carts.filter(cart=>cart._id!==_id);
            setCarts(remainingCarts);
        })
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
          <tr key={item.id}>
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