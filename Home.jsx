import Destination from "../Components/Destination";
import Trip from "../Components/Trip";
import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import './Home.scss';
function Home() {
  return (
    <>
      <Navbar />
      <Hero
        heroImg="https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        title="THE FIRST WEALTH IS HEALTH"
        text="Medicines cure diseases,but only doctors can cure patients..."
        buttonText="Choose a Doctors"
        url="/"
        btnClass="show"
      />
      <br></br>
      <br></br>
      <br></br>
      <Destination />
      <Trip />
      <Footer />
    </>
  );
}
export default Home;
