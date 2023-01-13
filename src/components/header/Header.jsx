import React from "react";
import { Badge, Input } from "antd";
import {
  SearchOutlined,
  HomeOutlined,
  ShoppingCartOutlined,
  CopyOutlined,
  UserOutlined,
  LineChartOutlined,
  LogoutOutlined,
} from "@ant-design/icons";

const Header = () => {
  const menus = [
    {
      title: "Anasayfa",
      icon: <HomeOutlined className="md:text-2xl text-xl" />,
    },
    {
      title: "Sepet",
      icon: <ShoppingCartOutlined className="md:text-2xl text-xl" />,
      type: "card",
    },
    {
      title: "Faturalar",
      icon: <CopyOutlined className="md:text-2xl text-xl" />,
    },
    {
      title: "Müşteriler",
      icon: <UserOutlined className="md:text-2xl text-xl" />,
    },
    {
      title: "İstatistikler",
      icon: <LineChartOutlined className="md:text-2xl text-xl" />,
    },
    {
      title: "Çıkış",
      icon: <LogoutOutlined className="md:text-2xl text-xl" />,
    },
  ];
  return (
    <div className="border-b mb-6">
      <header className="flex justify-between items-center py-4 px-6 gap-10">
        <div className="logo">
          <a href="/">
            <h2 className="text-2xl font-bold md:text-4xl">LOGO</h2>
          </a>
        </div>
        <div className="header-search flex-1 flex justify-center">
          <Input
            size="large"
            placeholder="Ürün ara.."
            prefix={<SearchOutlined />}
            className="rounded-full max-w-[800px] hover:ring-1 focus:ring-inset hover:ring-sky-300"
          />
        </div>
        <div className="menu-links flex justify-between items-center gap-7 md:static fixed bottom-0 md:w-auto w-screen bg-white md:bg-transparent left-0 md:border-t-0 border-t md:px-0 px-4 py-1">
          {menus.map((menu, i) => {
            return menu?.type === "card" ? (
              <a
                href="/"
                className="menu-link md:flex md:flex-col hidden hover:text-sky-400 transition-all "
                key={`menu-${i}`}
              >
                <Badge count={5} className="flex flex-col hover:text-sky-400 transition-all" offset={[0, 9]}>
                  {menu.icon}
                  <span className="text-xs md:text-md">{menu.title}</span>
                </Badge>
              </a>
            ) : (
              <a
                href="/"
                className="menu-link flex flex-col hover:text-sky-400 transition-all"
                key={`menu-${i}`}
              >
                {menu.icon}
                <span className="text-xs md:text-md">{menu.title}</span>
              </a>
            );
          })}
        </div>

        <div className="md:hidden ">
          <Badge count={5} className="flex flex-col " offset={[0, 9]}>
            <ShoppingCartOutlined className="text-2xl" />
            <span className="text-xs md:text-md">Sepet</span>
          </Badge>
        </div>
      </header>
    </div>
  );
};

export default Header;
