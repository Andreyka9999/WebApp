import { Carousel } from "../components/ui/Carousel";


// Import images from public/img/
const images = [
  { src: "/img/smartphone1.jpg", alt: "Smartphone 1" },
  { src: "/img/smartphone2.jpg", alt: "Smartphone 2" },
  { src: "/img/smartphone3.jpg", alt: "Smartphone 3" },
];

export default function CatalogLaptops() {
  return (
    <div className="">
      <div className="bg-white rounded-xl shadow p-6">
        <h1 className="text-xl font-bold mb-4">Smartphones</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum expedita, ad nostrum vero, aliquid incidunt laboriosam ea culpa in, adipisci suscipit? Consequuntur tempore vitae recusandae eos nostrum at voluptatem porro!</p>
      <div className="flex min-h-svh flex-col items-center justify-center">
      <div className="max-w-xl mx-auto mt-10">
      <Carousel images={images} />
    </div>
      </div>
      </div>
    </div>
    
  );
}
