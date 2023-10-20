import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Product from "./Product";
import { AuthContext } from "../providers/AuthProvider";
import { useContext } from "react";


const Home = () => {
    const products=useLoaderData();
    console.log(products);
    const {setLoading}=useContext(AuthContext);
    setLoading(false);
    if(!products){
        return <div className="text-center text-2xl">Loading...</div>
    }
    

    return (
        <div>
            <Banner/>
            <h2 className="text-3xl font-semibold mt-4 mb-3 italic text-center">Our Brands:</h2>
            <div className="grid md:grid-cols-2 
            mt-4 mb-4 max-w-4xl mx-auto gap-5">
               
            {
                products.map((product)=><Product
                key={product._id}
                product={product}
                ></Product>)
            }
            </div>
            <Footer/>
        </div>
    );
};

export default Home;