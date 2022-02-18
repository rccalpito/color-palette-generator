import React, { useEffect, useRef, useState } from 'react';
import './CanvasDisplay.css';
import profilePic from './myProfile.jpg';
import CanvasAnalysis from './CanvasAnalysis'



const CanvasDisplay = () => {
  const [typedArray, setTypedArray] = useState([])
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    var img = new Image();
    // imported a literal profile pic, will want to make this more dynamic in the future
    // need to pass a picture as a prop, which was not working for me earlier. 
    img.src = profilePic
    // Arrow functions don't work here...?
    img.onload = function () {
      // interesting.. profile picture does not dynamically change when changing code. 
      // Probably because when an image is loaded into a reference, and information is deleted from the code, there is no onLoad or event listener function that causes a redraw of the context. 
      canvas.width = this.naturalWidth
      canvas.height = this.naturalHeight
      context.drawImage(img, 0, 0)
      // var myImageData = context.getImageData(0, 0, canvas.width, canvas.height)
      setTypedArray(context.getImageData(0, 0, canvas.width, canvas.height))
      // printout of context.getImageData for myProfile.jpg returns a value of 478864
      // This value is the size of the picture (346x346) x 4 values per pixel
      // console.log("getImageData: ", myImageData.data.length)
    }
    var pixelData = canvas.getContext('2d').getImageData(100, 101, 1, 1).data;
    console.log(pixelData)
  }, [])


  return (
    <>
      <canvas className="canvas1" ref={canvasRef} />
      <CanvasAnalysis typedArray={typedArray} />

    </>
  )
}
export default CanvasDisplay

