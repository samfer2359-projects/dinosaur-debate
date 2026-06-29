import { useParams, Link } from "react-router-dom"
import { useState } from "react"
import dinosaurs from "../data/dinosaurs"

import MuseumHall from "../components/MuseumHall"
import DebateHall from "../components/DebateHall"
import MayaScreen from "../components/MayaScreen"

function DinosaurDetail() {
  const { id } = useParams()
  const dino = dinosaurs.find((d) => d.id === id)

  const [scene, setScene] = useState("museum")
  const [selected, setSelected] = useState(null)
  const [step, setStep] = useState(0)

  if (!dino) {
    return <div className="container">Exhibit not found</div>
  }

  const openFossil = (exhibit) => {
    if (!exhibit?.scientists) return

    setSelected(exhibit)
    setStep(0)
    setScene("debate")
  }

  const nextStep = () => {
    setStep((prev) => prev + 1)
  }

  const reset = () => {
    setScene("museum")
    setSelected(null)
    setStep(0)
  }

  const showMaya = scene === "debate" && step >= 4

  return (
    <div className="dino-page">

      <Link to="/dinosaur" className="back-link">
        ← Return to Exhibit Hall
      </Link>

      

      
      {scene === "museum" && (
        <MuseumHall dino={dino} onOpen={openFossil} />
      )}

     
      {scene === "debate" && selected && !showMaya && (
        <DebateHall
          selected={selected}
          step={step}
          onNext={nextStep}
          onExit={reset}
        />
      )}

      
      {showMaya && selected && (
        <MayaScreen
          selected={selected}
          onReset={reset}
        />
      )}

    </div>
  )
}

export default DinosaurDetail