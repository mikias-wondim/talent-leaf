import ShopDetails from "@/components/shop/shop-single/ShopDetails";
import dynamic from "next/dynamic";

export const metadata = {
  title: "Shop-details || TalentLeaf - Job Borad React NextJS Template",
  description: "TalentLeaf - Job Borad React NextJS Template",
};

const ShopSingleDyanmic = ({ params }) => {
  return (
    <>
      <ShopDetails id={params.id} />
    </>
  );
};

export default dynamic(() => Promise.resolve(ShopSingleDyanmic), {
  ssr: false,
});
