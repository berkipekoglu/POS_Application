import CartTotals from "../cart/CartTotals";
import Categories from "../categories/Categories";
import Products from "../products/Products";

const Home = () => {
  return (
    <div className="home px-6 flex justify-between gap-10 ">
      <div className="categories overflow-auto max-h-[calc(100vh-124px)] pb-64">
        <Categories />
      </div>

      {/* Products */}
      <div className="products flex-[8] ">
        <Products />
      </div>

      {/* Card Totals Sidebar */}
      <div className="cart-wrapper min-w-[300px] md:-mr-[24px]  md:-mt-[24px] border">
        <CartTotals />
      </div>
    </div>
  );
};

export default Home;
