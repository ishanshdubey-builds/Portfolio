import { useEffect, useRef } from "react"; // import React hooks for lifecycle and referencing DOM elements

function Background() {

  const canvasRef = useRef(null); // create reference to the canvas element so we can draw on it

  useEffect(() => {

    const canvas = canvasRef.current; // get the canvas DOM element
    const ctx = canvas.getContext("2d"); // get 2D drawing context for canvas

    let particles = []; // array to store all particle objects
    const particleCount = 90; // total number of particles in the neural network

    let mouse = { x: null, y: null }; // object storing mouse position
    let scrollOffset = 0; // variable storing page scroll offset

    // function to resize canvas to match browser window
    function resizeCanvas() {
      canvas.width = window.innerWidth; // set canvas width equal to window width
      canvas.height = window.innerHeight; // set canvas height equal to window height
    }

    resizeCanvas(); // run resize function once on component mount

    // update canvas size when browser window changes
    window.addEventListener("resize", resizeCanvas);

    // track mouse movement across screen
    window.addEventListener("mousemove", (e) => {
      mouse.x = e.clientX; // store mouse X coordinate
      mouse.y = e.clientY; // store mouse Y coordinate
    });

    // track scroll movement of the page
    window.addEventListener("scroll", () => {
      scrollOffset = window.scrollY * 0.1; // small scroll multiplier to create parallax effect
    });

    // create particle objects with random positions and velocities
    for (let i = 0; i < particleCount; i++) {

      particles.push({

        x: Math.random() * canvas.width, // random horizontal position
        y: Math.random() * canvas.height, // random vertical position

        vx: (Math.random() - 0.5) * 1.2, // horizontal velocity (movement speed)
        vy: (Math.random() - 0.5) * 1.2, // vertical velocity

        depth: Math.random() * 0.4 + 0.3 // depth value for fake 3D effect (closer particles appear bigger)

      });

    }

    // main animation loop
    function draw() {

      ctx.clearRect(0, 0, canvas.width, canvas.height); // clear previous frame

      // loop through every particle
      for (let i = 0; i < particles.length; i++) {

        let p = particles[i]; // current particle

        // update particle position using velocity and depth multiplier
        p.x += p.vx * p.depth;
        p.y += p.vy * p.depth + scrollOffset * 0.01; // add scroll movement

        // reverse direction when particle hits canvas edges
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        // apply gravity-like attraction toward cursor
        if (mouse.x && mouse.y) {

          let dx = mouse.x - p.x; // horizontal distance to mouse
          let dy = mouse.y - p.y; // vertical distance to mouse

          let dist = Math.sqrt(dx * dx + dy * dy); // calculate distance from cursor

          if (dist < 150) { // if particle is near cursor

            p.x += dx * 0.002; // pull particle slightly toward mouse
            p.y += dy * 0.002;

          }

        }

        // begin drawing particle circle
        ctx.beginPath();
        ctx.arc(p.x, p.y, 2 * p.depth, 0, Math.PI * 2); // radius depends on depth

        // create pulsing glow effect (AI brain style)
        let pulse = Math.sin(Date.now() * 0.002) * 0.5 + 0.5;

        ctx.shadowBlur = 10 + pulse * 10; // dynamic glow intensity
        ctx.shadowColor = "#4fc3f7"; // glow color

        ctx.fillStyle = "#4fc3f7"; // particle color
        ctx.fill(); // draw particle

        // connect particles with nearby particles
        for (let j = i + 1; j < particles.length; j++) {

          let p2 = particles[j]; // second particle

          let dist = Math.hypot(p.x - p2.x, p.y - p2.y); // distance between two particles

          if (dist < 140) { // only connect if particles are close

            ctx.beginPath();
            ctx.moveTo(p.x, p.y); // start line at particle 1
            ctx.lineTo(p2.x, p2.y); // end line at particle 2

            ctx.strokeStyle = "rgba(79,195,247,0.25)"; // semi-transparent connection line
            ctx.stroke();

          }

        }

        // create ripple connection between particles and cursor
        if (mouse.x && mouse.y) {

          let mouseDist = Math.hypot(p.x - mouse.x, p.y - mouse.y); // distance to mouse

          if (mouseDist < 100) {

            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mouse.x, mouse.y);

            ctx.strokeStyle = "rgba(79,195,247,0.4)";
            ctx.stroke();

          }

        }

      }

      requestAnimationFrame(draw); // call animation loop again

    }

    draw(); // start animation

  }, []);

  return (

    <canvas
      ref={canvasRef} // attach React ref to canvas
      style={{
        position: "fixed", // keep canvas fixed behind page
        top: 0,
        left: 0,
        width: "100%", // full width
        height: "100%", // full height
        zIndex: 0 // keep background behind content
      }}
    />

  );

}

export default Background; // export component for use in App.jsx