"use client";

import { useState } from "react";
import { Menu, Search, ShoppingCart, User  } from "lucide-react";
import {ShopIcon} from "@/component/icon/Icon";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="shadow-sm border-b bg-white">
      <div className="container mx-auto flex items-center justify-between p-3">
        {/* Left Section */}
        <div className="flex items-center gap-1">
          <button className="p-1">
            <ShopIcon />
          </button>
        </div>

        {/* Search Box */}
        <div className="flex flex-1 mx-6">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="جستجو در فروشگاه..."
              className="w-full rounded-full border bg-gray-100 py-2 px-4 pr-10 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <Search className="absolute right-3 top-2.5 w-5 h-5 text-gray-500" />
          </div>
        </div>

        {/* Right Section */}
        <div className="max-md:hidden flex items-center gap-4">
          <button className="p-2">
            <ShoppingCart className="w-6 h-6 text-red-600" />
          </button>
          <button className="p-2">
            <User className="w-6 h-6 text-red-600" />
          </button>
        </div>
      </div>

      {/* Categories */}
      <nav className="container mx-auto relative">
        <button
          className="flex items-center gap-2 py-3 px-4 text-gray-700 hover:bg-gray-100 rounded-md"
          onClick={() => setOpen(!open)}
        >
          <Menu className="w-5 h-5 text-red-600" />
          دسته‌بندی کالاها
        </button>

        {open && (
          <div className="absolute top-full right-0 bg-white shadow-lg rounded-md w-full md:w-[600px] z-50 p-4">
            <ul className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm">
              <li className="hover:text-red-600 cursor-pointer">موبایل</li>
              <li className="hover:text-red-600 cursor-pointer">لپ‌تاپ</li>
              <li className="hover:text-red-600 cursor-pointer">کامپیوتر</li>
              <li className="hover:text-red-600 cursor-pointer">ساعت هوشمند</li>
              <li className="hover:text-red-600 cursor-pointer">لوازم جانبی</li>
              <li className="hover:text-red-600 cursor-pointer">هدفون و هندزفری</li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
