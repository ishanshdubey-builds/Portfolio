import { useEffect, useRef } from "react";

function CursorAura(){

  const auraRef = useRef(null);

  useEffect(()=>{

    window.addEventListener("mousemove",(e)=>{

      auraRef.current.style.left = e.clientX + "px";
      auraRef.current.style.top = e.clientY + "px";

    });

  },[]);

  return(
    <div
      ref={auraRef}
      style={{
        position:"fixed",
        width:"120px",
        height:"120px",
        borderRadius:"50%",
        pointerEvents:"none",
        transform:"translate(-50%,-50%)",
        background:"radial-gradient(circle, rgba(79,195,247,0.25), transparent)",
        zIndex:9999
      }}
    />
  )

}

export default CursorAura;