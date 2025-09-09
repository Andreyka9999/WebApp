import React from "react";

export default function Company() {
  return (
    <main className="relative overflow-clip">
      {/* background: light auras and vignette */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[-120px] top-[-140px] h-[520px] w-[520px] rounded-full bg-gradient-to-tr from-sky-300/25 via-indigo-300/20 to-fuchsia-300/20 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_70%_10%,rgba(0,0,0,0.04),transparent_60%)]" />
      </div>

      {/* Hero section about the company */}
      <section className="mx-auto max-w-7xl px-6 pt-20 sm:pt-28">
        <div className="max-w-2xl">
          <span className="inline-flex items-center rounded-full border border-black/5 bg-white/60 px-3 py-1 text-xs font-semibold text-gray-700 shadow-sm backdrop-blur">
            About us
          </span>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            We design calm interfaces and fast products.
          </h1>
          <p className="mt-4 text-gray-600">
            A small team of designers and engineers. We believe in clarity,
            speed, and thoughtful details — from copy to micro-interactions.
          </p>
        </div>

        {/* Key metrics */}
        <dl className="mt-10 grid gap-6 sm:grid-cols-3">
          {[
            ["7+ years", "Product development experience"],
            ["98%", "Successful releases without rollbacks"],
            ["< 200 ms", "Average TTI on SPA pages"],
          ].map(([k, v]) => (
            <div
              key={k}
              className="rounded-2xl border border-black/5 bg-white px-6 py-5 text-center shadow-sm"
            >
              <dt className="text-2xl font-semibold text-gray-900">{k}</dt>
              <dd className="mt-1 text-sm text-gray-600">{v}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* About or team */}
      <section className="mx-auto mt-16 max-w-7xl px-6">
        <div className="flex items-end justify-between">
          <h2 className="text-xl font-semibold text-gray-900">Team</h2>
          <p className="text-sm text-gray-500">Small teams — quick releases</p>
        </div>

        <ul className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            ["Nikita", "Design"],
            ["Anna", "Frontend"],
            ["Max", "Backend"],
            ["Kate", "Product"],
            ["Ivan", "QA"],
            ["Julia", "DevOps"],
          ].map(([name, role]) => (
            <li
              key={name}
              className="group relative overflow-hidden rounded-2xl border border-black/5 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
            >
              <div className="flex items-center gap-4">
                <div className="grid size-12 place-content-center rounded-full bg-gradient-to-tr from-gray-900 to-gray-700 text-sm font-semibold text-white shadow-sm transition group-hover:brightness-110">
                  {name.slice(0, 1)}
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{name}</p>
                  <p className="text-sm text-gray-600">{role}</p>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-white/70 to-transparent" />
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Partners */}
      <section className="mx-auto my-20 max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-3xl border border-black/5 bg-white px-6 py-10 shadow-sm sm:px-12">
          <div className="absolute -left-10 top-[-40px] h-40 w-40 rounded-full bg-gradient-to-tr from-indigo-500/25 to-sky-400/25 blur-2xl" />
          <h3 className="text-xl font-semibold text-gray-900">
            We are open to partnerships
          </h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-600">
            Write to us with your integration idea — we will help you gather experience that will make users happier.
          </p>
          <div className="mt-6">
            <a
              href="mailto:hello@example.com"
              className="inline-flex items-center rounded-xl bg-gray-900 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:shadow-lg hover:brightness-110"
            >
              Contact us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
