import Mountain1 from "../assets/s5.jpg";
import Mountain2 from "../assets/s9.jpg";
import Mountain3 from "../assets/s2.jpg";
import Mountain4 from "../assets/s3.jpg";
import DestinationData from "./DestinationData";
import "./DestinationStyles.scss";
const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Doctors</h1>
      <br></br>
      <p>
        The art of medicine consists of amusing the patient while nature cures
        the disease
      </p>
      <br></br>
      <br></br>
      <DestinationData
        className="first-des"
        heading="Camille Abboud, MD. Professor of Medicine"
        text="  Abboud, MD. My principal role is to participate and design novel
        translational research clinical trials focusing on patients with
        Hematologic Malignancies and Myeloproliferative Neoplasms within our
        combined Leukemia and BMT program in the Division of Oncology at
        Washington University."                                                                                                       
        img1={Mountain1}
        img2={Mountain2}
      />
      <br></br>
      <br></br>
      <DestinationData
        className="first-des-reverse"
        heading="Gal Gaddot,  MD. Professor of Medicine"
        text="Dr. Africa Wallace is a board certified thoracic surgeon who specializes in minimally invasive cardiothoracic procedures using video-assisted or robotic approaches."
        img1={Mountain3}
        img2={Mountain4}
      />
    </div>
  );
};
export default Destination;
