import Link from "next/link";

type MenuButtonProps = {
  name: string;
  icon?: React.ReactNode;
};

const FootMenuButton = ({ name, icon }: MenuButtonProps) => {
  return (
    <Link href={`/${name.toLowerCase()}`}>
      <div className="relative flex 2xl:h-8 w-full justify-center items-center h-10 sm:min-w-24 ">
        <div
          className="absolute left-0 top-0 w-full rounded-full bg-tcgreen px-2 transition-all duration-100 hover:-left-1 hover:-top-1 short-shadow-green-dark 2xl:border-6 border-4 border-tcgreen-dark 2xl:flex justify-start items-center gap-1 group overflow-hidden"
      >
        <div className="justify-start text-2xl 2xl:text-4xl text-tcgreen-dark font-bold font-['Montserrat'] tracking-tighter">
          {name}
        </div>
      </div>
      </div>
    </Link>
  );
};

export default FootMenuButton;
