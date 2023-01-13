import Seftali from "../../assets/images/seftali.jpg";
import Karpuz from "../../assets/images/karpuz.jpg";

const Products = () => {
  const testProducts = [
    {
      name: "Şeftali",
      price: "12₺",
      image: Seftali,
    },
    {
      name: "Karpuz",
      price: "21,50₺",
      image: Karpuz,
    },
  ];

  return (
    <div className="products-wrapper grid gap-4 grid-cols-card">
      {testProducts.map((product) => (
        <div className="product-item border hover:shadow-lg cursor-pointer transition-all delay-50 select-none">
          <div className="product-img">
            <img
              src={product.image}
              alt=""
              className="h-28 object-cover w-full border-b"
            />
          </div>
          <div className="product-info flex flex-col p-3">
            <span className="font-bold">{product.name}</span>
            <span>{product.price}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
