import "./App.css"
import React,{useState,useEffect} from "react";
function Carousel() {
  let Image1 = require('./Photos/img-1.jpg');
  let Image2=require('./Photos/img-2.jpg');
  let Image3=require('./Photos/pic-3.jpg');
  let Image4 = require('./Photos/img-4.jpg');
  let arr=[0,1,2,3];
  let [c,setC] = useState(0);
  useEffect(()=>{
    const interval = setInterval(() =>{
        if(c===0||c===1||c===2)
        {
          setC(++c);
        }
        else
        {
          setC(0);
        }
    },5000)
    return () => clearInterval(interval);
  },[c]);
  const handleNext = () =>{
    if(c===0||c===1||c===2)
    {
      setC(++c);
    }
    else{
      setC(0);
    }
  }
  const handlePrev = () =>
  {
    if(c===1||c===2||c===3)
    {
      setC(--c);
    }
    else{
      setC(3);
    }
  }
  if(c===0)
  {
    
    return(
      <div className="center-screen">
        <button onClick={handlePrev} className="l-bt">go back</button>
        <img src={Image1} alt="pic-1"/>
        <button onClick={handleNext} className="r-bt">next</button>
      </div>)
  }
  if(c===1)
  {
    return (<div className="center-screen">
      <button onClick={handlePrev} className="l-bt">go back</button>
      <img src={Image2} alt="pic-2"/>
      <button onClick={handleNext} className="r-bt">next</button>
    </div>)
  }
  if(c===2)
  {
    return(<div className="center-screen">
      <button onClick={handlePrev} className="l-bt">go back</button>
      <img src={Image3} alt="pic-3"/>
      <button onClick={handleNext} className="=r-bt">next</button>`
    </div>)
  }
  if(c===3)
  {
    return(
    <div className="center-screen">
      <button onClick={handlePrev} className="l-bt">go back</button>
      <img src={Image4} alt="pic-4"/>
      <button onClick={handleNext} className="=r-bt">next</button>
    </div>)
  }
}
export default Carousel;
