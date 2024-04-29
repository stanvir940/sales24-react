import { Link } from "react-router-dom";

const Product = (product) => {
  const { id, price, title, description } = product.product;

  // const handledClick = () => {
  //   {
  //     product.map((index, data) => <Page key={index} product={data}></Page>);
  //   }
  // };

  return (
    <Link to={`/product-details/${id}`}>
      <div className="bg-base-100 shadow-xl border-amber-600 rounded-lg">
        <img
          src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          alt="Shoes"
        />
        <div className="flex flex-col gap-3 mt-4 p-4">
          <h2 className="card-title">{title} </h2>
          <p>{description}</p>

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
