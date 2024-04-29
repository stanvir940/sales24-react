import Banner from "../home-banner/Banner";
import Products from "../products/Products";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div>
        <p className="flex justify-center items-center text-black mt-5">
          ----------Products----------
        </p>
        <Products></Products>
      </div>
    </div>
  );
};

export default Home;
