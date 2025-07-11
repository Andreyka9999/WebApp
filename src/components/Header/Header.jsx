import React from "react";
import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "./NavigationMenu";

export default function Header() {
  return (
    <header className="w-full border-b bg-white shadow-sm fixed top-0 left-0 z-50">
      {/* Main container for centering and spacing */}
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo (always links to home) */}
        <Link to="/" className="text-2xl font-bold text-blue-700">MyHomePage</Link>
        {/* Main navigation menu */}
        <NavigationMenu>
          <NavigationMenuList className="flex gap-2">
            {/* Products dropdown */}
            <NavigationMenuItem>
              <NavigationMenuTrigger>Products</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="min-w-[220px] bg-white rounded-xl shadow-2xl border p-2">
                  <li>
                    <NavigationMenuLink asChild>
                      <Link to="/catalog/laptops" className="block px-3 py-2 rounded hover:bg-blue-50 transition">Laptops</Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link to="/catalog/phones" className="block px-3 py-2 rounded hover:bg-blue-50 transition">Smartphones</Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link to="/catalog/accessories" className="block px-3 py-2 rounded hover:bg-blue-50 transition">Accessories</Link>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            {/* Sale dropdown */}
            <NavigationMenuItem>
              <NavigationMenuTrigger>Sale</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="min-w-[180px] bg-white rounded-xl shadow-2xl border p-2">
                  <li>
                    <NavigationMenuLink asChild>
                      <Link to="/sale/special" className="block px-3 py-2 rounded hover:bg-blue-50 transition">Special offers</Link>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            {/* Log In button (right side of the nav) */}
          <Link
            to="/login"
            className="ml-6 px-4 py-2 rounded-md bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
          >
            Log In
          </Link>
            {/* Registration button (outlined style) */}
          <Link to="/register" className="px-4 py-2 rounded-md border text-blue-600 border-blue-600 font-semibold hover:bg-blue-50 transition">
            Registration
          </Link>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
}
