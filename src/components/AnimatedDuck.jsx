import { useEffect, useState } from "react";
import frame1 from "../assets/duck/duck1.png";
import frame2 from "../assets/duck/duck2.png";
import frame3 from "../assets/duck/duck3.png";
import frame4 from "../assets/duck/duck4.png";


const frames = [frame1, frame2, frame3, frame4];

export default function AnimatedDuck() {
  const [frame, setFrame] = useState(0);

  const handleClick = () => {
    setFrame((prev) => (prev + 1) % frames.length);
  };

  return (
    <img
      src={frames[frame]}
      alt={`Cat frame ${frame + 1}`}
      onClick={handleClick}
      className="w-18 h-24 cursor-pointer select-none"
    />
  );
}
