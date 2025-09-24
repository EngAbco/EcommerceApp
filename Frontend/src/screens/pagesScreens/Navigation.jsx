import React from "react";
import { Link } from "react-router-dom";
import { Blinds, AlignJustify, X as XIcon } from "lucide-react";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetClose,
} from "@/components/ui/sheet";

export const shopingheader = [
  { id: 1, label: "Home", path: "/shop/home" },
  { id: 2, label: "Products", path: "/shop/products" },
  { id: 3, label: "Men", path: "/shop/men" },
  { id: 4, label: "Women", path: "/shop/women" },
  { id: 5, label: "Kids", path: "/shop/kids" },
];

export const MenuItems = ({ isMobile }) => {
  return (
    <div
      className={`flex ${
        isMobile ? "flex-col gap-3" : "flex-row gap-6"
      } items-center`}
    >
      {shopingheader?.map((Nav) => (
        <Link
          key={Nav.id}
          to={Nav.path}
          className="px-2 py-1 hover:text-orange-500"
        >
          {Nav.label}
        </Link>
      ))}
    </div>
  );
};

export const Navigation = () => {
  return (
    <div className="sticky top-0 w-full bg-[#0B1D51] text-slate-100 px-4 py-2 z-50">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link to="/shop/home" className="flex items-center space-x-2">
          <Blinds size={22} color="orange" />
          <span className="font-semibold">Som suuq market</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex">
          <MenuItems />
        </div>

        {/* Mobile Menu */}
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <button className="p-2">
                <AlignJustify size={18} />
              </button>
            </SheetTrigger>

            <SheetContent className="p-4">
              <div className="flex justify-end mb-4">
                <SheetClose asChild>
                  <button>
                    <XIcon size={20} />
                  </button>
                </SheetClose>
              </div>
              <MenuItems isMobile />
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
