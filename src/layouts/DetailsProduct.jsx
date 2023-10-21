import { Link, useLoaderData, useParams } from "react-router-dom";


const DetailsProduct = () => {
 
    const { name } = useParams();
    console.log( name);
    
    
    return (
        <div>
            <h3 className="text4xl">Details of the product</h3>
          <div className="grid grid-cols-4 justify-between gap-3">
          <Link to="/netflix" className="btn btn-primary">Netflix</Link>
           <Link to="/spotify" className="btn btn-primary">Spotify</Link>
           <Link to="/warner" className="btn btn-primary">Warner</Link>
           <Link to="/sony" className="btn btn-primary">Sony</Link>
              <Link to="/disney" className="btn btn-primary">Disney</Link>
                <Link to="/timewarner" className="btn btn-primary">Time Warner</Link>
            </div>

            


        </div>
    );
};

export default DetailsProduct;