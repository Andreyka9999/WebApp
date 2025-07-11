import { Carousel } from "../components/ui/Carousel";

// Import images from public/img/
const images = [
  { src: "/img/laptop1.jpg", alt: "Laptop 1" },
  { src: "/img/laptop2.jpg", alt: "Laptop 2" },
  { src: "/img/laptop3.jpg", alt: "Laptop 3" },
];

export default function CatalogLaptops() {
  return (
    <div className="">
      <div className="bg-white rounded-xl shadow p-6">
        <h1 className="text-xl font-bold mb-4">Laptops</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime, fugit fuga voluptate quam, nobis animi hic, quas laudantium voluptas adipisci reiciendis pariatur ipsum dolor numquam ratione impedit modi molestias blanditiis!</p>
      <div className="flex min-h-svh flex-col items-center justify-center">
      <div className="max-w-xl mx-auto mt-10">
      <Carousel images={images} />
    </div>
      </div>
      </div>
    </div>
    
  );
}
