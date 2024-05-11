import Product from "../product/Product";

const RealProducts = ({ products }) => {
  //   console.log(products);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-5 ml-3 mb-5 gap-4">
      {products.map((data, key) => (
        <Product key={key} product={data}></Product>
      ))}
    </div>
  );
};

export default RealProducts;
