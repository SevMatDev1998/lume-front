import Link from "next/link";
import { CatalogProduct } from "@/types";
import { productRoute } from "@/enums/route.enum";
import { ProductImage } from "@/components/product/ProductImage";
import { optionValues } from "@/utils/catalog";

const IMAGE_SIZES = "(min-width: 1024px) 33vw, 50vw";

export const ModelCard = ({ product }: { product: CatalogProduct }) => {
  const [frontImage, hoverImage] = product.images;
  const magnifications = optionValues(product, "MAGNIFICATION");

  return (
    <Link
      href={productRoute("loupes", product.slug)}
      className="group relative block aspect-10/12 overflow-hidden rounded-xl bg-soft shadow-md transition-shadow duration-300 hover:shadow-xl"
    >
      <ProductImage src={frontImage} alt={product.name} sizes={IMAGE_SIZES} className="absolute inset-0" />
      {hoverImage && (
        <ProductImage
          src={hoverImage}
          alt=""
          sizes={IMAGE_SIZES}
          className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus-visible:opacity-100"
          imageClassName="object-right"
        />
      )}
      <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/60 to-transparent p-4 pt-16 text-white">
        <p className="text-lg font-semibold drop-shadow">{product.name}</p>
        {magnifications.length > 0 && (
          <div className="grid grid-rows-[0fr] opacity-0 transition-all duration-300 group-hover:grid-rows-[1fr] group-hover:opacity-100 group-focus-visible:grid-rows-[1fr] group-focus-visible:opacity-100">
            <div className="overflow-hidden">
              <p className="mt-1 text-sm text-white/80">Magnifications:</p>
              <p className="flex flex-wrap gap-x-3 text-base font-medium">
                {magnifications.map((magnification) => (
                  <span key={magnification}>{magnification}</span>
                ))}
              </p>
            </div>
          </div>
        )}
      </div>
    </Link>
  );
};
