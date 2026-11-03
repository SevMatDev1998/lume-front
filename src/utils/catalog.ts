import { CatalogProduct, OptionType } from "@/types";

export const optionValues = (product: CatalogProduct, type: OptionType) => product.options[type] ?? [];

export const specValue = (product: CatalogProduct, label: string) =>
  product.specs.find((spec) => spec.label === label)?.value;
