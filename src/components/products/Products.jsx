import { useEffect, useState } from "react";
import { getAllProducts } from "../../api/api";
import Product from "../product/Product";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const data = await getAllProducts();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-5 ml-5 mb-5 gap-4">
      {products.map((data, index) => (
        <Product key={index} product={data}></Product>
      ))}
    </div>
  );
};

export default Products;
