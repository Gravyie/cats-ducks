import { useEffect, useState, useRef } from "react";

export default function PixelSpeechBubble({ message, onClose }) {
  const [displayedText, setDisplayedText] = useState("");
  const indexRef = useRef(0);

  useEffect(() => {
    setDisplayedText(""); // Reset displayed text for new message
    indexRef.current = 0;
    
    const interval = setInterval(() => {
      if (indexRef.current < message.length) {
        setDisplayedText(message.slice(0, indexRef.current + 1));
        indexRef.current++;
      } else {
        clearInterval(interval);
        setTimeout(onClose, 5000); // Auto-close after full message shown
      }
    }, 60); // Speed of typing

    return () => clearInterval(interval);
  }, [message, onClose]);

  return (
    <div
      className="absolute z-50 px-4 py-2 bg-[#FFF1DB] border-4 border-black rounded-lg font-pixel text-xs text-black shadow-lg"
      style={{
        whiteSpace: "nowrap",
        maxWidth: "90vw",
      }}
    >
      {displayedText}
    </div>
  );
}