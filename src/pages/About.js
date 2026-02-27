import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";
import NSC_Marquee from "../images/about/NSC_Marquee.jpg";

function About() {
  return (
    <>
      <Helmet>
        <title> NSC App Development - About </title>
      </Helmet>
      <Navbar />

      <div
        style={{
          marginTop: "10vh",
          marginBottom: "10vh",
          height: "100%",
        }}
      >
        <div
          style={{
            ...flexParent,
            height: "auto",
          }}
        >
          <div
            style={{
              ...flexChild,
              display: "flex",
              justifyContent: "center",
              paddingTop: "30px",
              width: "30%",
            }}
          >
            <h1
              style={{
                width: "90%",
                fontSize: "68px",
                fontWeight: 600,
              }}
            >
              North Seattle Application Development
            </h1>

          </div>
          <div
            style={{
              ...flexChild,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "70%",
            }}
          >
            <div
              style={{
                ...flexChild,
                fontSize: "1.5rem",
                width: "80%",
              }}
            >
              <div style={{ marginBottom: "1rem" }}>
                <strong>About Us:</strong>
                <br></br>
                <br></br>
                Welcome to the NSC College Application Development Program,
                where we empower students to create innovative and impactful
                solutions in the ever-evolving world of technology. Our program
                is dedicated to cultivating the next generation of skilled app
                developers, equipping them with the knowledge and hands-on
                experience needed to excel in the tech industry.
              </div>
              <div>
                Through a blend of rigorous coursework, practical project
                development, internships and mentorships from industry experts,
                and engagement with real-time projects from clients, we foster a
                dynamic learning environment that nurtures creativity, critical
                thinking, and technical proficiency. Our students engage in
                real-world challenges, developing apps that address contemporary
                issues and drive technological progress.
              </div>
              <div style={{ marginTop: "1rem" }}>
                At NSC, we believe in the power of education and innovation to
                transform lives and communities. Join us to unlock your
                potential, gain invaluable experience, and make a meaningful
                impact in the digital world. Together, we shape the future of
                technology.
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        src={NSC_Marquee}
        alt="North Seattle College"
        style={{
          width: "100%",
          display: "block",
        }}
      />
      <Footer />
    </>
  );
}

const flexChild = {
  position: "relative",
  minHeight: "1px",
  paddingRight: "15px",
  paddingLeft: "15px",
};

const flexParent = {
  display: "flex",
  flexWrap: "wrap",
};

export default About;
