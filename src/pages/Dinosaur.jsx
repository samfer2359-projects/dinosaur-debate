import dinosaurs from "../data/dinosaurs"
import { Link } from "react-router-dom"

function Dinosaur() {
  return (
    <div className="container dinosaur-page">

      <div className="page-header">
        <h1>Choose an Exhibit</h1>

        <p className="page-subtitle">
          Every exhibit begins with the same challenge: scientists have evidence,
          but not the complete story.
        </p>

        <p className="description">
          As you explore, don't try to find the "right" answer. Listen to the
          evidence, compare different interpretations, and notice which questions
          the fossils can answer—and which ones they still leave open.
        </p>
      </div>

      <div className="grid">

        {dinosaurs.map((dino) => (
          <Link
            key={dino.id}
            to={`/dinosaur/${dino.id}`}
            className="card-link"
          >
            <div className="card">

              <div className="card-image-wrapper">
                <img
                  src={dino.image}
                  alt={dino.name}
                />
              </div>

              <div className="card-content">
                <h2>{dino.name}</h2>
              </div>

            </div>
          </Link>
        ))}

      </div>

    </div>
  )
}

export default Dinosaur