import React, { useEffect, useRef, useState } from "react";
import "./CanvasDisplay.css";
import profilePic from "./myProfile.jpg";
import CanvasAnalysis from "./CanvasAnalysis";

const CanvasDisplay = (props) => {
  const canvasRef = useRef(null);
  const [myImageData, setMyImageData] = useState();
  const [bwImageData, setBwImageData] = useState();
  // const [img, setImg] = useState(new Image());
  const img = new Image();

  const [greyFlag, setGreyFlag] = useState(false);
  // const [ctx, setCtx] = useState();

  useEffect(() => {
    const ctx = canvasRef.current.getContext("2d");
    // img.src = profilePic;
    img.src =
      "https://images.unsplash.com/photo-1648160070241-af1ad4860995?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80";
    img.onload = function () {
      canvasRef.current.width = this.naturalWidth;
      canvasRef.current.height = this.naturalHeight;
      ctx.drawImage(img, 0, 0);
      setMyImageData(
        ctx.getImageData(
          0,
          0,
          canvasRef.current.width,
          canvasRef.current.height
        )
      );
      console.log("img data:", myImageData);
      setBwImageData(
        ctx.getImageData(
          0,
          0,
          canvasRef.current.width,
          canvasRef.current.height
        )
      );
    };
  }, []);

  const greyScale = () => {
    const ctx = canvasRef.current.getContext("2d");
    if (greyFlag === false) {
      let arr = bwImageData.data;
      for (let i = 0; i < arr.length; i = i + 4) {
        let ttl = arr[i] + arr[i + 1] + arr[i + 2];
        let avg = parseInt(ttl / 3);
        arr[i] = avg;
        arr[i + 1] = avg;
        arr[i + 2] = avg;
      }
      ctx.putImageData(bwImageData, 0, 0);
      setBwImageData(
        ctx.getImageData(
          0,
          0,
          canvasRef.current.width,
          canvasRef.current.height
        )
      );
      setGreyFlag(true);
    } else {
      ctx.putImageData(myImageData, 0, 0);
      setGreyFlag(false);
    }
  };

  const redChannel = () => {
    const ctx = canvasRef.current.getContext("2d");
    if (greyFlag === false) {
      let arr = bwImageData.data;
      for (let i = 0; i < arr.length; i = i + 4) {
        arr[i + 1] = 0;
        arr[i + 2] = 0;
      }
      ctx.putImageData(bwImageData, 0, 0);
      setBwImageData(
        ctx.getImageData(
          0,
          0,
          canvasRef.current.width,
          canvasRef.current.height
        )
      );
      setGreyFlag(true);
    } else {
      ctx.putImageData(myImageData, 0, 0);
      setBwImageData(
        ctx.getImageData(
          0,
          0,
          canvasRef.current.width,
          canvasRef.current.height
        )
      );
      setGreyFlag(false);
    }
  };

  const greenChannel = () => {
    const ctx = canvasRef.current.getContext("2d");
    if (greyFlag === false) {
      let arr = bwImageData.data;
      for (let i = 0; i < arr.length; i = i + 4) {
        arr[i] = 0;
        arr[i + 2] = 0;
      }
      ctx.putImageData(bwImageData, 0, 0);
      setBwImageData(
        ctx.getImageData(
          0,
          0,
          canvasRef.current.width,
          canvasRef.current.height
        )
      );
      setGreyFlag(true);
    } else {
      ctx.putImageData(myImageData, 0, 0);
      setGreyFlag(false);
      setBwImageData(
        ctx.getImageData(
          0,
          0,
          canvasRef.current.width,
          canvasRef.current.height
        )
      );
    }
  };

  const blueChannel = () => {
    const ctx = canvasRef.current.getContext("2d");
    if (greyFlag === false) {
      let arr = bwImageData.data;
      for (let i = 0; i < arr.length; i = i + 4) {
        arr[i] = 0;
        arr[i + 1] = 0;
      }
      ctx.putImageData(bwImageData, 0, 0);
      setBwImageData(
        ctx.getImageData(
          0,
          0,
          canvasRef.current.width,
          canvasRef.current.height
        )
      );
      // console.log("blue: ", bwImageData);
      setGreyFlag(true);
    } else {
      ctx.putImageData(myImageData, 0, 0);
      setGreyFlag(false);
      setBwImageData(
        ctx.getImageData(
          0,
          0,
          canvasRef.current.width,
          canvasRef.current.height
        )
      );
    }
  };

  return (
    <>
      <canvas className="canvas1" ref={canvasRef} />
      {/* <CanvasAnalysis imgData={myImageData} /> */}
      <button onClick={() => greyScale()}>GreyScale</button>
      <button onClick={() => redChannel()}>Red Channel</button>
      <button onClick={() => greenChannel()}>Green Channel</button>
      <button onClick={() => blueChannel()}>Blue Channel</button>
    </>
  );
};
export default CanvasDisplay;
