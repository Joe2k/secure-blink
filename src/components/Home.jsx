import Main from "./Main";
import NavBar from "./NavBar";
import Aboutus from "./Aboutus";
import Services from "./Services";
import Customers from "./Customers";
import Contact from "./Contact";

function Home() {
  return (
    <div>
      <NavBar />
      <Main />
      <Aboutus />
      <Services />
      <Customers />
      <Contact />
    </div>
  );
}

export default Home;
