import Title from "@/components/title";
import Past from './past';
import Upcoming from './upcoming';

const ClassesPage = () => {
  return (
    <>
      <Title name="Classes" place={0} />
      <div className="bg-tcgreen-light self-stretch inline-flex justify-start items-start gap-2.5">
      <Upcoming />

      </div>
    </>
  );
};

export default ClassesPage;
