import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import SignupFormUs from "./SignupFormUs";
import "./SignupForm.scss";


function SignupForm() {
  
  return (
    <>
      <Navbar />

      <br></br>
      <br></br>
      <div className="sed">
        <h1>Sign-Up</h1>
  
      </div>

    
 

      <br></br>
      <br></br>
      <br></br>
      <SignupFormUs />
      <br></br>
      <br></br>
      <Footer />
    </>
  );
}
export default SignupForm;
