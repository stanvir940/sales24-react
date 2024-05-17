import axios from "axios";
import { useState, useEffect } from "react";
import RealProducts from "../products/RealProducts";

const WomenFashion = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetchProducts();
  }, [currentPage]); // Fetch products whenever currentPage changes

  const fetchProducts = async () => {
    try {
      const response = await axios.get(
        "http://127.0.0.1:8000/api/products?category=women"
      );
      setProducts(response.data.data);

      // Assuming Laravel pagination returns data field containing products
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
    <div>
      <h1>Women Fashion</h1>
      <RealProducts products={products}></RealProducts>
      <button
        onClick={handlePrevPage}
        className="btn btn-primary"
        disabled={currentPage === 1}
      >
        Previous
      </button>
      <button className="btn btn-primary" onClick={handleNextPage}>
        Next
      </button>
    </div>
  );
};

export default WomenFashion;
