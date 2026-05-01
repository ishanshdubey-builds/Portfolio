import { useEffect, useRef } from "react"; // React hooks
import * as THREE from "three"; // import Three.js

function ThreeBackground(){

  const mountRef = useRef(null); // reference to mount WebGL canvas

  useEffect(()=>{

    const scene = new THREE.Scene(); // create 3D scene

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    ); // camera to view scene

    const renderer = new THREE.WebGLRenderer({ alpha:true }); // renderer with transparent background
    renderer.setSize(window.innerWidth, window.innerHeight); // set renderer size

    mountRef.current.appendChild(renderer.domElement); // add canvas to DOM

    const particles = []; // store particle meshes
    const particleCount = 150; // number of nodes

    const geometry = new THREE.SphereGeometry(0.05,8,8); // small sphere
    const material = new THREE.MeshBasicMaterial({ color:0x4fc3f7 }); // particle color

    for(let i=0;i<particleCount;i++){

      const mesh = new THREE.Mesh(geometry,material); // create particle mesh

      mesh.position.x = (Math.random()-0.5)*10; // random position
      mesh.position.y = (Math.random()-0.5)*10;
      mesh.position.z = (Math.random()-0.5)*10;

      scene.add(mesh); // add particle to scene
      particles.push(mesh); // store particle

    }

    camera.position.z = 5; // move camera back

    function animate(){

      requestAnimationFrame(animate); // animation loop

      particles.forEach(p=>{

        p.position.x += (Math.random()-0.5)*0.002; // small movement
        p.position.y += (Math.random()-0.5)*0.002;

      });

      scene.rotation.y += 0.0005; // slow scene rotation

      renderer.render(scene,camera); // render frame

    }

    animate();

  },[]);

  return(
    <div
      ref={mountRef}
      style={{
        position:"fixed",
        top:0,
        left:0,
        width:"100%",
        height:"100%",
        zIndex:0
      }}
    />
  )

}

export default ThreeBackground;