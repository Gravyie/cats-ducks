import { useEffect, useState } from "react";
import frame1 from "../assets/husky/husky1.png";
import frame2 from "../assets/husky/husky2.png";
import frame3 from "../assets/husky/husky3.png";
import frame4 from "../assets/husky/husky4.png";


const frames = [frame1, frame2, frame3, frame4];

export default function AnimatedHusky() {
  const [frame, setFrame] = useState(0);

  const handleClick = () => {
    setFrame((prev) => (prev + 1) % frames.length);
  };

  return (
    <img
      src={frames[frame]}
      alt={`Cat frame ${frame + 1}`}
      onClick={handleClick}
      className="w-44 h-44 cursor-pointer select-none"
    />
  );
}
