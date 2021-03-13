import Main from "./Main";
import NavBar from "./NavBar";
import Aboutus from "./Aboutus";
import Services from "./Services";
import Customers from "./Customers";

function Home() {
  return (
    <div>
      <NavBar />
      <Main />
      <Aboutus />
      <Services />
      <Customers />
    </div>
  );
}

export default Home;
