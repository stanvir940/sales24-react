import { Link } from "react-router-dom";

const Product = (product) => {
  const { id, name, price, title, image } = product.product;

  // console.log(product);

  return (
    <Link to={`/product-details/${id}`}>
      <div className="bg-base-100 shadow-xl border-amber-600 rounded-lg min-h-80">
        {image ? (
          <img
            src={`http://127.0.0.1:8000/uploads/products/${image}`}
            alt="productsPic"
            className=" max-h-80 w-full"
          />
        ) : (
          <img
            src="https://cdn0.weddingwire.in/article/2617/3_2/960/jpg/97162-latest-salwar-suit-designs-photos.jpeg"
            alt="Shoes"
          />
        )}

        <div className="flex flex-col gap-3 mt-4 p-4">
          <h2 className="card-title">{title} </h2>
          <p>{name}</p>

          <div className="flex justify-between">
            <p className="font-bold text-cyan-400 flex items-center">
              ${price}{" "}
            </p>
            <button className="rounded px-4 py-2 text-black bg-yellow-400 max-h-[60px]">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Product;
