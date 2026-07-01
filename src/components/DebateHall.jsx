import "../styles/dino.css"

function DebateHall({ selected, step, onNext, onExit }) {
  const a = selected.scientists.a
  const b = selected.scientists.b

  const getDialogue = (scientist) => {
    if (step <= 2) {
      return scientist.dialogue[step]
    }

    return scientist.joke
  }

  const showEvidence = step === 2
  const showJoke = step >= 3

  return (
    <div className="debate-hall scene">

      <h1 className="debate-title">
        ⚖️ Scientific Debate
      </h1>

      <p
        style={{
          maxWidth: "760px",
          margin: "0 auto 35px",
          textAlign: "center",
          lineHeight: "1.8"
        }}
      >
        Both scientists are examining the same fossil.
        Their goal isn't to prove each other wrong—it's to explain what the
        available evidence might mean.
      </p>

      <div className="debate-grid">

        <div className="scientist-side">

          <div className="emoji">👩‍🔬</div>

          <div className="thought">
            {a.name}
          </div>

          <p
            style={{
              marginTop: "-8px",
              marginBottom: "18px",
              opacity: 0.75,
              fontSize: "14px"
            }}
          >
            {a.role}
          </p>

          <div className="bubble">
            <p>{getDialogue(a)}</p>
          </div>

          {showEvidence && (
            <div
              className="evidence-box"
              style={{
                marginTop: "18px",
                textAlign: "left"
              }}
            >
              <h4>Evidence considered</h4>

              <ul>
                {a.evidence.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          )}

        </div>

        <div className="scientist-side">

          <div className="emoji">👨‍🔬</div>

          <div className="thought">
            {b.name}
          </div>

          <p
            style={{
              marginTop: "-8px",
              marginBottom: "18px",
              opacity: 0.75,
              fontSize: "14px"
            }}
          >
            {b.role}
          </p>

          <div className="bubble">
            <p>{getDialogue(b)}</p>
          </div>

          {showEvidence && (
            <div
              className="evidence-box"
              style={{
                marginTop: "18px",
                textAlign: "left"
              }}
            >
              <h4>Evidence considered</h4>

              <ul>
                {b.evidence.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          )}

        </div>

      </div>

      <div
        style={{
          marginTop: "30px",
          maxWidth: "780px",
          marginLeft: "auto",
          marginRight: "auto",
          textAlign: "center",
          opacity: 0.8
        }}
      >
        {step === 0 &&
          "Each scientist begins with an observation."}

        {step === 1 &&
          "Now they're explaining how they interpret the evidence."}

        {step === 2 &&
          "Notice that both scientists are using evidence, yet they reach different conclusions."}

        {showJoke &&
          "Even scientists enjoy a laugh after a long discussion."}
      </div>

      <div className="debate-controls">

        <button
          className="btn btn-next"
          onClick={onNext}
        >
          {step < 3
            ? "Continue Discussion →"
            : "See Maya's Reflection →"}
        </button>

        <button
          className="btn btn-exit"
          onClick={onExit}
        >
          Return to Museum
        </button>

      </div>

    </div>
  )
}

export default DebateHall