import { Link } from "react-router-dom"

function Home() {
  return (
    <div className="home-wrapper">

      <div className="home-box">

        <h1>Welcome to the Dinosaur Debate Museum</h1>

        <p className="subtitle">
          A place where ancient worlds are reconstructed from fragments of evidence...
          where uncertainty is how reality teaches curiosity to think.
        </p>

        <p className="description">
          Dinosaurs are more than fossils — they are incomplete stories that scientists still try to piece together.
          And sometimes, those interpretations don’t fully agree.
        </p>

        <p className="description">
          Here, you’re invited to look at those disagreements yourself — and see how evidence can lead to more than one explanation.
        </p>

        <Link to="/dinosaur">
          <button className="cta">
            Begin the Journey
          </button>
        </Link>

      </div>

    </div>
  )
}

export default Home