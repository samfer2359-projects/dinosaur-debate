import dinosaurs from "../data/dinosaurs"
import { Link } from "react-router-dom"

function Dinosaur() {
  return (
    <div className="container dinosaur-page">

      
      <div className="page-header">
        <h1>Exhibits</h1>

        <p className="page-subtitle">
          Explore dinosaurs as scientific debates.
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
                <img src={dino.image} alt={dino.name} />
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