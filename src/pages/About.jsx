import { MdEmail } from "react-icons/md"
function About() {
  return (
    <div className="container">

      <h1>About This Project</h1>

      <p style={{ maxWidth: "820px", margin: "0 auto", lineHeight: "1.9", fontSize: "17px" }}>
        This project is not trying to “teach dinosaurs as facts”.
        It is trying to show something more honest — how science actually works when answers are not fully available.
      </p>

      <p style={{ maxWidth: "820px", margin: "25px auto", lineHeight: "1.9", fontSize: "17px" }}>
        Most dinosaur knowledge comes from fragments — broken bones, partial skeletons, and footprints.
        From that, scientists try to rebuild entire lives that no one has ever seen.
      </p>

      <p style={{ maxWidth: "820px", margin: "25px auto", lineHeight: "1.9", fontSize: "17px" }}>
        And here is the interesting part:
        they don’t always agree.
        One fossil can lead to multiple valid interpretations, depending on how you read it.
      </p>

      <p style={{ maxWidth: "820px", margin: "25px auto", lineHeight: "1.9", fontSize: "17px" }}>
        So instead of presenting dinosaurs as fixed “answers”, this project turns them into debates —
        where evidence is discussed, ideas clash, and uncertainty is normal.
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
        <h2 style={{ marginTop: 0 }}>What you’re actually seeing here</h2>

        <ul style={{ lineHeight: "2" }}>
          <li>Dinosaurs presented as scientific debates, not facts</li>
          <li>Fossils treated as clues, not complete answers</li>
          <li>Two scientists with different interpretations of the same evidence</li>
          <li>A curiosity-driven narrator (Maya) asking the real questions</li>
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
        <h2 style={{ marginTop: 0 }}>The idea behind it</h2>

        <p>
          Science is often shown like a finished answer.
          In reality, it’s closer to a long conversation that keeps changing as new evidence appears.
        </p>

        <p>
          This project tries to capture that feeling — where knowledge is not fixed,
          but something that evolves as we question it.
        </p>

        <p>
          Or in simpler terms:
          <br />
          <b>We’re showing science while it’s still being questioned, not after it’s been simplified.</b>
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
        <h2 style={{ marginTop: 0 }}>Why dinosaurs?</h2>

        <p>
          Dinosaurs are perfect for this idea because we will never fully know them.
          Every reconstruction is an interpretation built from limited evidence.
        </p>

        <p>
          That gap between “what we know” and “what we don’t know” is exactly where science lives.
          And honestly, that uncertainty is what makes it interesting.
        </p>

        <p>
          It’s the same in real life too — whether in science, technology, or problem solving:
          you rarely start with full information. You build understanding step by step.
        </p>
      </div>

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
          This is still an evolving project, so feedback is genuinely welcome.
        </p>

        <p>
          If you're a student, educator, or just someone curious about dinosaurs or interactive learning,
          feel free to reach out.
        </p>

        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <a
            href="mailto:samantha.connect.tech@gmail.com?subject=Feedback%20on%20Dinosaur%20Project"
            style={{
              textDecoration: "none",
              color: "#2d2a26",
              fontWeight: "500"
            }}
          >
            Send Email
          </a>
        </div>
      </div>

      <div
        style={{
          marginTop: "40px",
          fontStyle: "italic",
          opacity: 0.8,
          fontSize: "18px"
        }}
      >
        “We’re not looking at the past — we’re piecing it together like a broken puzzle.”
      </div>

    </div>
  )
}

export default About