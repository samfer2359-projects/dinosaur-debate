import { Link } from "react-router-dom"

function Home() {
  return (
    <div className="home-wrapper">

      <div className="home-box">

        <h1>Welcome to the Dinosaur Debate Museum</h1>

        <p className="subtitle">
          A place where ancient worlds come alive through curiosity and discovery.
        </p>

        <p className="description">
          Dinosaurs are more than fossils — they are stories waiting to be understood.
          Scientists continue to explore, question, and learn from them every day.
        </p>

        <p className="description">
          Here, you are invited to explore those questions yourself — to imagine,
          wonder, and see how science grows through curiosity.
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