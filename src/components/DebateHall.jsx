import "../styles/dino.css"

function DebateHall({ selected, step, onNext, onExit }) {

  const a = selected.scientists.a
  const b = selected.scientists.b

  const getLine = (s) => {
    if (step === 0) return s.dialogue[0]
    if (step === 1) return s.dialogue[1]
    if (step === 2) return s.dialogue[2]
    if (step >= 3) return s.joke
    return ""
  }

  return (
    <div className="debate-hall scene">

      
      <h1 className="debate-title">⚖️ Scientific Debate</h1>

      
      <div className="debate-grid">

        <div className="scientist-side">
          <div className="emoji">👩‍🔬</div>

          <div className="thought">{a.name}</div>

          <div className="bubble">
            <p>{getLine(a)}</p>
          </div>
        </div>

        <div className="scientist-side">
          <div className="emoji">👨‍🔬</div>

          <div className="thought">{b.name}</div>

          <div className="bubble">
            <p>{getLine(b)}</p>
          </div>
        </div>

      </div>

      <div className="debate-controls">

        <button className="btn btn-next" onClick={onNext}>
          Next Thought →
        </button>

        <button className="btn btn-exit" onClick={onExit}>
          Exit Museum
        </button>

      </div>

    </div>
  )
}

export default DebateHall