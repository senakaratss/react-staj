import BottomNavigation from "../components/common/BottomNavigation";
import { Outlet } from "react-router";
const MainLayot = () => {
  return (
    <div>
      <Outlet />
      <BottomNavigation />
    </div>
  );
};

export default MainLayot;
