import type { Metadata } from "next";
import Title from "@/components/title";
import Past from './past';
import Upcoming from './upcoming';

export const metadata: Metadata = {
  title: "Classes",
};

const ClassesPage = () => {
  return (
    <>
      <Title name="Classes" />
      <div className="bg-tcgreen-light self-stretch 2xl:inline-flex justify-start items-start gap-2.5">
      <Upcoming />

      </div>
    </>
  );
};

export default ClassesPage;
