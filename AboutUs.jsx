import "./AboutStyles.scss";

function AboutUs() {
  return (
    <div>
      <div className="about-containers">
        <div className="about-section">
          <h1>About Us Medicare</h1>
          <p>
            KG Hospital,a quaternary care,multispecialty hospital, has been at
            the cutting edge of medicine while staying true to its charitable
            mission and providing advanced yet affordable healthcare since 1974.
            KG Hospital, run by K.Govindaswamy Naidu Medical Trust, was founded
            in 1974 by 'Dharmaveera' K.Govindaswamy Naidu, a leading
            industrialist and philanthropist from Annur village in Coimbatore
            district. Dr G.Bakthavathsalam (MS, FICS, FCCP, FAMS), the Managing
            Trustee and Chairman of KG Hospital, has grown the hospital
            organically from a 10-bed hospital in 1974 to the state-of-the-art
            healthcare provider it is today. For his service to society, Dr
            Bakthavathsalam (fondly known as Dr GB) has received numerous
            coveted awards including Padma Shri Award from the President of
            India and Dr B.C.Roy Award from the Prime Minister of India.
          </p>
          <p>
            KG-Kalam Little Hearts Foundation: Through this initiative launched
            by Dr APJ Abdul Kalam, former President of India, we have performed
            more than 500 free heart surgeries on children. 450 poor children
            with heart defects were operated under the noble scheme of
            Government of Tamil Nadu at highly subsidised rates Provided free
            heart surgeries for more than 1600 people along with Government of
            Tamil Nadu KG Eye Hospital performed 85,000 free Intra Ocular Lens
            (IOL) surgeries to remove cataract on rural poor Every month, 100
            units of blood provided to children with Thalessemia free of cost
            Over 6,00,000 people screened for hypertension via Free BP Clinic
            3000+ free dialysis done as part of an ongoing charitable program
            8632 free medical camps conducted in rural areas and 16,59,604
            people screened free
          </p>
        </div>
        <div className="image-section">
          <img
            src={
              "https://images.pexels.com/photos/3259625/pexels-photo-3259625.jpeg"
            }
            alt="help"
            className="leftImage"
          />
          <img
            src={
              "https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
            alt="h"
            className="rightImage"
          />
        </div>
        <div className="mission-section">
          <h1>Missions</h1>
          <p>
            Treating patients as our family members, we save lives and reduce
            suffering by offering compassionate tertiary healthcare.
          </p>
  
         </div>
           <div className="mission-section">
          <h1>Vision</h1>
          <p>
            To be one of the most affordable and advanced healthcare providers
            in the country.
          </p>

          <img
            src={
              "https://images.pexels.com/photos/208512/pexels-photo-208512.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
            alt="hr"
            className="rightImager"
          />
          <img
            src={
              "https://images.pexels.com/photos/3786157/pexels-photo-3786157.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
            alt="o"
            className="rightImagers"
          />
          <br></br>
        </div>

        <br></br>
        <div>
          <h1>Quality Policy</h1>
          <p>
            Commitment - To know what is expected of me; meet or exceed those
            expectations every single time. To make promises, keep promises. To
            commit to the mission, vision and objectives, rules and regulations
            of the organisation; to be punctual.
          </p>
          <p>
            Humane Approach - To exhibit the highest courtesy in all
            interactions, especially when dealing with patients; to cause
            camaraderie for genuine teamwork, without which no great
            accomplishment is possible.
          </p>
          <p>
            Inspired by Expertise - Inspired to cause continuous accelerated
            improvement in enhancing current level of expertise to match global
            standards in quality of medical care, treatment and outcomes.{" "}
          </p>
          <p>
            Trustworthy - Being reliable; being ethical;to do the right thing
            for the patient's wellbeing; being missionary and not mercenary.
          </p>
          <br></br>

          <br></br>
           {/*<img
            src={
              "https://cdn.apollohospitals.com/dev-apollohospitals/2021/04/instituteexpertises.jpg"
            }
            alt="t"
            className="io"
          />*/}
        </div>
        <h1>About Medicare Heart Institutes</h1>
        <p>
          The Medicare story started with the heart. Medicare Heart Institutes
          pioneered open-heart surgeries and cardiac catheterization in India.
          Today, with its unmatched presence in 37 hospitals across 20 cities,
          Medicare Heart Institutes hold an unparalleled record of having
          performed than 2,00,000 heart surgeries and 3,00,000 angioplasties,
          leading the way in super-specialty cardiac care. With the fastest door
          to needle time and the best infrastructure, the Medi group remains the
          undisputed leader in Cardiac Care.
        </p>

        <div className="slider-frame" style={{ marginLeft: "0px" }}>
          <div className="slide-images">
            <div>
              <img
                src="https://as1.ftcdn.net/v2/jpg/01/87/90/24/1000_F_187902458_53mYnfa9yFOYbHbF4Ptn67ElXrGoEEJ9.jpg"
                alt="nw"
                className="bb"
              />
            </div>
            <div>
              <img
                src="https://as2.ftcdn.net/v2/jpg/06/79/61/03/1000_F_679610354_EgTqNYh6M0oi5or7ZXJWDk0y38iW42Db.jpg"
                alt="po"
                className="bb"
              />
            </div>
            <div>
              <img
                src="https://as2.ftcdn.net/v2/jpg/06/45/04/69/1000_F_645046990_ukb8gTIPX2j9Q75oHiNpwoqJh4goKN1J.jpg"
                alt="kk"
                className="bb"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AboutUs;
