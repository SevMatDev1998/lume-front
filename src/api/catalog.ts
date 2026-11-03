import { CatalogProduct } from "@/types";

let cachedCatalog: Promise<CatalogProduct[]> | undefined;

const fetchCatalog = async (): Promise<CatalogProduct[]> => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`, { signal: AbortSignal.timeout(90_000) });
  if (!response.ok) throw new Error(`Catalog request failed with ${response.status}`);
  return (await response.json()).data;
};

export const getCatalog = () => {
  if (process.env.NODE_ENV !== "production") return fetchCatalog();
  cachedCatalog ??= fetchCatalog().catch((error) => {
    cachedCatalog = undefined;
    throw error;
  });
  return cachedCatalog;
};

export const getCategoryProducts = async (category: string) =>
  (await getCatalog()).filter((product) => product.category?.slug === category);

export const getProduct = async (slug: string) => (await getCatalog()).find((product) => product.slug === slug);
