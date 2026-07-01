import { useEffect, useState } from "react"
import "../styles/dino.css"

function MayaScreen({ selected, onReset }) {
  const [text, setText] = useState("")

  const fullText =
    "You just watched the same fossil lead to different interpretations..."

  useEffect(() => {
    let i = 0

    const interval = setInterval(() => {
      setText(fullText.slice(0, i))
      i++

      if (i > fullText.length) {
        clearInterval(interval)
      }
    }, 40)

    return () => clearInterval(interval)
  }, [])

  const reactions = selected?.curator?.reactions || []
  const curiosity = selected?.curator?.curiosity || []

  return (
    <div className="maya-screen scene">

      <div className="floating-questions">
        ❓ ❓ ❓ ❓ ❓
      </div>

      <div className="maya-avatar">👩🏻</div>

      <h1>Maya’s Reflection</h1>

      <p className="maya-text">
        {text}
      </p>

      {/* Exhibit-specific emotional reaction */}
      <div
        style={{
          maxWidth: "720px",
          margin: "25px auto",
          lineHeight: "1.8",
          opacity: 0.9
        }}
      >
        {reactions.length > 0 && (
          <>
            <p style={{ fontWeight: "500" }}>
              What people often feel after this exhibit:
            </p>

            <ul className="maya-list">
              {reactions.map((r, i) => (
                <li key={i}>{r}</li>
              ))}
            </ul>
          </>
        )}
      </div>

      {/* Core idea shift */}
      <div
        style={{
          maxWidth: "720px",
          margin: "30px auto",
          lineHeight: "1.9",
          fontSize: "16px"
        }}
      >
        <p>
          What you saw wasn’t disagreement about facts—it was interpretation of
          incomplete evidence.
        </p>

        <p style={{ marginTop: "12px" }}>
          Science often works like this: multiple explanations can exist at the
          same time until new evidence reduces uncertainty.
        </p>
      </div>

      {/* Curiosity section */}
      <h2 style={{ marginTop: "35px" }}>
        Questions worth keeping
      </h2>

      <ul className="maya-list">
        {curiosity.map((q, i) => (
          <li key={i}>{q}</li>
        ))}
      </ul>

      {/* Closing idea */}
      <p
        style={{
          maxWidth: "720px",
          margin: "35px auto",
          lineHeight: "1.9",
          fontStyle: "italic",
          opacity: 0.85
        }}
      >
        Uncertainty isn’t a problem in science.
        It’s the space where thinking actually happens.
      </p>

      <button
        className="btn btn-next"
        onClick={onReset}
      >
        Explore Another Exhibit
      </button>

    </div>
  )
}

export default MayaScreen