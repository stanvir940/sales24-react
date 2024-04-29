import { useEffect, useState } from "react";
import Product from "../product/Product";

const Products = () => {
  const [jsonData, setJsonData] = useState([]);

  useEffect(() => {
    fetch("dummy.json")
      .then((response) => response.json())
      .then((result) => {
        setJsonData(result);
        // console.log(result);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-1 mt-5 ml-3 mb-5">
      {jsonData.map((data, index) => (
        <Product key={index} product={data}></Product>
      ))}
    </div>
  );
};

export default Products;
