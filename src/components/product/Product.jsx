import { Link } from "react-router-dom";
import Page from "../product-page/Page";

const Product = (product) => {
  const { id, price, title, description } = product.product;

  const handledClick = () => {
    {
      product.map((index, data) => <Page key={index} product={data}></Page>);
    }
  };

  return (
    <>
      <Link to={`/home/page/${id}`} onClick={handledClick}>
        <div className=" mt-5">
          <div className="card h-45 w-80 bg-base-100 shadow-xl border-amber-600">
            <figure>
              <img
                src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{title} </h2>
              <p>{description}</p>

              <div className="card-actions justify-end">
                <p className="font-bold text-cyan-400 ml-10 mt-3">${price} </p>
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Product;
