import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import ServiceUs from "./ServiceUs";
import Card from "./Card";
function Service() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg="https://cdn.pixabay.com/photo/2016/11/08/05/29/surgery-1807541_1280.jpg"
        title="Service"
        btnClass="hide"
      />
      <br></br>
      <Card/>
      <ServiceUs />
      <Footer />
    </>
  );
}
export default Service;
