import { useEffect, useState } from "react";
import Confetti from "react-confetti";
import { useWindowSize } from "@react-hook/window-size";

import AnimatedBirb from "./components/AnimatedBirb";
import AnimatedCat from "./components/AnimatedCat";
import AnimatedDuck from "./components/AnimatedDuck";
import AnimatedElelf from "./components/AnimatedElelf";
import AnimatedFox from "./components/AnimatedFox";
import AnimatedHusky from "./components/AnimatedHusky";
import AnimatedPengu from "./components/AnimatedPengu";

import farmBg from "./assets/farm.png";
import PixelSpeechBubble from "./components/PixelSpeechBubble";

export default function App() {
  const [showHint, setShowHint] = useState(true);
  const [showQuestion, setShowQuestion] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [width, height] = useWindowSize();
  const [hideEnvelope, setHideEnvelope] = useState(false);
  const [bubble, setBubble] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => setShowHint(false), 6000);
    return () => clearTimeout(timer);
  }, []);

  async function submitAnswer(answer) {
    try {
      const res = await fetch("https://date-api-izba.onrender.com/api/answer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ answer }),
      });

      if (!res.ok) throw new Error("Failed to submit");

      if (answer === "yes") {
        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 15000); // Confetti disappears after 6s
      }
      if (answer === "no") {
        setHideEnvelope(true);
      }

      setShowQuestion(false);
      //alert("Your answer has been recorded ❤️");
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Please try again.");
    }
  }


  return (
    <div
      className="relative w-screen h-screen overflow-hidden"
      style={{
        backgroundImage: `url(${farmBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* 🧠 Pixel Hint Tab */}
      {showHint && (
        <div className="absolute top-6 left-1/2 transform -translate-x-1/2 z-50">
          <div className="bg-[#FFF1DB] border-4 border-black px-6 py-3 rounded-md shadow-lg text-xs font-pixel text-black relative">
            Click on elements and animals to interact
            <button
              onClick={() => setShowHint(false)}
              className="absolute top-1 right-2 text-lg font-bold leading-none text-black hover:text-red-500 transition"
            >
              ×
            </button>
          </div>
        </div>
      )}
      {showQuestion && (
        <div className="absolute inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
          <div className="bg-[#FFF1DB] border-4 border-black px-6 py-5 rounded-lg shadow-lg font-pixel text-sm text-black relative w-[90%] max-w-md text-center">
            <button
              onClick={() => setShowQuestion(false)}
              className="absolute top-2 right-3 text-xl font-bold hover:text-red-500"
            >
              ×
            </button>

            <p className="mb-6 leading-relaxed">
              Would you like to go on a date with me<br />
              to the F1 movie?
            </p>

            <div className="flex justify-center gap-6">
              <button
                onClick={() => submitAnswer("yes")}
                className="bg-green-300 border-2 border-black px-4 py-2 rounded hover:bg-green-400 active:scale-95 transition-all"
              >
                Yes
              </button>
              <button
                onClick={() => submitAnswer("no")}
                className="bg-red-300 border-2 border-black px-4 py-2 rounded hover:bg-red-400 active:scale-95 transition-all"
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}


      {/* 🐾 Animal Components Placed Around the Farm */}
      <div 
        className="absolute left-[60%] top-[5%]"
        onClick={() =>
          setBubble({
            message: "i feel ..... dreamy",
            position: { top: "10%", left: "65%" },
          })
        }
      >
        <AnimatedCat />
      </div>

      <div
        className="absolute right-[40%] bottom-[25%]"
        onClick={() =>
            setBubble({
              message: "AHHHH-WWOOOOOOHHH!",
              position: { bottom: "45%", left: "57%" },
            })
          }       
      >
        <AnimatedHusky />
      </div>

      <div 
        className="absolute left-[20%] bottom-[8%]"
        onClick={() =>
          setBubble({
            message: "qwait.. what is going on here?!",
            position: { bottom: "15%", left: "25%" },
          })
        }
      >
        <AnimatedDuck />
      </div>

      <div 
        className="absolute left-[47%] top-[20%]"
        onClick={() =>
          setBubble({
            message: "i knew it since forever!",
            position: { top: "17%", left: "45%" },
          })
        }
      >
        <AnimatedBirb />
      </div>

      <div 
        className="absolute left-[27%] top-[29%]"
        onClick={() =>
          setBubble({
            message: "stupid hooman!",
            position: { top: "25%", left: "25%" },
          })
        }
      >
        <AnimatedFox />
      </div>

      <div 
        className="absolute left-[12%] bottom-[35%]"
        onClick={() =>
          setBubble({
            message: "my ears tingle... but idk if they are still as soft",
            position: { top: "50%", left: "23%" },
          })
        }
      >
        <AnimatedElelf />
      </div>

      <div 
        className="absolute right-[10%] bottom-[40%]"
        onClick={() =>
          setBubble({
            message: "ahhh, this is so warm, but why am i loving it?!",
            position: { top: "60%", right: "20%" },
          })
        }
      >
        <AnimatedPengu />
      </div>

      {bubble && (
        <div
          style={{
            position: "absolute",
            ...bubble.position,
          }}
        >
          <PixelSpeechBubble
            message={bubble.message}
            onClose={() => setBubble(null)}
          />
        </div>
      )}

      {!hideEnvelope && (
        <div
          className="absolute left-[12%] top-[20%] cursor-pointer z-40"
          onClick={() => setShowQuestion(true)}
        >
          <img
            src="/src/assets/envelope.png"
            alt="Envelope"
            className="w-16 h-16 hover:scale-110 transition-transform  glow-envelope"
          />
        </div>
      )}

      {showConfetti && <Confetti width={width} height={height} numberOfPieces={300} />}
    </div>
  );
}
