
import { useLoaderData } from 'react-router-dom';

const MyCart = () => {
    // const product=useLoaderData();
    // console.log(product);
    // const [cart, setCart] = useState([]);
    // useEffect(() => {
    //     const fetchData = async () => {
    //         const response = await fetch('http://localhost:5000/cart');
    //         const data = await response.json();
    //         setCart(data);
    //     }
    //     fetchData();
    // }, []);
    // console.log(cart);
    fetch('http://localhost:5000/cart' )
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
    })
    

    return (
        <div>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <th>1</th>
        <td>Cy Ganderton</td>
        <td>Quality Control Specialist</td>
        <td>Blue</td>
      </tr>
      {/* row 2 */}
      <tr className="hover">
        <th>2</th>
        <td>Hart Hagerty</td>
        <td>Desktop Support Technician</td>
        <td>Purple</td>
      </tr>
      {/* row 3 */}
      <tr>
        <th>3</th>
        <td>Brice Swyre</td>
        <td>Tax Accountant</td>
        <td>Red</td>
      </tr>
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyCart;