import dynamic from "next/dynamic";
import ShopList from "@/components/shop/shop-list";

export const metadata = {
  title: "Shop List || TalentLeaf - Job Borad React NextJS Template",
  description: "TalentLeaf - Job Borad React NextJS Template",
};

const index = () => {
  return (
    <>
      <ShopList />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
