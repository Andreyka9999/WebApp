import React, { useEffect, useRef, useState, useMemo } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [desktopProductOpen, setDesktopProductOpen] = useState(false);
  const [mobileProductOpen, setMobileProductOpen] = useState(false);
  const productRef = useRef(null);

  // Mini class presets
  const ui = useMemo(() => {
    // very light animations (short and smooth)
    const t = "transition-all duration-200 ease-out";
    const focus = "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900/10";
    return {
      navLink:
        `relative inline-flex items-center rounded-lg px-3 py-2 text-sm font-medium text-gray-900/90 ${t} ${focus} ` +
        "after:content-[''] after:absolute after:left-3 after:right-3 after:-bottom-px after:h-[1.5px] after:scale-x-0 after:bg-gray-900/40 after:origin-left after:transition-transform after:duration-200 hover:after:scale-x-100 hover:text-gray-900",
      outlineBtn:
        `inline-flex items-center rounded-lg border border-gray-200 bg-white px-3.5 py-2 text-sm font-semibold text-gray-900 shadow-sm ${t} ${focus} ` +
        "hover:bg-gray-50 active:scale-[.99]",
      solidBtn:
        `inline-flex items-center rounded-lg bg-gray-900 px-4 py-2 text-sm font-semibold text-white shadow-sm ${t} ${focus} ` +
        "hover:bg-gray-800 active:scale-[.99]",
      ghostIcon:
        `inline-flex items-center justify-center rounded-lg p-2.5 text-gray-700 ${t} hover:bg-gray-100 ${focus}`,
      ctaCell:
        "flex items-center justify-center gap-2.5 p-3 text-sm font-semibold text-gray-900 hover:bg-gray-100 transition-colors",
      menuItem:
        "group relative flex items-center gap-x-4 rounded-xl p-4 hover:bg-gray-50 transition-colors",
    };
  }, []);

  // Close desktop popover on click outside
  useEffect(() => {
    const onDocClick = (e) => {
      if (!productRef.current) return;
      if (!productRef.current.contains(e.target)) setDesktopProductOpen(false);
    };
    document.addEventListener("click", onDocClick);
    return () => document.removeEventListener("click", onDocClick);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/70">
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        {/* Логотип */}
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5" aria-label="Home">
            <img src="/Logo.svg" alt="Logo" className="h-9 w-auto" />
          </Link>
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            className={ui.ghostIcon}
            aria-label="Open main menu"
            aria-expanded={mobileOpen}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" className="size-6">
              <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        {/* Desktop navigation */}
        <div className="hidden lg:flex lg:items-center lg:gap-x-3">
          {/* ------- Product (фикс ховера, логика прежняя) ------- */}
          <div
            className="relative pt-3"
            ref={productRef}
            onMouseEnter={() => setDesktopProductOpen(true)}
            onMouseLeave={() => setDesktopProductOpen(false)}
          >
            <button
              onClick={() => setDesktopProductOpen((v) => !v)}
              className="relative inline-flex items-center rounded-lg bg-white/70 backdrop-blur ring-1 ring-gray-900/10 px-4 py-2 text-sm font-semibold text-gray-900 shadow-sm transition-all duration-200 ease-out hover:bg-white hover:ring-gray-900/20"
              aria-expanded={desktopProductOpen}
              aria-haspopup="menu"
            >
              <span>Product</span>
              <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className={`ml-1 size-5 text-gray-500 transition-transform ${desktopProductOpen ? "rotate-180" : ""}`}>
                <path d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" fillRule="evenodd" />
              </svg>
            </button>

            <div
              role="menu"
              className={`absolute left-1/2 top-full z-50 w-screen max-w-md -translate-x-1/2 overflow-hidden rounded-3xl border border-gray-200 bg-white/95 shadow-xl outline outline-1 outline-gray-900/5 transition-all duration-200 ${
                desktopProductOpen ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-1 opacity-0"
              }`}
            >
              <div className="p-4">
                {[
                  { title: "Laptops",      desc: "Power & portability for pros.", to: "/catalog/laptops" },
                  { title: "Smartphones",  desc: "Flagship devices & compact tech.", to: "/catalog/phones" },
                  { title: "Accessories",  desc: "Audio, cases, chargers & more.", to: "/catalog/accessories" },
                ].map((item) => (
                  <Link key={item.title} to={item.to} className={ui.menuItem} onClick={() => setDesktopProductOpen(false)}>
                    <div className="flex size-10 flex-none items-center justify-center rounded-lg bg-gray-50">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" className="size-6 text-gray-600 group-hover:text-gray-800 transition-colors">
                        <path d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <div className="flex-auto">
                      <span className="block font-semibold text-gray-900">{item.title}</span>
                      <p className="mt-1 text-gray-600">{item.desc}</p>
                    </div>
                  </Link>
                ))}
              </div>
              <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                <a href="#" className={ui.ctaCell}>Watch demo</a>
                <a href="#" className={ui.ctaCell}>Contact sales</a>
              </div>
            </div>
          </div>
          {/* ----------------------------------- */}

          {/* NAV-links */}
          <Link to="/features" className={ui.navLink}>Features</Link>
          <Link to="/marketplace" className={ui.navLink}>Marketplace</Link>
          <Link to="/company" className={ui.navLink}>Company</Link>

          <div className="ml-2 flex items-center gap-2">
            <Link to="/login" className={ui.outlineBtn}>Log in</Link>
            <Link to="/register" className={ui.solidBtn}>Get started</Link>
          </div>
        </div>
      </nav>

      {/* Mobile panel */}
      {mobileOpen && (
        <div className="lg:hidden">
          <div className="fixed inset-0 z-40 bg-black/20 backdrop-blur-[1px]" onClick={() => setMobileOpen(false)} />
          <div className="fixed inset-y-0 right-0 z-50 w-full max-w-sm overflow-y-auto bg-white p-6 shadow-xl ring-1 ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link to="/" className="-m-1.5 p-1.5" onClick={() => setMobileOpen(false)}>
                <img src="/Logo.svg" alt="Logo" className="h-8 w-auto" />
              </Link>
              <button type="button" onClick={() => setMobileOpen(false)} className={ui.ghostIcon} aria-label="Close menu">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" className="size-6">
                  <path d="M6 18 18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>

            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-200/80">
                <div className="space-y-2 py-6">
                  <div className="-mx-3">
                    <button
                      type="button"
                      onClick={() => setMobileProductOpen((v) => !v)}
                      className="flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base font-semibold text-gray-900 hover:bg-gray-50 transition"
                      aria-expanded={mobileProductOpen}
                    >
                      Product
                      <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className={`size-5 flex-none transition-transform ${mobileProductOpen ? "rotate-180" : ""}`}>
                        <path d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" fillRule="evenodd" />
                      </svg>
                    </button>

                    {mobileProductOpen && (
                      <div className="mt-2 space-y-2">
                        <Link to="/catalog/laptops"     onClick={() => setMobileOpen(false)} className="block rounded-lg py-2 pr-3 pl-6 text-sm font-semibold text-gray-900 hover:bg-gray-50">Laptops</Link>
                        <Link to="/catalog/phones"      onClick={() => setMobileOpen(false)} className="block rounded-lg py-2 pr-3 pl-6 text-sm font-semibold text-gray-900 hover:bg-gray-50">Smartphones</Link>
                        <Link to="/catalog/accessories" onClick={() => setMobileOpen(false)} className="block rounded-lg py-2 pr-3 pl-6 text-sm font-semibold text-gray-900 hover:bg-gray-50">Accessories</Link>
                        <a href="#" className="block rounded-lg py-2 pr-3 pl-6 text-sm font-semibold text-gray-900 hover:bg-gray-50">Watch demo</a>
                        <a href="#" className="block rounded-lg py-2 pr-3 pl-6 text-sm font-semibold text-gray-900 hover:bg-gray-50">Contact sales</a>
                      </div>
                    )}
                  </div>

                  <Link to="/features"    onClick={() => setMobileOpen(false)} className="block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50 transition">Features</Link>
                  <Link to="/marketplace" onClick={() => setMobileOpen(false)} className="block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50 transition">Marketplace</Link>
                  <Link to="/company"     onClick={() => setMobileOpen(false)} className="block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50 transition">Company</Link>
                </div>

                <div className="py-6">
                  <div className="flex items-center gap-2">
                    <Link to="/login"    onClick={() => setMobileOpen(false)} className="flex-1 text-center rounded-lg border border-gray-200 bg-white px-4 py-2 text-base font-semibold text-gray-900 shadow-sm hover:bg-gray-50 transition">Log in</Link>
                    <Link to="/register" onClick={() => setMobileOpen(false)} className="flex-1 text-center rounded-lg bg-gray-900 px-4 py-2 text-base font-semibold text-white shadow-sm hover:bg-gray-800 transition">Get started</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
