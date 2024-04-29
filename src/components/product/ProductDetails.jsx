import { useParams } from "react-router-dom";
const ProductDetails = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <div>
      <div className=" bg-slate-300">
        <div className="grid grid-cols-2 gap-10 bg-white shadow-slate-700">
          <div className="">
            <img
              src="https://unsplash.com/photos/woman-with-dslr-camera-e616t35Vbeg"
              alt=""
            />
          </div>
          {/* <p>{title}</p> */}
          <label className="swap swap-flip text-9xl">
            {/* this hidden checkbox controls the state */}
            <input type="checkbox" />

            <div className="swap-on">😈</div>
            <div className="swap-off">😇</div>
          </label>
          <div className="join">
            <input
              className="join-item btn btn-square"
              type="radio"
              name="options"
              aria-label="1"
              checked
            />
            <input
              className="join-item btn btn-square"
              type="radio"
              name="options"
              aria-label="2"
            />
            <input
              className="join-item btn btn-square"
              type="radio"
              name="options"
              aria-label="3"
            />
            <input
              className="join-item btn btn-square"
              type="radio"
              name="options"
              aria-label="4"
            />
          </div>
          {/* <div>{price}</div> */}
          <div className="grid grid-cols-2 gap-2">
            <div>
              <button className="btn btn-success">Success</button>
            </div>
            <div>
              <button className="btn btn-warning">Warning</button>
            </div>
          </div>
        </div>
        {/* <div>{description}</div> */}
      </div>
    </div>
  );
};

export default ProductDetails;
