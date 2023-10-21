import Swal from "sweetalert2";


const AddProduct = () => {
    const handleAddProduct=(e)=>{
        e.preventDefault();
        const form=e.target;
        const name=form.name.value;
        const type=form.type.value;
        const price=form.price.value;
        const description=form.description.value;
        const rating=form.rating.value;
        const img_url=form.img_url.value;
        console.log(name,type,price,description,rating,img_url);
        const product={
            name,
            type,
            price,
            description,
            rating,
            img_url
        }
        fetch("https://media-store-server-ffaumifm6-nismahossain41982-gmailcom.vercel.app/netflix",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(product)
        }).then(()=>{
            // alert("Product Added Successfully");
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Product has been added',
                showConfirmButton: false,
                timer: 1500
              })
            form.reset();
        }).catch((err)=>{
            alert("Error while adding product");
            console.log(err);
        })
    }
    return (
        <div className="bg-[#F4F3F0] p-24">
            <h2 className="text-3xl text-center font-bold italic mb-2">Add Product </h2>
            <p className="text-xl font-semibold mb-2 text-center">
                To add a product fill the form</p>
            <form onSubmit={handleAddProduct}>
          
            <div className="md:flex mb-8">
            <div className="form-control w-full">
                <label className="label">
            <span className="label-text">Product Name</span>
                </label>
            <label className="input-group">
             
        <input type="text" placeholder="Name" 
        name="name" required
        className="input input-bordered w-full" />
            </label>
            </div>

           


            </div>
         
            <div className="md:flex mb-8">

            <div className="form-control md:w-1/2">
                <label className="label">
            <span className="label-text">Type </span>
                </label>
            <label className="input-group">
             
        <input type="text" placeholder="Type of your Product" 
        name="type" required
        className="input input-bordered w-full" />
            </label>
            </div>

            <div className="form-control md:w-1/2 ml-4">
                <label className="label">
            <span className="label-text">Price </span>
                </label>
            <label className="input-group">
             
        <input type="text" placeholder="Price" 
        name="price" required
        className="input input-bordered w-full" />
            </label>
            </div>


            </div>
         
            <div className="md:flex mb-8">

            <div className="form-control md:w-1/2">
                <label className="label">
            <span className="label-text">Short Description</span>
                </label>
            <label className="input-group">
             
        <input type="text" placeholder="Description of the product" 
        name="description" required
        className="input input-bordered w-full" />
            </label>
            </div>

            <div className="form-control md:w-1/2 ml-4">
                <label className="label">
            <span className="label-text">Rating </span>
                </label>
            <label className="input-group">
             
        <input type="text" placeholder="Rating" 
        name="rating" required
        className="input input-bordered w-full" />
            </label>
            </div>


            </div>
           
            <div className="mb-8">

            <div className="form-control w-full">
            <label className="label">
            <span className="label-text">Image Url</span>
                </label>
            <label className="input-group">
             
        <input type="text" placeholder="Image Url" 
        name="img_url" required
        className="input input-bordered w-full" />
            </label>
            </div>

            

            </div>

            

        <input className="btn
         btn-block bg-black text-white"
         type="submit" value="Add Product"/>




        </form>
        </div>
    );
};

export default AddProduct;