import { useCart } from "../context/PContext";

const Cart = () => {
  const { cartItems } = useCart();
  // console.log(cartItems);
  return (
    <div className="p-10 text-black">
      <table className="table border-2 font-light border-black">
        <thead>
          <th>title</th>
          <th>id</th>
          <th>imageUrl</th>
          <th>price</th>
          <th></th>
        </thead>
        <tbody>
          {cartItems.map((row, index) => (
            <tr key={index}>
              <td>{row.name} </td>
              <td>{row.id} </td>
              <td>
                <img
                  src={`http://127.0.0.1:8000/uploads/products/${row.image}`}
                  alt=""
                  className=" w-5"
                />
              </td>
              <td>{row.price} </td>
              <td>
                <button>Cancel</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Cart;
