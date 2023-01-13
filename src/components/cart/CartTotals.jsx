import { Button } from "antd";
import {ClearOutlined} from '@ant-design/icons'

const CartTotals = () => {
  return (
    <div className="cart h-full max-h-[calc(100vh-90px)] flex flex-col">
      <h2 className="bg-blue-600 text-center py-4 font-bold text-white tracking-wide">
        Sepetteki Ürünler
      </h2>
      <div className="cart-items">
        <div className="cart-item">cart item</div>
      </div>

      <div className="cart-totals mt-auto">
        <div className="border-t border-b">
          <div className="flex justify-between p-2">
            <b>Ara Toplam</b>
            <span>99₺</span>
          </div>
          <div className="flex justify-between p-2">
            <b>KDV %8</b>
            <span className="text-red-500">+7.92₺</span>
          </div>
        </div>

        <div className="border-b mt-4">
          <div className="flex justify-between p-2">
            <b className="text-xl text-green-500">Genel Toplam</b>
            <span className="text-xl">99₺</span>
          </div>
        </div>

        <div className="py-4 px-2">
          <Button className="w-full" type="primary" size="large">Sipariş Oluştur</Button>
          <Button className="w-full mt-2 flex items-center justify-center" type="primary" danger size="large" icon={<ClearOutlined />}>Temizle</Button>
        </div>
      </div>
    </div>
  );
};

export default CartTotals;
