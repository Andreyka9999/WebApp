import { Carousel } from "../components/ui/Carousel";

// Import images from public/img/
const images = [
  { src: "/img/accessories1.jpg", alt: "Smartphone 1" },
  { src: "/img/accessories2.jpg", alt: "Smartphone 2" },
  { src: "/img/accessories3.jpg", alt: "Smartphone 3" },
];

export default function CatalogLaptops() {
  return (
    <div className="">
      <div className="bg-white rounded-xl shadow p-6">
        <h1 className="text-xl font-bold mb-4">Accessories</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eum magnam amet dignissimos itaque porro quod ipsa sint minima iste sed ullam vero numquam, unde, debitis nobis alias veritatis inventore?</p>
      <div className="flex min-h-svh flex-col items-center justify-center">
      <div className="max-w-xl mx-auto mt-10">
      <Carousel images={images} />
    </div>
      </div>
      </div>
    </div>
    
  );
}
