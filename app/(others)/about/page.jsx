import dynamic from "next/dynamic";

import About from "@/components/pages-menu/about";

export const metadata = {
  title: 'About || TalentLeaf - Job Borad React NextJS Template',
  description:
    'TalentLeaf - Job Borad React NextJS Template',
  
}



const index = () => {
  return (
    <>
      
      <About />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
