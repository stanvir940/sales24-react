import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../../api/api";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    getProductById(id)
      .then(setProduct)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [id]);

  //console.log(product);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!product) return <div>No Product Found</div>;

  const { title, price, description } = product;
  return (
    <div>
      <div className=" bg-white w-90 p-5">
        <div className="grid grid-cols-2 gap-10 bg-white shadow-slate-700">
          <div className="w-85">
            <img
              src="https://images.pexels.com/photos/2085118/pexels-photo-2085118.jpeg?cs=srgb&dl=pexels-jansel-ferma-306295-2085118.jpg&fm=jpg"
              alt=""
            />
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
                <button className="btn btn-warning">Add to Cart</button>
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

export default ProductDetails;
