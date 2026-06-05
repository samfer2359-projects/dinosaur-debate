import { useParams, Link } from "react-router-dom"
import { useState } from "react"
import dinosaurs from "../data/dinosaurs"

function DinosaurDetail() {
  const { id } = useParams()

  const dino = dinosaurs.find((d) => d.id === id)

  const [selectedQuestion, setSelectedQuestion] = useState(null)
  const [selectedChoice, setSelectedChoice] = useState(null)
  const [showHints, setShowHints] = useState(false)

  if (!dino) {
    return <div className="container">Exhibit not found</div>
  }

  const resetState = () => {
    setSelectedQuestion(null)
    setSelectedChoice(null)
    setShowHints(false)
  }

  const styles = {
    questionCard: {
      width: "260px",
      padding: "20px",
      cursor: "pointer",
      borderRadius: "16px",
      background: "rgba(45, 42, 38, 0.06)",
      border: "1px solid rgba(45, 42, 38, 0.15)",
      color: "#2d2a26",
      lineHeight: "1.7",
      transition: "0.25s ease",
      boxShadow: "0 6px 18px rgba(0,0,0,0.08)"
    },

    choiceCard: {
      padding: "18px",
      marginBottom: "16px",
      cursor: "pointer",
      borderRadius: "14px",
      background: "rgba(192, 132, 87, 0.08)",
      border: "1px solid rgba(192, 132, 87, 0.25)",
      color: "#2d2a26",
      transition: "0.25s ease"
    },

    panel: {
      marginTop: "60px",
      maxWidth: "850px",
      marginInline: "auto",
      padding: "35px",
      background: "rgba(253, 246, 236, 0.96)",
      borderRadius: "24px",
      border: "1px solid rgba(0,0,0,0.08)",
      boxShadow: "0 25px 60px rgba(0,0,0,0.25)",
      textAlign: "left",
      color: "#2d2a26"
    }
  }

  return (
    <div className="container">

      {/* BACK LINK */}
      <Link
        to="/dinosaur"
        style={{
          textDecoration: "none",
          color: "#a86f45",
          fontWeight: "500"
        }}
      >
        ← Return to Exhibit Hall
      </Link>

      {/* TITLE */}
      <h1 style={{ marginTop: "20px", fontSize: "3rem" }}>
        {dino.name}
      </h1>

      {/* ATMOSPHERE */}
      <p
        style={{
          maxWidth: "800px",
          margin: "20px auto",
          lineHeight: "1.9",
          opacity: 0.75
        }}
      >
        {dino.atmosphere}
      </p>

      <p
        style={{
          marginTop: "50px",
          opacity: 0.6,
          fontStyle: "italic"
        }}
      >
        Select a question to begin exploring incomplete evidence.
      </p>

      {/* QUESTIONS */}
      {!selectedQuestion && (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "22px",
            marginTop: "50px"
          }}
        >
          {dino.questions.map((q, index) => (
            <div
              key={index}
              style={styles.questionCard}
              onClick={() => {
                setSelectedQuestion(q)
                setSelectedChoice(null)
                setShowHints(false)
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background =
                  "rgba(192, 132, 87, 0.12)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background =
                  "rgba(45, 42, 38, 0.06)")
              }
            >
              {q.question}
            </div>
          ))}
        </div>
      )}

      {/* PANEL */}
      {selectedQuestion && (
        <div style={styles.panel}>

          {/* CLOSE */}
          <button
            onClick={resetState}
            style={{
              float: "right",
              background: "transparent",
              border: "none",
              fontSize: "18px",
              cursor: "pointer",
              color: "#2d2a26"
            }}
          >
            ✕
          </button>

          <h2 style={{ marginBottom: "25px" }}>
            {selectedQuestion.question}
          </h2>

          {/* CHOICES */}
          {!selectedChoice && (
            <>
              <p style={{ opacity: 0.7, marginBottom: "20px" }}>
                Which interpretation feels more supported by the evidence?
              </p>

              {selectedQuestion.choices.map((choice, index) => (
                <div
                  key={index}
                  style={styles.choiceCard}
                  onClick={() => setSelectedChoice(choice)}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.background =
                      "rgba(192, 132, 87, 0.18)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.background =
                      "rgba(192, 132, 87, 0.08)")
                  }
                >
                  {choice.text}
                </div>
              ))}

              {/* HINTS */}
              <button
                onClick={() => setShowHints(!showHints)}
                style={{
                  marginTop: "15px",
                  padding: "10px 16px",
                  borderRadius: "10px",
                  border: "none",
                  cursor: "pointer",
                  background: "#c08457",
                  color: "#fff"
                }}
              >
                {showHints ? "Hide Fossil Clues" : "Reveal Fossil Clues"}
              </button>

              {showHints && (
                <ul style={{ marginTop: "20px", lineHeight: "1.9" }}>
                  {selectedQuestion.hints.map((hint, i) => (
                    <li key={i}>{hint}</li>
                  ))}
                </ul>
              )}

              <div style={{ marginTop: "15px",
                  width: "300px",
                  padding: "10px 16px",
                  borderRadius: "10px",
                  border: "none",
                  cursor: "pointer",
                  background: "#c08457",
                  color: "#fff" }}>
  <h3>Investigate</h3>

  <button
    onClick={() =>
      window.open(
        `https://www.google.com/search?q=${encodeURIComponent(
          selectedQuestion.research.google
        )}`,
        "_blank"
      )
    }
  >
    🔍 Google Research
  </button>
   &nbsp; &nbsp;
  <button
    onClick={() =>
      window.open(
        `https://www.youtube.com/results?search_query=${encodeURIComponent(
          selectedQuestion.research.youtube
        )}`,
        "_blank"
      )
    }
  >
    ▶ YouTube Explainer
  </button>
</div>
            </>
          )}

          {/* RESULT */}
          {selectedChoice && (
            <>
              <p style={{ opacity: 0.65 }}>You leaned toward:</p>

              <h3 style={{ marginTop: "10px" }}>
                {selectedChoice.text}
              </h3>

              <div
                style={{
                  marginTop: "25px",
                  padding: "20px",
                  borderLeft: "3px solid #c08457",
                  background: "rgba(192, 132, 87, 0.06)",
                  lineHeight: "1.8"
                }}
              >
                {selectedChoice.challenge}
              </div>

              <h3 style={{ marginTop: "35px" }}>
                Questions That Still Remain
              </h3>

              <ul style={{ lineHeight: "2" }}>
                {selectedQuestion.mysteries.map((m, i) => (
                  <li key={i}>{m}</li>
                ))}
              </ul>

              <p
                style={{
                  marginTop: "30px",
                  opacity: 0.6,
                  fontStyle: "italic"
                }}
              >
                No interpretation is final — only different ways of reading incomplete evidence.
              </p>
            </>
          )}
        </div>
      )}
    </div>
  )
}

export default DinosaurDetail