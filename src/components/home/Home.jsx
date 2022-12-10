import { Link } from "react-router-dom";

import DetailsProductHome from "@/components/home/cartProductHome/DetailsProductHome";

import GalleryProductsHome from "@/components/home/productsHome/GalleryProductsHome";

import imgProduct1 from "@/assets/images/image-product-1.jpg";
import imgProduct2 from "@/assets/images/image-product-2.jpg";
import imgProduct3 from "@/assets/images/image-product-3.jpg";
import imgProduct4 from "@/assets/images/image-product-4.jpg";

import imgProductSmall1 from "@/assets/images/image-product-1-thumbnail.jpg";
import imgProductSmall2 from "@/assets/images/image-product-2-thumbnail.jpg";
import imgProductSmall3 from "@/assets/images/image-product-3-thumbnail.jpg";
import imgProductSmall4 from "@/assets/images/image-product-4-thumbnail.jpg";

const ARRAY_IMGS = [imgProduct1, imgProduct2, imgProduct3, imgProduct4];
const ARRAY_IMG_SMALL = [
  imgProductSmall1,
  imgProductSmall2,
  imgProductSmall3,
  imgProductSmall4,
];

const objectProduct = {
  id: 1,
  title: "Fall Limited Edition Sneakers",
  description:
    "these low profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
  subtitle: "SNEAKER COMPANY",
  price: 250,
  discount: 0.5,
  imagesMain: ARRAY_IMGS,
  imagesSmall: ARRAY_IMG_SMALL,
};

const Home = () => {
  return (
    <section className=" mx-auto min-h-screen max-w-7xl bg-white px-4 md:text-base">
      <div
        to="/product"
        className=" mx-auto mb-2 flex h-[25%] flex-row items-center gap-1 rounded-xl md:container "
      >
        <GalleryProductsHome
          ARRAY_IMGS={objectProduct.imagesMain}
          ARRAY_IMG_SMALL={objectProduct.imagesSmall}
        />
        <DetailsProductHome objectProduct={objectProduct} />
      </div>
      <span className="container mx-auto mb-2 block h-[1px] w-full bg-gray-300"></span>

      <div className=" mx-auto mb-2 flex max-h-[25%] flex-row items-center gap-1 rounded-xl md:container ">
        <GalleryProductsHome
          ARRAY_IMGS={objectProduct.imagesMain}
          ARRAY_IMG_SMALL={objectProduct.imagesSmall}
        />
        <DetailsProductHome objectProduct={objectProduct} />
      </div>
      <span className="container mx-auto mb-2 block h-[1px] w-full bg-gray-300"></span>

      <div className=" mx-auto mb-2 flex max-h-[25%] flex-row items-center gap-1 rounded-xl md:container ">
        <GalleryProductsHome
          ARRAY_IMGS={objectProduct.imagesMain}
          ARRAY_IMG_SMALL={objectProduct.imagesSmall}
        />
        <DetailsProductHome objectProduct={objectProduct} />
      </div>
      <span className="container mx-auto mb-2 block h-[1px] w-full bg-gray-300"></span>
      <div className=" mx-auto mb-2 flex max-h-[25%] flex-row items-center gap-1 rounded-xl md:container ">
        <GalleryProductsHome
          ARRAY_IMGS={objectProduct.imagesMain}
          ARRAY_IMG_SMALL={objectProduct.imagesSmall}
        />
        <DetailsProductHome objectProduct={objectProduct} />
      </div>
      <span className="container mx-auto mb-2 block h-[1px] w-full bg-gray-300"></span>
      <div className=" mx-auto mb-2 flex max-h-[25%] flex-row items-center gap-1 rounded-xl md:container ">
        <GalleryProductsHome
          ARRAY_IMGS={objectProduct.imagesMain}
          ARRAY_IMG_SMALL={objectProduct.imagesSmall}
        />
        <DetailsProductHome objectProduct={objectProduct} />
      </div>
      <span className="container mx-auto mb-2 block h-[1px] w-full bg-gray-300"></span>
      <div className=" mx-auto mb-2 flex max-h-[25%] flex-row items-center gap-1 rounded-xl md:container ">
        <GalleryProductsHome
          ARRAY_IMGS={objectProduct.imagesMain}
          ARRAY_IMG_SMALL={objectProduct.imagesSmall}
        />
        <DetailsProductHome objectProduct={objectProduct} />
      </div>
      <span className="container mx-auto mb-2 block h-[1px] w-full bg-gray-300"></span>
    </section>
  );
};

export default Home;
