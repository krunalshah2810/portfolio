import React,{ useRef } from 'react';

function About() {


  const handleMouseMove = (e) => {
    const image = e.currentTarget;
    const rect = image.getBoundingClientRect();
    const x = e.clientX - rect.left; // X coordinate inside the element
    const y = e.clientY - rect.top; // Y coordinate inside the element
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -15; // Adjust rotation intensity
    const rotateY = ((x - centerX) / centerX) * 15;

    image.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseLeave = (e) => {
    const image = e.currentTarget; // Get the specific image being hovered
    image.style.transform = 'rotateX(0deg) rotateY(0deg)'; // Reset tilt
  };

  return (
    <div className='introduction'>
      <h5 className='aboutme'>ABOUT ME</h5>
      <h1 className='smallintro'>Introduction.</h1>
      <div className='details'>
        <p>Hello, I'm Krunal, a dedicated Full Stack Engineer at CloudData LLC, thriving in the dynamic startup environment. My journey here has been incredibly rewarding, allowing me to take ownership of projects and experience rapid professional growth through continuous learning.</p>
        <p>Driven by a passion for problem-solving and Leetcoding, I've achieved a Guardian badge (2187 rating) and represented my college at the ICPC 2023 Regionals. With over 550 days of consistent practice on LeetCode, I'm deeply committed to refining my skills and optimizing solutions.</p>
        <p>Lets Build and explore together</p>
      </div>

      <div className='threeDimages'>
        <img src='/assets/images/fullstack.png' alt="FullStack"  onMouseMove= {handleMouseMove} onMouseLeave= {handleMouseLeave}/>
        <img src='/assets/images/frontendimage.jpg' alt="FullStack" onMouseMove= {handleMouseMove} onMouseLeave= {handleMouseLeave}/>
        <img src='/assets/images/softwareimage.png' alt="FullStack"  onMouseMove= {handleMouseMove} onMouseLeave= {handleMouseLeave}/>
        <img src='/assets/images/pythonimage.jpg' alt="FullStack"  onMouseMove= {handleMouseMove} onMouseLeave= {handleMouseLeave}/>
      </div>
    </div>
  );
}

export default About;
