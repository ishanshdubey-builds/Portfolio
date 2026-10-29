// creating a constant variable called "projects"
// this will store an array (list) of project objects

const projects = [

  // first project object
  {
    id: 1,

    title: "OculusAI",

    // short description shown on the project card
    // description: "AI tool that converts long videos to shorts",

    // full description shown on the project detail page
    description: `OculusAI is an AI-powered video processing platform designed to automatically convert long-form video content into engaging short-form clips suitable for platforms like YouTube Shorts, Instagram Reels, and TikTok.

The system allows users to upload long video files through a web interface. Once the video is uploaded, the backend processes the video using advanced AI and multimedia processing tools. Speech recognition models transcribe the audio content so the system can analyze spoken words and detect meaningful segments.

After identifying key moments, the system automatically generates short clips by cutting the original video at the correct timestamps. These clips are optimized for vertical viewing formats and exported for social media platforms.

This project demonstrates integration of machine learning with full-stack web development and video processing.

Key Features:
• Upload long videos
• AI speech-to-text transcription
• Automatic clip generation
• Export short-form videos

Technologies Used:
React, Next.js, TypeScript, Python, FastAPI, FFmpeg, Whisper AI, PyTorch`,

    image: "/images/ai.jpg",

    github: "",

    demo: "",
  },


  // second project object
  {
    id: 2,

    title: "Doctor Appointment System",

    // description: "Healthcare appointment management system",

    description: `The Doctor Appointment Management System is a full-stack healthcare web application designed to simplify the process of booking medical appointments.

Patients can register, log in, view available doctors, and schedule appointments based on available time slots. Doctors and administrators can manage schedules and patient records through a dashboard.

This project demonstrates building a real-world healthcare application using a full-stack architecture.

Key Features:
• Patient registration and login
• Doctor listing by specialization
• Appointment booking system
• Patient medical records
• Admin and doctor dashboards

Technologies Used:
React.js, Java, REST APIs, MySQL, HTML, CSS`,

    image: "/images/doctor.jpg",

    github: "",

    demo: "",
  },


  // third project object
  {
    id: 3,

    title: "Horror Escape Game",

    // description: "3D horror puzzle escape game",

    description: `Horror Escape Game is a 3D survival puzzle game where the player explores a haunted environment and solves puzzles to escape.

Players must navigate through dark environments, find hidden objects, unlock doors, and solve logic puzzles while experiencing suspenseful sound effects and atmospheric lighting.

The goal is to create an immersive horror experience while demonstrating game development and interactive design skills.

Key Features:
• First-person player movement
• Puzzle-solving mechanics
• Interactive environment
• Horror atmosphere with sound effects
• Multiple escape challenges

Technologies Used:
Unreal Engine / Unity, C++ or C#, 3D environment design tools`,

    image: "/images/horror.jpg",

    github: "",

    demo: "",
  }

];

export default projects;