import { Link, useLoaderData, useParams } from "react-router-dom";


const DetailsProduct = () => {
 
    const { name } = useParams();
    console.log( name);
    
    
    return (
        <div>
            <h3 className="text4xl">Details of the product</h3>
          <div className="grid grid-cols-4 justify-between gap-3">
          <Link to="/netflix" className="btn btn-primary">Netflix</Link>
           <Link to="/netflix" className="btn btn-primary">Netflix</Link>
           <Link to="/netflix" className="btn btn-primary">Netflix</Link>
           <Link to="/netflix" className="btn btn-primary">Netflix</Link>
            </div>

            


        </div>
    );
};

export default DetailsProduct;