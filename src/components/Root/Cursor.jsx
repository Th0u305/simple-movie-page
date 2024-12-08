import AnimatedCursor from "react-animated-cursor";
import { useState, useEffect } from "react";
import "flyonui/flyonui"

const CursorComponent = () => {
  const [showCursor, setShowCursor] = useState(false);

  useEffect(() => {
    const isMouse = window.matchMedia("(pointer: fine)").matches;
    const isLargeDevice = window.innerWidth >= 1000;

    if (isMouse && isLargeDevice) {
      setShowCursor(true); 
    } else {
      setShowCursor(false); 
    }
  }, []);

  return showCursor ? (
            <AnimatedCursor
        innerSize={8}
        outerSize={35}
        innerScale={1}
        outerScale={2}
        outerAlpha={0}
        hasBlendMode={true}
        innerStyle={{
          zIndex : 4000,
          backgroundColor: "var(--cursor-color)",
        }}
        outerStyle={{
          zIndex : 4000,
          border: "3px solid var(--cursor-color)",
        }}
      />
  ) : null;
};

export default CursorComponent;
