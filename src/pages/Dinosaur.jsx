import dinosaurs from "../data/dinosaurs"
import { Link } from "react-router-dom"

function Dinosaur() {
  return (
    <div className="container">
  <h1>Exhibits</h1>

  <p style={{ marginBottom: "20px", opacity: 0.8 }}>
    Explore dinosaurs as scientific debates.
  </p>

  <div className="grid">
    {dinosaurs.map((dino) => (
      <Link key={dino.id} to={`/dinosaur/${dino.id}`}>
        <div className="card">
          <img src={dino.image} alt={dino.name} />
          <div style={{ padding: "14px" }}>
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