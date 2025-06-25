import { useEffect, useState } from "react";
import frame1 from "../assets/fox/fox1.png";
import frame2 from "../assets/fox/fox2.png";
import frame3 from "../assets/fox/fox3.png";
import frame4 from "../assets/fox/fox4.png";
import frame5 from "../assets/fox/fox5.png";
import frame6 from "../assets/fox/fox6.png";


const frames = [frame1, frame2, frame3, frame4, frame5, frame6];

export default function AnimatedFox() {
  const [frame, setFrame] = useState(0);

  const handleClick = () => {
    setFrame((prev) => (prev + 1) % frames.length);
  };

  return (
    <img
      src={frames[frame]}
      alt={`Cat frame ${frame + 1}`}
      onClick={handleClick}
      className="w-24 h-24 cursor-pointer select-none"
    />
  );
}
