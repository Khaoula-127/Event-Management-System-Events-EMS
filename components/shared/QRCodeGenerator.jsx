import React, { useEffect, useRef } from "react";
import QRCode from "qrcode";

const QRCodeGenerator = ({
  text,
  width = 200,
  margin = 4,
  color = { dark: "#000000", light: "#ffffff" },
}) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (canvasRef.current && text) {
      QRCode.toCanvas(
        canvasRef.current,
        text,
        {
          width,
          margin,
          color,
        },
        (error) => {
          if (error) console.error(error);
        }
      );
    }
  }, [text, width, margin, color]);

  return <canvas ref={canvasRef} />;
};

export default QRCodeGenerator;
