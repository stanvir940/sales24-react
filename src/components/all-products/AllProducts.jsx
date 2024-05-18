// import axios from "axios";
// import { useState, useEffect } from "react";
// import RealProducts from "../products/RealProducts";

// const AllProducts = () => {
//   const [products, setProducts] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);

//   useEffect(() => {
//     fetchProducts();
//   }, [currentPage]); // Fetch products whenever currentPage changes

//   const fetchProducts = async () => {
//     try {
//       const response = await axios.get("http://127.0.0.1:8000/api/products");
//       setProducts(response.data.data);

//       // Assuming Laravel pagination returns data field containing products
//     } catch (error) {
//       console.error("Error fetching products:", error);
//     }
//   };

//   const handleNextPage = () => {
//     setCurrentPage(currentPage + 1);
//   };

//   const handlePrevPage = () => {
//     setCurrentPage(currentPage - 1);
//   };

//   return (
//     <div>
//       <h1>Home Fashion</h1>
//       <RealProducts products={products}></RealProducts>
//       <button
//         onClick={handlePrevPage}
//         className="btn btn-primary"
//         disabled={currentPage === 1}
//       >
//         Previous
//       </button>
//       <button className="btn btn-primary" onClick={handleNextPage}>
//         Next
//       </button>
//     </div>
//   );
// };

// export default AllProducts;

import axios from "axios";
import { useState, useEffect } from "react";
import RealProducts from "../products/RealProducts";
import Search from "../search/Search";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetchProducts();
  }, [currentPage, searchQuery]); // Fetch products whenever currentPage or searchQuery changes

  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/products", {
        params: {
          page: currentPage,
          search: searchQuery,
        },
      });
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

  const handleSearch = (query) => {
    setSearchQuery(query);
    setCurrentPage(1); // Reset to first page on new search
  };

  return (
    <div>
      <Search onSearch={handleSearch} />
      <RealProducts products={products} />
      <div className="flex justify-between mt-4">
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
    </div>
  );
};

export default AllProducts;
