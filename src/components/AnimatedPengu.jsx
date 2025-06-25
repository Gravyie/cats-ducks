import { useEffect, useState } from "react";
import frame1 from "../assets/pengu/pengu1.png";
import frame2 from "../assets/pengu/pengu2.png";
import frame3 from "../assets/pengu/pengu3.png";
import frame4 from "../assets/pengu/pengu4.png";
import frame5 from "../assets/pengu/pengu5.png";


const frames = [frame1, frame2, frame3, frame4, frame5];

export default function AnimatedPengu() {
  const [frame, setFrame] = useState(0);

  const handleClick = () => {
    setFrame((prev) => (prev + 1) % frames.length);
  };

  return (
    <img
      src={frames[frame]}
      alt={`Cat frame ${frame + 1}`}
      onClick={handleClick}
      className="w-30 h-36 cursor-pointer select-none"
    />
  );
}
