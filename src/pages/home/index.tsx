import { useRef, useEffect } from "react";

import "./index.scss";

const Home = () => {
  const characterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (characterRef.current) {
      characterRef.current.style.setProperty(
        "--image-url",
        "url('/images/1.png')"
      );
      characterRef.current.style.setProperty("--number-of-frame", "13");
      characterRef.current.style.setProperty("--image-width", "6500px");
      characterRef.current.style.setProperty("--image-height", "300px");
    }
  }, []);

  return (
    <div className="home-wrapper">
      <div ref={characterRef} className="character single-character" />
    </div>
  );
};

export default Home;
