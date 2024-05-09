import { useCart } from "../context/PContext";

const Cart = () => {
  const { cartItems } = useCart();
  console.log(cartItems);
  return (
    <div className="p-10">
      <table className="table border-2 font-light">
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
              <td>{row.title} </td>
              <td>{row.id} </td>
              <td>
                <img src={row.imageUrl} alt="" />
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
