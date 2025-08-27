import BottomNavigation from "./components/BottomNavigation";
import BreadCrumb from "./components/BreadCrumb";
import Categories from "./components/Categories";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import Products from "./components/Products";

const App = () => {
  return (
    <div className="bg-gray-100 pb-16">
      <Navbar />
      <SearchBar />
      <BreadCrumb />
      <Categories />
      <Products />
      <BottomNavigation />
    </div>
  );
};

export default App;
