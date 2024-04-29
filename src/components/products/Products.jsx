import useFetchJsonData from "../../hooks/useFetchJsonData";
import Product from "../product/Product";

const Products = () => {
  const { data, loading, error } = useFetchJsonData("dummy.json");

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-5 ml-3 mb-5 gap-4">
      {data.map((data, index) => (
        <Product key={index} product={data}></Product>
      ))}
    </div>
  );
};

export default Products;
