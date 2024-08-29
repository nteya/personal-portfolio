import React from 'react';
import './Home.css'; // Importing the CSS file for Home component

const Home = () => {
  return (
    <div className="home">
      <div className="hero">
        <h1>Welcome to My Portfolio</h1>
        <p>Hello, I'm Ntsika Nteya, a passionate self-taught developer.</p>
        <p>I love coding with JavaScript, HTML, CSS, and React!</p>
      </div>
      <div className="about">
        <h2>About Me</h2>
        <p>
          I am a South African web developer who started coding out of curiosity and quickly fell in love with the process of building and creating. My journey began with learning the basics of web development using HTML, CSS, and JavaScript, and I have since expanded my skill set to include modern frameworks like React.
        </p>
        <p>
          Currently, I am focused on building dynamic and responsive web applications. I enjoy experimenting with new technologies and constantly learning new things. My main goal is to become a full-stack developer, mastering both front-end and back-end technologies.
        </p>
        <p>
          In addition to coding, I am fascinated by problem-solving and enjoy working on projects that challenge me to think creatively. I am looking for a junior developer position where I can continue to learn and grow, while contributing to exciting projects.
        </p>
      </div>
    </div>
  );
};

export default Home;



