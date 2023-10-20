import { Link } from "react-router-dom";


const Product = ({product}) => {

    return (
                   <div className="card  bg-base-100 shadow-xl">
        <figure>
            <img src={product.img_url} alt="Album"/>
            </figure>
        <div className="card-body ">
         <h2 className=" text-center font-bold">{product.name}</h2>
            
        <div className=" flex justify-center ">
      <Link
        to="/details"
      
       className="btn btn-primary">Details</Link>
    </div>
  </div>
</div>
    );
};

export default Product;