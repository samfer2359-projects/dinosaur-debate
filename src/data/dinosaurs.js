import trexImg from "../assets/trex.jpg"
import spinoImg from "../assets/spin.jpg"
import deinonychusImg from "../assets/deni.jpg"

const dinosaurs = [
  {
    id: "trex",
    name: "Tyrannosaurus rex",
    image: trexImg,
    atmosphere:
      "A predator reconstructed from fragments, bite marks, footprints, and assumptions that may never fully settle.",

    questions: [
      {
        question: "Was Tyrannosaurus rex mainly a hunter or a scavenger?",

        choices: [
          {
            text: "Mostly an active hunter",
            challenge:
              "If Tyrannosaurus hunted frequently, how do we explain arguments that its massive body may have limited pursuit speed?"
          },
          {
            text: "Mostly a scavenger",
            challenge:
              "If Tyrannosaurus relied heavily on scavenging, why do some fossils appear to show evidence of violent attacks?"
          }
        ],

        hints: [
          "Its bite force was powerful enough to crush bone.",
          "Some fossil injuries on prey animals later healed.",
          "Modern predators often both hunt and scavenge."
        ],

        mysteries: [
          "Can fossils truly preserve behavior?",
          "Would modern ecosystems even separate hunting and scavenging so strictly?",
          "How much of prehistoric life is forever missing?"
        ],

        research: {
          google: "Tyrannosaurus rex hunter or scavenger debate",
          youtube: "T rex hunter or scavenger explanation paleontology"
        }
      },

      {
        question: "How fast could Tyrannosaurus rex move?",

        choices: [
          {
            text: "It may have been capable of running",
            challenge:
              "If it ran at high speed, could such enormous weight risk catastrophic injury?"
          },
          {
            text: "It was probably slower than often imagined",
            challenge:
              "If it moved slowly, how would it compete against faster prey animals?"
          }
        ],

        hints: [
          "Biomechanical models produce conflicting speed estimates.",
          "Its legs were heavily muscled.",
          "Footprint evidence remains limited."
        ],

        mysteries: [
          "Can movement truly be reconstructed from skeletons alone?",
          "Did younger individuals behave differently from adults?"
        ],

        research: {
          google: "how fast was T rex biomechanical speed estimate",
          youtube: "T rex running speed debate science explained"
        }
      }
    ]
  },

  {
    id: "spinosaurus",
    name: "Spinosaurus",
    image: spinoImg,
    atmosphere:
      "One of the most unstable dinosaur reconstructions ever created — repeatedly reshaped as evidence disappears, reappears, and changes meaning.",

    questions: [
      {
        question: "Was Spinosaurus fully aquatic?",

        choices: [
          {
            text: "It may have spent much of its life in water",
            challenge:
              "If Spinosaurus was highly aquatic, why do some studies question how efficiently it could actually swim?"
          },
          {
            text: "It may still have relied heavily on land",
            challenge:
              "If it mainly lived on land, why do its dense bones and tail anatomy appear so unusual?"
          }
        ],

        hints: [
          "Dense bones may have reduced buoyancy.",
          "Its tail has been interpreted as useful for propulsion.",
          "Many fossils were found in river-associated environments."
        ],

        mysteries: [
          "How much behavior can anatomy truly reveal?",
          "Could different life stages have behaved differently?",
          "How much of Spinosaurus is still missing?"
        ],

        research: {
          google: "Spinosaurus aquatic dinosaur debate swimming ability",
          youtube: "Spinosaurus swimming tail controversy science"
        }
      },

      {
        question: "Why does Spinosaurus keep changing?",

        choices: [
          {
            text: "Because new fossils continue changing interpretations",
            challenge:
              "If new discoveries improve understanding, why do reconstructions still remain so unstable?"
          },
          {
            text: "Because too much evidence is incomplete",
            challenge:
              "If the evidence is so fragmented, how confidently should any reconstruction be presented?"
          }
        ],

        hints: [
          "Important fossils were destroyed during World War II.",
          "Many remains are incomplete.",
          "Different reconstruction methods produce different outcomes."
        ],

        mysteries: [
          "How different would our understanding be if more fossils survived?",
          "How often is scientific confidence shaped by missing evidence?"
        ],

        research: {
          google: "why Spinosaurus reconstruction keeps changing fossils",
          youtube: "Spinosaurus reconstruction history debate"
        }
      }
    ]
  },

  {
    id: "deinonychus",
    name: "Deinonychus",
    image: deinonychusImg,
    atmosphere:
      "A dinosaur that transformed scientific imagination while leaving major behavioral questions unresolved.",

    questions: [
      {
        question: "Did Deinonychus hunt cooperatively?",

        choices: [
          {
            text: "It may have hunted in groups",
            challenge:
              "If these dinosaurs coordinated attacks, why is direct evidence for social behavior so difficult to confirm?"
          },
          {
            text: "The fossil groupings may be misleading",
            challenge:
              "If the fossils represent isolated feeding behavior, why are similar patterns repeatedly debated?"
          }
        ],

        hints: [
          "Some fossils were discovered near large prey remains.",
          "Modern predators show many different social behaviors.",
          "Fossil proximity does not automatically imply cooperation."
        ],

        mysteries: [
          "Can social behavior fossilize?",
          "How much modern animal behavior should influence reconstructions?"
        ],

        research: {
          google: "Deinonychus pack hunting evidence debate",
          youtube: "Did raptors hunt in packs Deinonychus science"
        }
      },

      {
        question: "How closely connected were dinosaurs and birds?",

        choices: [
          {
            text: "Birds may simply be living dinosaurs",
            challenge:
              "If birds are living dinosaurs, how many ancient behaviors still survive today?"
          },
          {
            text: "The evolutionary picture may still be incomplete",
            challenge:
              "If the fossil record is incomplete, how much evolutionary behavior remains invisible?"
          }
        ],

        hints: [
          "Many theropods share bird-like skeletal features.",
          "Feather evidence exists in related species.",
          "Modern birds preserve several theropod characteristics."
        ],

        mysteries: [
          "What behaviors existed before flight evolved?",
          "How much ancient life survives in modern ecosystems?"
        ],

        research: {
          google: "dinosaurs evolution into birds evidence fossils",
          youtube: "how dinosaurs became birds evolution explained"
        }
      }
    ]
  }
]

export default dinosaurs