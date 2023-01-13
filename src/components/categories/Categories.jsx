const Categories = () => {
  return (
    <ul className="flex flex-col gap-4 text-xl">
        <li className="bg-green-600 px-6 py-10 text-white text-center cursor-pointer hover:bg-pink-600 transition-all min-w-[145px]">
            <span className="">Tümü</span>
        </li>

        <li className="bg-green-600 px-6 py-10 text-white text-center cursor-pointer hover:bg-pink-600 transition-all min-w-[145px]">
            <span className="">Yiyecek</span>
        </li>

        <li className="bg-green-600 px-6 py-10 text-white text-center cursor-pointer hover:bg-pink-600 transition-all min-w-[145px]">
            <span className="">İçecek</span>
        </li>

        <li className="bg-green-600 px-6 py-10 text-white text-center cursor-pointer hover:bg-pink-600 transition-all min-w-[145px]">
            <span className="">İçecek</span>
        </li>

        <li className="bg-green-600 px-6 py-10 text-white text-center cursor-pointer hover:bg-pink-600 transition-all min-w-[145px]">
            <span className="">İçecek</span>
        </li>

        
    </ul>
  )
}

export default Categories