import dynamic from "next/dynamic";
import JobList from "@/components/job-listing-pages/job-list-v5";

export const metadata = {
  title: "Job List V5 || TalentLeaf - Job Borad React NextJS Template",
  description: "TalentLeaf - Job Borad React NextJS Template",
};

const index = () => {
  return (
    <>
      <JobList />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
