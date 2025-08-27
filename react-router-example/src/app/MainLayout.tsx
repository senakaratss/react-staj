import { Link, Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div>
      <div>
        <Link to={"/"}>Anasayfa</Link>
        <Link to={"/projects"}>Projeler</Link>
        <Link to={"/about"}>Hakkımızda</Link>
      </div>
      <Outlet />
    </div>
  );
};

export default MainLayout;
