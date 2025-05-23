import { useRef, useEffect } from "react";

import "./index.scss";

const Home = () => {
  const characterRef = useRef<HTMLDivElement>(null);

  const updateCharacter = ({
    speed,
    imageUrl,
    imageWidth,
    imageHeight,
    numberOfFrame,
  }: {
    speed: number;
    imageUrl: string;
    imageWidth: number;
    imageHeight: number;
    numberOfFrame: number;
  }) => {
    if (characterRef.current) {
      characterRef.current.style.setProperty(
        "--image-height",
        `${imageHeight}px`
      );
      characterRef.current.style.setProperty(
        "--image-width",
        `${imageWidth}px`
      );
      characterRef.current.style.setProperty(
        "--number-of-frame",
        `${numberOfFrame}`
      );
      characterRef.current.style.setProperty(
        "--image-url",
        `url('/images/${imageUrl}')`
      );
      characterRef.current.style.setProperty("--speed", `${speed}s`);
    }
  };

  useEffect(() => {
    updateCharacter({
      speed: 2,
      imageHeight: 80,
      imageWidth: 480,
      numberOfFrame: 8,
      imageUrl: "samara-1.png",
    });
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case "j":
          updateCharacter({
            speed: 1.5,
            imageWidth: 420,
            imageHeight: 100,
            numberOfFrame: 7,
            imageUrl: "samara-2.png",
          });

          break;

        case "d":
          updateCharacter({
            speed: 1,
            imageHeight: 80,
            imageWidth: 360,
            numberOfFrame: 6,
            imageUrl: "samara-3.png",
          });

          break;

        default:
          updateCharacter({
            speed: 2,
            imageHeight: 80,
            imageWidth: 480,
            numberOfFrame: 8,
            imageUrl: "samara-1.png",
          });

          break;
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="home-wrapper">
      <div ref={characterRef} className={`character animated`} />
    </div>
  );
};

export default Home;
