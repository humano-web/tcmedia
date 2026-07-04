import Link from "next/link";

type MenuButtonProps = {
  name: string;
  icon?: React.ReactNode;
};

const MenuButton = ({ name, icon }: MenuButtonProps) => {
  return (
    <Link href={`/${name.toLowerCase()}`}>
      <div className="relative w-36 h-8 flex justify-center items-center">
        <div
          className="absolute left-0 top-0 hover:-top-1 hover:-left-1 transition-all duration-100 px-2 w-full bg-tcgreen  rounded-full short-shadow-green-dark
        border-4 border-tcgreen-dark flex justify-start items-center gap-1 group overflow-hidden"
      >
        <div className="justify-start text-tcgreen-dark text-lg font-bold font-['Montserrat'] tracking-tighter">
          {name}
        </div>
      </div>
      </div>
    </Link>
  );
};

export default MenuButton;
