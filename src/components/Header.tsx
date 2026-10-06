//
import Image from "next/image";
import NavLink from "./NavLink";
import Userinfo from "./Userinfo";

const Header = () => {
  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });

  return (
    <header className="container mx-auto flex items-center ">
      <div className="flex items-center gap-3 border border-r-amber-300 justify-between w-full">
        <Image
          className="h-20 w-20"
          height={80}
          width={80}
          src="/logo.webp"
          alt="logo"
        />
        <div>
          <h2 className="text-red-700 text-4xl leading-none">Bangla News 24</h2>
          <p className="mx-13">{date}</p>
        </div>
        <div className="flex gap-5 justify-center "></div>
      </div>

      <Userinfo />
      <div></div>
      {/* <NavLink /> */}
    </header>
  );
};

export default Header;
