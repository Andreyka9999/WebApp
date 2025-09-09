import React from "react";
import { Link } from "react-router-dom";

export default function Marketplace() {
  return (
    <main className="relative overflow-clip">
      
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/3 top-[-120px] h-[420px] w-[420px] rounded-full bg-gradient-to-tr from-indigo-400/30 via-blue-400/20 to-cyan-300/20 blur-3xl" />
        <div className="absolute right-[-120px] bottom-[-140px] h-[520px] w-[520px] rounded-full bg-gradient-to-tr from-fuchsia-400/20 via-violet-400/20 to-sky-300/20 blur-3xl" />
      </div>

      {/* Hero with descriptions and buttons */}
      <section className="mx-auto max-w-7xl px-6 pt-20 sm:pt-28">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="inline-flex items-center rounded-full border border-black/5 bg-white/60 px-3 py-1 text-xs font-semibold text-gray-700 shadow-sm backdrop-blur">
              Latvian
            </span>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
              The best of the ecosystem — all in one place
            </h1>
            <p className="mt-4 max-w-xl text-gray-600">
              Selected proposals, strict visual language and micro-animations.
              Everything is fast, clean and focused on the product.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <Link
                to="/catalog/laptops"
                className="inline-flex items-center rounded-xl bg-gray-900 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:shadow-lg hover:brightness-110 active:scale-[.99]"
              >
                View catalogue
              </Link>
              <Link
                to="/company"
                className="inline-flex items-center rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm font-semibold text-gray-900 shadow-sm transition-all duration-200 hover:bg-gray-50 active:scale-[.99]"
              >
                About company
              </Link>
            </div>
          </div>

          {/* Card display case */}
          <div className="relative">
            <div className="absolute -inset-3 rounded-2xl bg-white/40 shadow-[0_5px_40px_rgba(0,0,0,0.08)] ring-1 ring-black/5 backdrop-blur" />
            <div className="relative grid grid-cols-2 gap-4 p-6">
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="group relative overflow-hidden rounded-2xl border border-black/5 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl" >
                  <div className="aspect-[4/3] w-full rounded-xl overflow-hidden">
                  <img src="/img/65501816_large.jpg" alt="Aqua Filter" className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"/>
                  </div>

                  <div className="mt-3 flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold text-gray-900">
                        Product #{i + 1}
                      </p>
                      <p className="text-xs text-gray-500">Smart-devices</p>
                    </div>
                    <span className="rounded-lg bg-gray-900 px-2.5 py-1 text-xs font-semibold text-white transition group-hover:brightness-110">
                      New
                    </span>
                  </div>
                  <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="absolute -inset-24 rotate-6 bg-gradient-to-tr from-white/60 to-transparent blur-2xl" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="mx-auto mt-16 max-w-7xl px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            ["Guaranteed selection. Only proven brands and models."],
            ["Transparent prices, no hidden fees or imposed services."],
            ["Fast deliveries, optimal warehousing and logistics."],
          ].map(([title, desc]) => (
            <div
              key={title}
              className="relative overflow-hidden rounded-2xl border border-black/5 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
            >
              <div className="absolute right-0 top-0 -z-10 h-24 w-24 rounded-bl-[2rem] bg-gradient-to-br from-indigo-400/15 to-sky-400/10 blur-xl" />
              <h3 className="text-base font-semibold text-gray-900">{title}</h3>
              <p className="mt-1 text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Selection of the week */}
      <section className="mx-auto mt-16 max-w-7xl px-6">
        <div className="flex items-end justify-between">
          <h2 className="text-xl font-semibold text-gray-900">Selection of the week</h2>
          <Link
            to="/catalog/laptops"
            className="text-sm font-semibold text-gray-900 underline decoration-gray-300 underline-offset-4 hover:decoration-gray-600"
          >
            See all
          </Link>
        </div>

        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 9 }).map((_, i) => (
            <article
              key={i}
              className="group relative overflow-hidden rounded-2xl border border-black/5 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="aspect-[16/9] w-full rounded-xl bg-[radial-gradient(120%_120%_at_100%_0%,rgba(236,72,153,0.14),rgba(14,165,233,0.10)_40%,rgba(255,255,255,0)_70%)]">
              <img src="/img/60233697_large.jpg" alt="Aqua Filter"/>
              </div>

              <div className="mt-3">
                <h3 className="text-base font-semibold text-gray-900">
                  Premium item #{i + 1}
                </h3>
                <p className="mt-1 line-clamp-2 text-sm text-gray-600">
                  Elegant and fast. Ideal for the modern workflow.
                </p>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-sm font-semibold text-gray-900">
                  € {(1499 + i * 20).toLocaleString()}
                </span>
                <button className="rounded-lg border border-gray-200 bg-white px-3 py-1.5 text-sm font-semibold text-gray-900 shadow-sm transition-all duration-200 hover:bg-gray-50">
                  Add to basket
                </button>
              </div>
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-white/70 to-transparent" />
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* For sellers */}
      <section className="mx-auto my-20 max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-3xl border border-black/5 bg-white px-6 py-10 shadow-sm sm:px-12">
          <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-gradient-to-tr from-indigo-500/20 to-sky-400/20 blur-2xl" />
          <h3 className="text-xl font-semibold text-gray-900">
            Launch a shop on our platform
          </h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-600">
            Access audiences and analytics tools. Secure
            payments and transparent rules.
          </p>
          <div className="mt-6">
            <Link
              to="/register"
              className="inline-flex items-center rounded-xl bg-gray-900 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:shadow-lg hover:brightness-110"
            >
              Become a seller
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
