// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { getProductById } from "../../api/api";
// import { useCart } from "../context/PContext";

// const ProductDetails = () => {
//   const { id } = useParams();
//   const [product, setProduct] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     setLoading(true);
//     getProductById(id)
//       .then(setProduct)
//       .catch((err) => setError(err.message))
//       .finally(() => setLoading(false));
//   }, [id]);

//   //console.log(product);

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error}</div>;
//   // if (!product) return <div>No Product Found</div>;

//   const { title, price, description } = product;

//   // eslint-disable-next-line react-hooks/rules-of-hooks
//   const { addToCart } = useCart();
//   const handleCart = () => {
//     addToCart(product);
//   };

//   return (
//     <div>
//       <div className=" bg-white w-90 p-5">
//         <div className="grid grid-cols-2 gap-10 bg-white shadow-slate-700">
//           <div className="w-85">
//             <img
//               src="https://images.pexels.com/photos/2085118/pexels-photo-2085118.jpeg?cs=srgb&dl=pexels-jansel-ferma-306295-2085118.jpg&fm=jpg"
//               alt=""
//             />
//           </div>

//           <div>
//             <p className="text-3xl font-bold text-gray-900">{title}</p>
//             <h3 className=" mt-5">Thoughts on this product</h3>
//             <label className="swap swap-flip text-6xl mt-5 mb-5">
//               {/* this hidden checkbox controls the state */}

//               <input type="checkbox" />

//               <div className="swap-on">😈</div>
//               <div className="swap-off">😇</div>
//             </label>
//             <p className="text-2xl font-bold text-green-400 mt-5 mb-5">
//               ${price}{" "}
//             </p>

//             <div className="grid grid-cols-2 gap-2">
//               <div>
//                 <button className="btn btn-success">Buy Now</button>
//               </div>
//               <div>
//                 <button onClick={handleCart} className="btn btn-warning">
//                   Add to Cart
//                 </button>
//               </div>
//             </div>
//             <div className="border-t-2 border-gray-300 mt-5"></div>

//             <div className="text-2xl font-medium mt-5 mb-5 text-black">
//               {description}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDetails;

import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useCart } from "../context/PContext";

const ProductDetail = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `http://127.0.0.1:8000/api/product/${id}`
        );
        setProduct(response.data);
      } catch (err) {
        setError(
          err.response ? err.response.data.message : "An error occurred"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const { title, price, description, image } = product;
  //eslint-disable-next-line react-hooks/rules-of-hooks
  const { addToCart } = useCart();
  const handleCart = () => {
    addToCart(product);
  };

  return (
    <div>
      <div className=" bg-white w-90 p-5">
        <div className="grid grid-cols-2 gap-10 bg-white shadow-slate-700">
          <div className="w-85">
            {/* <img
              src="https://images.pexels.com/photos/2085118/pexels-photo-2085118.jpeg?cs=srgb&dl=pexels-jansel-ferma-306295-2085118.jpg&fm=jpg"
              alt=""
            /> */}
            {image ? (
              <img
                src={`http://127.0.0.1:8000/uploads/products/${image}`}
                alt="productsPic"
                className=" max-h-80 w-full"
              />
            ) : (
              <img
                src="https://images.pexels.com/photos/2085118/pexels-photo-2085118.jpeg?cs=srgb&dl=pexels-jansel-ferma-306295-2085118.jpg&fm=jpg"
                alt=""
              />
            )}
          </div>

          <div>
            <p className="text-3xl font-bold text-gray-900">{title}</p>
            <h3 className=" mt-5">Thoughts on this product</h3>
            <label className="swap swap-flip text-6xl mt-5 mb-5">
              {/* this hidden checkbox controls the state */}

              <input type="checkbox" />

              <div className="swap-on">😈</div>
              <div className="swap-off">😇</div>
            </label>
            <p className="text-2xl font-bold text-green-400 mt-5 mb-5">
              ${price}{" "}
            </p>

            <div className="grid grid-cols-2 gap-2">
              <div>
                <button className="btn btn-success">Buy Now</button>
              </div>
              <div>
                <button onClick={handleCart} className="btn btn-warning">
                  Add to Cart
                </button>
              </div>
            </div>
            <div className="border-t-2 border-gray-300 mt-5"></div>

            <div className="text-2xl font-medium mt-5 mb-5 text-black">
              {description}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
