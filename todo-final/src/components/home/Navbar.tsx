import bg from "../../assets/bg.png";
import NavbarTitle from "./NavbarTitle";
import NavbarBody from "./NavbarBody";
import NavbarFooter from "./NavbarFooter";

const Navbar = () => {
  return (
    <div
      className="h-60 p-4 pt-8 flex flex-col gap-4 rounded-b-2xl"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <NavbarTitle />
      <NavbarBody />
      <NavbarFooter />
    </div>
  );
};

export default Navbar;
