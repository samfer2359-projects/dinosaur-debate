import "../styles/dino.css"

function MuseumHall({ dino, onOpen }) {
  return (
    <div className="museum-hall scene">

      <div className="museum-title">
        <h1>🦴 Fossil Hall</h1>
        <p>Click a fossil to begin the investigation</p>
      </div>

      <div className="fossil-grid">
        {dino.exhibits.map((ex) => (
          <div
            key={ex.id}
            className="fossil"
            onClick={() => onOpen(ex)}
          >
            🦴
          </div>
        ))}
      </div>

    </div>
  )
}

export default MuseumHall