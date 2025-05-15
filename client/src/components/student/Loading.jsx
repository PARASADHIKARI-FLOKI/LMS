import React, { useEffect } from "react";
import { useParams,useNavigate } from "react-router-dom";

const Loading = () => {

  const {path}=useParams()
  const navigate=useNavigate()

  useEffect(()=>{
    if(path){
      const timer= setTimeout(()=>{
        navigate(`/${path}`)
      },5000)
      return()=>clearTimeout(timer)
    }
  },[])

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex space-x-2">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="w-3 h-3 bg-blue-500 rounded-full animate-bounce"
            style={{ animationDelay: `${i * 0.2}s` }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Loading;