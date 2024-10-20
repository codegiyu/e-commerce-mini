import ProductCard from "@/components/ProductCard";
import { SectionHeader } from "@/components/products/header";
import SingleCard from "@/components/SingleCard";
import { thisMonthProductsData } from "@/constants/productsData";

export const ThisMonth = () => {
  return (
    <section className="container-main grid gap-[3.75rem]">
      <SectionHeader label="This Month" title="Best Selling Products" />
      <div className="flex gap-[1.875rem]">
        {thisMonthProductsData.map((item, idx) => (
          <ProductCard key={idx} {...item} />
        ))}
      </div>
    </section>
  );
};
