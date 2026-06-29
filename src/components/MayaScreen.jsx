import { useEffect, useState } from "react"
import "../styles/dino.css"

function MayaScreen({ selected, onReset }) {

  const [text, setText] = useState("")

  const fullText =
    "Wait... if fossils are incomplete, how much of the story are we actually missing?"

  useEffect(() => {
    let i = 0

    const interval = setInterval(() => {
      setText(fullText.slice(0, i))
      i++

      if (i > fullText.length) clearInterval(interval)
    }, 45)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="maya-screen scene">

      <div className="floating-questions">
        ❓ ❓ ❓ ❓ ❓
      </div>

      
      <div className="maya-avatar">👩🏻</div>

      <h1>Maya is thinking...</h1>

      
      <p className="maya-text">{text}</p>

      
      <ul className="maya-list">
        {selected.curator.curiosity.map((q, i) => (
          <li key={i}>{q}</li>
        ))}
      </ul>

      
      <button className="btn btn-next" onClick={onReset}>
        Return to Museum
      </button>

    </div>
  )
}

export default MayaScreen