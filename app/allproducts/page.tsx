// import Image from "next/image";
// import Link from "next/link";
// import React from "react";
// import Navbar from "../components/Navbar";
// import AboutMobileNavbar from "../components/AboutMobileNavbar";

// export default function AllProducts() {
//   const products = [
//     { name: "chair", url: "/products/chair", price: 250, displayName: "The Dendy Chair" },
//     { name: "vase", url: "/products/vase", price: 155, displayName: "Elegant Vase" },
//     { name: "silky", url: "/products/silky", price: 125, displayName: "Silky Cushion" },
//     { name: "lamp", url: "/products/lamp", price: 125, displayName: "Modern Lamp" },
//     { name: "lamp2", url: "/products/sofa", price: 300, displayName: "The Lucy Lamp" },
//     { name: "table", url: "/products/table", price: 180, displayName: "Wooden Table" },
//     { name: "rusticvase", url: "/products/bed", price: 350, displayName: "Rustic Vase" },
//     { name: "vase", url: "/products/desk", price: 150, displayName: "Ceramic Vase" },
//     { name: "chair2", url: "/products/shelf", price: 100, displayName: "Classic Chair" },
//     { name: "multiplechairs", url: "/products/plant", price: 50, displayName: "Set of Chairs" },
//     { name: "lamp", url: "/products/light", price: 80, displayName: "The Lamp" },
//     { name: "chair3", url: "/products/mirror", price: 120, displayName: "The Classic Dendy Chair" },
//   ];

//   return (
//     <div>
//       <div className="mb-[30px] md:mb-[70px]">
//         <Navbar />
//         <AboutMobileNavbar />
//       </div>
//       <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8 gap-y-10">
//         {products.map((product, idx) => (
//           <div key={idx} className="w-full">
//             {/* 3:4 Aspect Ratio Container */}
//             <div className="relative w-full pb-[125%]">
//               <Link href={product.url}>
//                 <Image
//                   src={`/images/${product.name}.jpeg`} // Assuming the images are in public/images/ folder
//                   height={700}
//                   width={700}
//                   alt={`Image of ${product.name}`}
//                   className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-105 md:hover:scale-110"
//                 />
//               </Link>
//             </div>
//             {/* Product Details */}
//             <div className="mt-4 text-[#2A254B]">
//               <p className="py-2 font-medium">{product.displayName}</p>
//               <p className="font-semibold">${product.price}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }


// import Image from "next/image";
// import Link from "next/link";
// import React from "react";
// import Navbar from "../components/Navbar";
// import AboutMobileNavbar from "../components/AboutMobileNavbar";

// export default function AllProducts() {
//   const products = [
//     { name: "chair", url: "/productlisting/page", price: 250, displayName: "The Dendy Chair" },
//     { name: "vase", url: "/productlisting/page", price: 155, displayName: "Elegant Vase" },
//     { name: "silky", url: "/productlisting/page", price: 125, displayName: "Silky Cushion" },
//     { name: "lamp", url: "/productlisting/page", price: 125, displayName: "Modern Lamp" },
//     { name: "lamp2", url: "/productlisting/page", price: 300, displayName: "The Lucy Lamp" },
//     { name: "table", url: "/productlisting/page", price: 180, displayName: "Wooden Table" },
//     { name: "rusticvase", url: "/productlisting/page", price: 350, displayName: "Rustic Vase" },
//     { name: "vase", url: "/productlisting/page", price: 150, displayName: "Ceramic Vase" },
//     { name: "chair2", url: "/productlisting/page", price: 100, displayName: "Classic Chair" },
//     { name: "multiplechairs", url: "/productlisting/page", price: 50, displayName: "Set of Chairs" },
//     { name: "lamp", url: "/productlisting/page", price: 80, displayName: "The Lamp" },
//     { name: "chair3", url: "/productlisting/page", price: 120, displayName: "The Classic Dendy Chair" },
//   ];

//   return (
//     <div>
//       <div className="mb-[30px] md:mb-[70px]">
//         <Navbar />
//         <AboutMobileNavbar />
//       </div>
//       <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8 gap-y-10">
//         {products.map((product, idx) => (
//           <div key={idx} className="w-full">
//             {/* 3:4 Aspect Ratio Container */}
//             <div className="relative w-full pb-[125%]">
//               <Link href={product.url}>
//                 <Image
//                   src={`/images/${product.name}.jpeg`} // Assuming the images are in public/images/ folder
//                   height={700}
//                   width={700}
//                   alt={`Image of ${product.name}`}
//                   className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-105 md:hover:scale-110"
//                 />
//               </Link>
//             </div>
//             {/* Product Details */}
//             <div className="mt-4 text-[#2A254B]">
//               <p className="py-2 font-medium">{product.displayName}</p>
//               <p className="font-semibold">${product.price}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }



import Image from "next/image";
import Link from "next/link";
import React from "react";
import Navbar from "../components/Navbar";
import AboutMobileNavbar from "../components/AboutMobileNavbar";

export default function AllProducts() {
  const products = [

    // Could have provided differnt links in here in place of /productlisting but it would 
    // require multiple pages to be made and would consume time, will add this later on
    { name: "chair", url: "/productlisting", price: 250, displayName: "The Dendy Chair" },
    { name: "vase", url: "/productlisting", price: 155, displayName: "Elegant Vase" },
    { name: "silky", url: "/productlisting", price: 125, displayName: "Silky Cushion" },
    { name: "lamp", url: "/productlisting", price: 125, displayName: "Modern Lamp" },
    { name: "lamp2", url: "/productlisting", price: 300, displayName: "The Lucy Lamp" },
    { name: "table", url: "/productlisting", price: 180, displayName: "Wooden Table" },
    { name: "rusticvase", url: "/productlisting", price: 350, displayName: "Rustic Vase" },
    { name: "vase", url: "/productlisting", price: 150, displayName: "Ceramic Vase" },
    { name: "chair2", url: "/productlisting", price: 100, displayName: "Classic Chair" },
    { name: "multiplechairs", url: "/productlisting", price: 50, displayName: "Set of Chairs" },
    { name: "lamp", url: "/productlisting", price: 80, displayName: "The Lamp" },
    { name: "chair3", url: "/productlisting", price: 120, displayName: "The Classic Dendy Chair" },
  ];

  return (
    <div>
      <div className="mb-[30px] md:mb-[70px]">
        <Navbar />
        <AboutMobileNavbar />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8 gap-y-10">
        {products.map((product, idx) => (
          <div key={idx} className="w-full">
            {/* 3:4 Aspect Ratio Container */}
            <div className="relative w-full pb-[125%]">
              <Link href={product.url}>
                <Image
                  src={`/images/${product.name}.jpeg`} // Assuming the images are in public/images/ folder
                  height={700}
                  width={700}
                  alt={`Image of ${product.name}`}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-105 md:hover:scale-110"
                />
              </Link>
            </div>
            {/* Product Details */}
            <div className="mt-4 text-[#2A254B]">
              <p className="py-2 font-medium">{product.displayName}</p>
              <p className="font-semibold">${product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
