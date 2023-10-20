import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import Footer from "../components/Footer";


const Home = () => {
    const products=useLoaderData();
    console.log(products);

    return (
        <div>
            <Banner/>
            <h2 className="text-3xl font-semibold mt-4 mb-3 italic text-center">Our Brands:</h2>
            <div className="grid md:grid-cols-2 
            mt-4 mb-4 max-w-4xl mx-auto gap-5">
               
            {
                products.map((product)=>{
                    return(
                        <div key={product._id}>
            <div className="card  bg-base-100 shadow-xl">
        <figure>
            <img src={product.img_url} alt="Album"/>
            </figure>
        <div className="card-body ">
         <h2 className=" text-center font-bold">{product.name}</h2>
            
        <div className=" flex justify-center ">
      <button className="btn btn-primary">Details</button>
    </div>
  </div>
</div>
                        </div>
                    )
                })
            }
            </div>
            <Footer/>
        </div>
    );
};

export default Home;