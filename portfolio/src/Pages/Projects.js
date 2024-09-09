import React from 'react';
import Autoscam from "../logos/autoscam.png";
import Blogs from "../logos/blogs.png";
import Runner from "../logos/knight_runner.png";
import Rucka from "../logos/rucka.png";


const Projects = () => {
  return (
    <div className="projects-container">
      <div className="project odd">
        <div className="text">
          <h2>Autoscam</h2>
          <p>Autoscam was my first team-driven project with a clear and structured approach. We used a planned methodology to set goals, break down tasks, and adhere to deadlines. As part of the team, I contributed to both the development and design phases, ensuring that each feature aligned with the overall project objectives. This experience helped me understand the importance of coordination, agile planning, and teamwork in delivering a product with real-world impact
          </p>
        </div>
        <img src={Autoscam} alt="Autoscam" loading="lazy" />
      </div>
      <div className="project even">
        <img src={Blogs} alt="Blogs" loading="lazy" />
        <div className="text">
          <h2>Blog</h2>
          <p>The blog project, my first, includes several key features: the ability to edit posts, a comment section for user interaction, individual user profiles, a "like" system for feedback, and a view count to track post popularity. These features make it a comprehensive and interactive platform for users to engage with content.
          </p>
        </div>
      </div>
      <div className="project odd">
        <div className="text">
          <h2>(K)Night runner</h2>
          <p>"(K)night Runner" is a 2D platformer game built using the Godot engine, where players control a brave knight on a thrilling adventure. The knight constantly runs forward, and players must guide him by timing jumps to avoid various obstacles, such as pits, spikes, and enemy creatures. The game's focus is on precision and reflexes, challenging players to navigate increasingly difficult terrain while collecting power-ups and coins along the way. The simple yet engaging mechanics, coupled with a medieval setting, make "(K)night Runner" an exciting, fast-paced challenge.
          </p>
        </div>
        <img src={Runner} alt="(k)night runner" loading="lazy" />
      </div>
      <div className="project even">
        <img src={Rucka} alt="Ruckas muiža" loading="lazy" />
        <div className="text">
          <h2>Ruckas muiža</h2>
          <p>
          This is my first collaborative project designed for real-world, daily usage. I contributed to one of the initial design phases and developed the CRUD (Create, Read, Update, Delete) system for the gallery feature. The project was managed using Jira Scrum for task planning and setting deadlines, and I actively participated in real team meetings to ensure seamless collaboration and progress.          </p>
        </div>

      </div>
    </div>
  );
};

export default Projects;
