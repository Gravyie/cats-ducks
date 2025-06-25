import { useEffect, useState } from "react";
import frame1 from "../assets/birb/birb1.png";
import frame2 from "../assets/birb/birb2.png";
import frame3 from "../assets/birb/birb3.png";
import frame4 from "../assets/birb/birb4.png";
import frame5 from "../assets/birb/birb5.png";


const frames = [frame1, frame2, frame3, frame4, frame5];

export default function AnimatedBirb() {
  const [frame, setFrame] = useState(0);

  const handleClick = () => {
    setFrame((prev) => (prev + 1) % frames.length);
  };

  return (
    <img
      src={frames[frame]}
      alt={`Cat frame ${frame + 1}`}
      onClick={handleClick}
      className="w-20 h-20 cursor-pointer select-none"
    />
  );
}
