import dynamic from "next/dynamic";
import Messages from "@/components/dashboard-pages/employers-dashboard/messages";

export const metadata = {
  title: "Messages || TalentLeaf - Job Borad React NextJS Template",
  description: "TalentLeaf - Job Borad React NextJS Template",
};

const index = () => {
  return (
    <>
      <Messages />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
