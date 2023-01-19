import CartTotals from "../cart/CartTotals";
import Categories from "../categories/Categories";
import Products from "../products/Products";

const Home = () => {
  return (
    <div className="home px-6 flex md:flex-row flex-col justify-between gap-10 md:pb-0 pb-24">
      <div className="categories overflow-auto max-h-[calc(100vh-124px)] md:pb-64 ">
        <Categories />
      </div>

      {/* Products */}
      <div className="products flex-[8] max-h-[calc(100vh-124px)] overflow-y-auto pb-10">
        <Products />
      </div>

      {/* Card Totals Sidebar */}
      <div className="cart-wrapper min-w-[300px]  md:-mr-[24px]  md:-mt-[24px] border ">
        <CartTotals />
      </div>
    </div>
  );
};

export default Home;
