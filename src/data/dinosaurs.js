import trexImg from "../assets/trex.jpg"
import spinoImg from "../assets/spin.jpg"
import deinonychusImg from "../assets/deni.jpg"

const dinosaurs = [
  {
  id: "trex",
  name: "Tyrannosaurus rex",
  image: trexImg,

  atmosphere:
    "We don’t have a complete T. rex skeleton. Most of what we know comes from places like Montana’s Hell Creek Formation — scattered bones, partial skulls, and a lot of educated reconstruction. It’s like trying to rebuild a movie from a few broken scenes.",

  exhibits: [
    {
      id: "skull",
      title: "The Skull",

      description:
        "This skull, found in formations like Hell Creek (USA), is one of the strongest bite systems ever discovered in land animals. The debate isn’t about power — it’s about behavior: hunting or scavenging?",

      scientists: {
        a: {
          name: "Dr. Eleanor Finch 🧠",
          role: "Biomechanics researcher",

          dialogue: [
            "This skull from Hell Creek is honestly built like a natural crushing machine 🦖.",
            "When we reconstruct the bite mechanics, it produces forces strong enough to break through bone — not just flesh.",
            "That kind of power strongly suggests active hunting, not just opportunistic feeding."
          ],

          evidence: [
            "Skull fossils from Hell Creek Formation (Montana, USA)",
            "Extremely high bite force estimates from jaw reconstruction",
            "Healed bite marks found on Triceratops fossils in the same region"
          ],

          joke:
            "If humans had that bite force, eating would turn into a full-time responsibility 😂"
        },

        b: {
          name: "Dr. Marcus Hale 🔍",
          role: "Fossil ecologist",

          dialogue: [
            "I agree the skull is powerful — but fossils don’t tell us *how often* it used that power.",
            "In ecosystems like Hell Creek, you find predator and prey fossils mixed together all the time. That doesn’t show behavior, just shared environments.",
            "Even modern predators like lions don’t hunt exclusively — they scavenge whenever it’s easier 🦁."
          ],

          evidence: [
            "Modern lions and hyenas regularly scavenge despite being skilled hunters",
            "Fossil sites like Hell Creek show mixed ecological remains, not direct behavior",
            "No fossil preserves an actual hunting moment in action"
          ],

          joke:
            "Fossils are great storytellers… but terrible eyewitnesses 😄"
        }
      },

      curator: {
        name: "Maya 🧐",

        curiosity: [
          "So we’re making conclusions from bones alone?",
          "Could it have switched between hunting and scavenging?",
          "What kind of fossil would actually prove behavior?"
        ],

        reactions: [
          "Wait… so both scientists might be right depending on context? 🤯",
          "This feels like detective work where half the evidence is missing.",
          "We’re not finding answers — we’re reconstructing possibilities."
        ]
      }
    },

    {
      id: "legs",
      title: "The Legs",

      description:
        "Leg fossils from places like Montana suggest powerful movement, but speed is still debated. Was T. rex a fast sprinter or a heavy ambush walker built for strength?",

      scientists: {
        a: {
          name: "Dr. Eleanor Finch 🧠",
          role: "Biomechanics researcher",

          dialogue: [
            "The femur fossils show massive muscle attachment points — especially in specimens from Montana 🦴.",
            "That usually means explosive movement, like short bursts rather than long-distance running.",
            "So I don’t see it as slow — I see it as a powerful ambush predator that moves fast when needed."
          ],

          evidence: [
            "Femur fossils showing strong muscle attachment scars",
            "Computer-based motion simulations suggesting burst speed",
            "Weight distribution analysis from reconstructed skeletons"
          ],

          joke:
            "Honestly, I also move in short bursts… usually toward snacks 😭"
        },

        b: {
          name: "Dr. Marcus Hale 🔍",

          role: "Fossil ecologist",

          dialogue: [
            "The issue is size 🐘 — at that body mass, fast running creates huge stress on joints.",
            "Different models don’t even agree on posture yet, which changes all speed calculations.",
            "So instead of a runner, I see something more like a heavy, controlled ambush walker."
          ],

          evidence: [
            "High body mass increases joint stress significantly",
            "Conflicting biomechanical simulation results",
            "No confirmed high-speed trackway fossils"
          ],

          joke:
            "Gravity has been undefeated since the beginning of time. I’m not betting against it 😄"
        }
      },

      curator: {
        name: "Maya 🧐",

        curiosity: [
          "Can computers really reconstruct movement accurately?",
          "Did younger dinosaurs move differently than adults?",
          "How much of this is calculation vs guesswork?"
        ],

        reactions: [
          "So even simulations don’t fully agree… that’s surprising 🤔",
          "We’re rebuilding movement from math + fossils.",
          "It feels like reverse engineering a living creature from fragments."
        ]
      }
    }
  ]
},

{
  id: "spinosaurus",
  name: "Spinosaurus",
  image: spinoImg,

  atmosphere:
    "Spinosaurus is one of the most debated dinosaurs in science. Most fossils come from North Africa, especially Morocco’s Kem Kem beds, but the remains are incomplete and scattered. Every new discovery changes how scientists imagine its body and lifestyle — like the animal keeps getting reassembled differently over time.",

  exhibits: [
    {
      id: "tail",
      title: "The Tail",

      description:
        "This tail comes from partial fossils found in Morocco’s Kem Kem Beds. It looks unusually tall and flexible, which sparked a major debate: was Spinosaurus adapted for swimming, or just capable of entering water occasionally?",

      scientists: {
        a: {
          name: "Dr. Sofia Alvarez 🌊",
          role: "Paleontologist",

          dialogue: [
            "The tail fossils from Morocco show a structure that behaves almost like a fin in water 🐊.",
            "When we run hydrodynamic simulations, it creates thrust similar to modern semi-aquatic predators.",
            "That strongly suggests Spinosaurus spent a large part of its life in rivers and shallow waters."
          ],

          evidence: [
            "Tail fossils from Kem Kem Beds (Morocco, North Africa)",
            "Dense bone structure similar to aquatic-adapted animals",
            "Fossils found in river and delta sediment deposits"
          ],

          joke:
            "This one basically had zero interest in picking a lifestyle 😂"
        },

        b: {
          name: "Dr. Marcus Hale 🔍",
          role: "Fossil ecologist",

          dialogue: [
            "The tail is fascinating, but we’re still missing key parts of the skeleton.",
            "Without a complete body, it’s risky to assume a fully aquatic lifestyle.",
            "It may have been capable of swimming — but that doesn’t mean it depended on it."
          ],

          evidence: [
            "Incomplete skeletal record of Spinosaurus",
            "Conflicting biomechanical swimming simulations",
            "Missing torso and limb fossil evidence"
          ],

          joke:
            "In paleontology, every confident theory waits for the next fossil to challenge it 😅"
        }
      },

      curator: {
        name: "Maya 🧐",

        curiosity: [
          "What if we only discovered half the dinosaur?",
          "Could it survive both in water and on land?",
          "Why are Spinosaurus fossils so incomplete compared to others?"
        ],

        reactions: [
          "So our understanding might completely change again? 🤯",
          "We’re reconstructing a living creature from fragments.",
          "It feels like solving a puzzle where half the pieces are still buried."
        ]
      }
    }
  ]
},
{
  id: "deinonychus",
  name: "Deinonychus",
  image: deinonychusImg,

  atmosphere:
    "Deinonychus fossils come mainly from places like Montana (USA), especially the Cloverly Formation. Unlike giant dinosaurs, this one changed how scientists think about behavior itself — especially whether predators hunted alone or in groups. But behavior is the hardest thing to prove from fossils, so the debate is still open.",

  exhibits: [
    {
      id: "claws",
      title: "The Claws",

      description:
        "These curved claws were found in Montana’s Cloverly Formation alongside remains of other dinosaurs. They clearly suggest a fast predator — but whether it hunted in coordinated packs or lived more independently is still debated.",

      scientists: {
        a: {
          name: "Dr. Eleanor Finch 🧠",
          role: "Biomechanics researcher",

          dialogue: [
            "These claw fossils from the Cloverly Formation are clearly built for gripping and control 🦅.",
            "When we compare them to modern birds of prey, the mechanics suggest coordinated hunting is at least possible.",
            "If multiple individuals were moving together, they could have brought down larger prey as a group."
          ],

          evidence: [
            "Claw fossils from Cloverly Formation (Montana, USA)",
            "Curved grip anatomy similar to modern raptors and birds of prey",
            "Fossil clusters showing multiple individuals found near prey remains"
          ],

          joke:
            "Pop culture says ‘dream team’… science says ‘interesting idea, but not confirmed’ 😄"
        },

        b: {
          name: "Dr. Marcus Hale 🔍",
          role: "Fossil ecologist",

          dialogue: [
            "We have to be careful here — fossils close together don’t automatically mean teamwork.",
            "In places like Montana, multiple animals can get buried together during floods or environmental events.",
            "So what looks like group behavior might just be a coincidence preserved in rock."
          ],

          evidence: [
            "No direct fossil evidence of coordinated hunting behavior",
            "Mass burial events common in fossil sites like Cloverly Formation",
            "Modern predators show flexible, non-fixed social behavior"
          ],

          joke:
            "Sadly, fossils don’t preserve group chats or teamwork meetings 😅"
        }
      },

      curator: {
        name: "Maya 🧐",

        curiosity: [
          "Did they really hunt together or just get buried together?",
          "How do scientists tell behavior from bones alone?",
          "Why is behavior the hardest thing to fossilize?"
        ],

        reactions: [
          "So we’re not seeing behavior… we’re interpreting it 🤯",
          "Even a simple fossil can have multiple explanations.",
          "I want MORE fossils… this is not enough evidence 😭"
        ]
      }
    }
  ]
}


]

export default dinosaurs