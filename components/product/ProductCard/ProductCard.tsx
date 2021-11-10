import { Product } from "@common/types/product";
import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import style from "./ProductCard.module.css";

interface Props {
  product: Product;
  variant?: "simple" | "slim";
}
const placeholderImage = "/product-image-placeholder.svg";
const ProductCard: FC<Props> = ({ product, variant = "simple" }) => {
  console.log("re-rendering product");
  return (
    <Link href={`/products/${product.slug}`}>
      <a className={style.root}>
        {variant === "slim" ? (
          <>
            <div className="inset-0 absolute z-20 flex justify-center items-center">
              <span className="bg-black text-white p-3 font-bold text-xl">
                {product.name}
              </span>
            </div>
            {product.images && (
              <Image
                className={style.productImage}
                src={product.images[0].url ?? placeholderImage}
                alt={product.name ?? "Product image"}
                height={320}
                width={320}
                quality="85"
                layout="fixed"
              />
            )}
          </>
        ) : (
          <>
            <div className={style.productBg}></div>
            <div className={style.productTag}>
              <h3 className={style.productTitle}>
                <span>{product.name}</span>
              </h3>
              <span className={style.productPrice}>
                {product.price.value} {product.price.currencyCode}
              </span>
            </div>
            {product.images && (
              <Image
                className={style.productImage}
                src={product.images[0].url ?? placeholderImage}
                alt={product.name ?? "Product image"}
                height={540}
                width={540}
                quality="85"
                layout="responsive"
              />
            )}
          </>
        )}
      </a>
    </Link>
  );
};

export default ProductCard;
