import { MdEmail } from "react-icons/md"
function About() {
  return (
    <div className="container">

      <h1>About This Project</h1>

      <p style={{ maxWidth: "820px", margin: "0 auto", lineHeight: "1.9", fontSize: "17px" }}>
        This project is an ongoing learning experiment built while exploring React and interactive web design.
        It uses dinosaurs as a way to explore how uncertainty shapes understanding in science.
      </p>

      <p style={{ maxWidth: "820px", margin: "25px auto", lineHeight: "1.9", fontSize: "17px" }}>
        Instead of presenting dinosaurs as fixed facts,
        this project focuses on questions, interpretations, and incomplete evidence.
        Users are invited to engage with scientific uncertainty by exploring different possibilities
        and seeing how evidence can support more than one interpretation.
      </p>

      <p style={{ maxWidth: "820px", margin: "25px auto", lineHeight: "1.9", fontSize: "17px" }}>
        The current version is intentionally simple and experimental.
        It is not a complete educational system or scientific database,
        but a small interactive prototype built to understand how people engage with uncertainty.
      </p>

      <div
        style={{
          marginTop: "40px",
          padding: "24px",
          borderRadius: "14px",
          background: "rgba(255,255,255,0.45)",
          textAlign: "left"
        }}
      >
        <h2 style={{ marginTop: 0 }}>What This Project Is</h2>

        <ul style={{ lineHeight: "2" }}>
          <li>An interactive React learning project</li>
          <li>A question-based exploration of dinosaur interpretations</li>
          <li>A simple system showing evidence and competing ideas</li>
          <li>An experiment in designing “uncertainty as an experience”</li>
        </ul>
      </div>

      <div
        style={{
          marginTop: "35px",
          padding: "22px",
          borderLeft: "4px solid #b07a4f",
          background: "rgba(255,248,240,0.6)",
          textAlign: "left",
          lineHeight: "1.9"
        }}
      >
        <h2 style={{ marginTop: 0 }}>A Note on Content</h2>

        <p>
          The information used in this project is based on publicly available scientific discussions,
          general paleontology knowledge, and educational resources.
        </p>

        <p>
          This is not intended to be a formal scientific reference.
          Interpretations may be simplified for learning and interaction purposes.
        </p>

        <p>
          If you notice inaccuracies or have suggestions for improvement,
          feedback is genuinely welcome.
        </p>
      </div>

      <div
        style={{
          marginTop: "40px",
          padding: "22px",
          borderRadius: "14px",
          background: "rgba(255,255,255,0.35)",
          textAlign: "left",
          lineHeight: "1.9"
        }}
      >
        <h2 style={{ marginTop: 0 }}>Why Dinosaurs?</h2>

        <p>
          Dinosaurs fit naturally into this project because what we know about them comes from fragments. Each reconstruction is an interpretation built from limited evidence, shaped over time by new discoveries and changing perspectives.
        </p>
        <p>
          The space between what is known and what is still uncertain is what makes them meaningful here. It reflects how understanding is often not immediate or complete, but gradually formed through exploration and revision.
        </p>
        <p>
          This pattern is also seen in technology, where change is constant and outcomes are not always predictable at the start. Systems and ideas evolve through experimentation, adaptation, and ongoing refinement as new challenges and information appear.
        </p>
      </div>

      {/* CONTACT SECTION */}
      <div
        style={{
          marginTop: "50px",
          padding: "22px",
          borderRadius: "14px",
          background: "rgba(255,255,255,0.45)",
          textAlign: "left",
          lineHeight: "1.9"
        }}
      >
        <h2 style={{ marginTop: 0 }}>Contact / Feedback</h2>

        <p>
          This project is still evolving, and feedback is appreciated.
        </p>

        <p>
          If you are a student, educator, researcher, or simply someone interested in paleontology or interactive learning,
          feel free to reach out.
        </p>

        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
  <MdEmail size={22} />
  <a
    href="mailto:yourname@gmail.com?subject=Feedback%20on%20Dinosaur%20Project"
    style={{
      textDecoration: "none",
      color: "#2d2a26",
      fontWeight: "500"
    }}
  >
    Send Email
  </a>
</div>

        <p>
          (You can also link your GitHub or LinkedIn here later)
        </p>
      </div>

      <div
        style={{
          marginTop: "40px",
          fontStyle: "italic",
          opacity: 0.8,
          fontSize: "18px"
        }}
      >
        “Every explanation begins with something missing”
      </div>

    </div>
  )
}

export default About