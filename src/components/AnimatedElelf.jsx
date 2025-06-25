import { useEffect, useState } from "react";
import frame1 from "../assets/elelf/elelf1.png";
import frame2 from "../assets/elelf/elelf2.png";
import frame3 from "../assets/elelf/elelf3.png";
import frame4 from "../assets/elelf/elelf4.png";
import frame5 from "../assets/elelf/elelf5.png";
import frame6 from "../assets/elelf/elelf6.png";


const frames = [frame1, frame2, frame3, frame4, frame5, frame6];

export default function AnimatedElelf() {
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
