import Link from "next/link";

type MenuButtonProps = {
  name: string;
  icon?: React.ReactNode;
};

const MenuButton = ({ name, icon }: MenuButtonProps) => {
  return (
    <Link href={`/${name.toLowerCase()}`}>
      <div className="relative 2xl:flex h-8 w-full min-w-28 justify-center items-center sm:h-9 sm:min-w-32 lg:w-36">
        <div
          className="absolute left-0 top-0 w-full rounded-full bg-tcgreen px-2 transition-all duration-100 hover:-left-1 hover:-top-1 short-shadow-green-dark border-4 border-tcgreen-dark 2xl:flex justify-start items-center gap-1 group overflow-hidden"
      >
        <div className="justify-start text-sm 2xl:text-lg text-tcgreen-dark font-bold font-['Montserrat'] tracking-tighter">
          {name}
        </div>
      </div>
      </div>
    </Link>
  );
};

export default MenuButton;
