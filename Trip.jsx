import "./TripStyles.scss";
import TripData from "./TripData";
import Trip1 from "../assets/gal2.jpg";
import Trip2 from "../assets/gal3.jpg";
import Trip3 from "../assets/gal4.jpg";

function Trip() {
  return (
    <div className="trip">
      <h1> Recent Achievement</h1>
      <p>
        This list of medicine awards is an index to articles about notable
        awards for contributions to medicine
      </p>
      <div className="tripcard">
        <TripData
          image={Trip1}
          heading="Green Hospital"
          text="Awarded “Green Hospital – 2022” by Association of Healthcare Providers (India) (AHPI)."
        />
        <TripData
          image={Trip2}
          heading="CII Award - 2021"
          text="For Excellence in Cardiology and Technology Innovation
          Awarded by “CII Award– 2021"
        />
        <TripData
          image={Trip3}
          heading="Ranking"
          text="All in INDIA CRITICAL CARE HOSPITAL RANKING – 2021
          No.1
          NEPHROLOGY
          NEUROLOGY
          EMERGENCY TRAUMA      
          Multi Specility Hospital"
        />
      </div>
    </div>
  );
}
export default Trip;
