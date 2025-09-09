 import FancyCubeDemo from "../components/FancyCubeDemo";

export default function Features() {
  return (
    <section className="flex flex-col items-center lg:flex-row lg:items-start">
      <div className="max-w-xl">
        <h2 className="text-4xl font-semibold tracking-tight text-gray-900">
          Crafted 3D Demo
        </h2>
        <p className="mt-3 text-gray-600">
          Pure WebGL without libraries. Neat lighting, vignetting, grain, and smooth animations — simply a showpiece.
        </p>
      </div>

      <FancyCubeDemo className="w-full max-w-[500px] h-[400px]" />
    </section>
  );
}
