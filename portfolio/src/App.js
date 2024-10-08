import './App.css';
import images from './Images';
import { IconMail } from '@tabler/icons-react';
import { IconBrandLinkedin } from '@tabler/icons-react';
import { IconBrandGithub } from '@tabler/icons-react';
import { IconCaretDown } from '@tabler/icons-react';

function App() {

  const scrollToAbout = () => {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
  };


  return (
    <div className="App">

      <header className="App-header">

        <h1>I'm Kristaps Polis.</h1>
        <div className='social-container'>
          <a href="https://github.com/kp2129" target="_blank" rel="noopener noreferrer">
            <IconBrandGithub />
          </a>
          <a href="https://www.linkedin.com/in/kristaps-polis-10064a299/" target="_blank" rel="noopener noreferrer">
            <IconBrandLinkedin />
          </a>

        </div>
        <button className="scroll-button" onClick={scrollToAbout}><IconCaretDown />
        </button>

        <div>

        </div>

      </header>

      <main className="App-main">
        <section className="About-section" id='about'>
          <div className='about-container'>

            <div className='about-me'>
              <div>
                <h2>About me</h2>
              </div>
              <div className='text-about'>

                <img src={images.me} alt='Kristaps Polis' />
                <p>I am a web developer with a solid foundation in both front-end and back-end technologies. I have been programming for 4 years and have expertise in Laravel and React, allowing me to create functional solutions on both the server and client sides. I began my programming journey with PHP, HTML, JavaScript, MySQL, and CSS. I also use Tailwind CSS and Bootstrap to design modern and aesthetically pleasing websites.</p>

              </div>

            </div>
          </div>
        </section>

        <section className="Skills-section">
          <div>
            <h2>Skills</h2>
          </div>
          <div className="skills-container">
            <div className="image-container">
              <img src={images.reactLogo} alt="React logo" />
              <div className="overlay">React</div>
            </div>
            <div className="image-container">
              <img src={images.laravelLogo} alt="Laravel logo" />
              <div className="overlay">Laravel</div>
            </div>
            <div className="image-container">
              <img src={images.viteLogo} alt="Vite logo" />
              <div className="overlay">Vite</div>
            </div>
            <div className="image-container">
              <img src={images.tailwindLogo} alt="Tailwind logo" />
              <div className="overlay">Tailwind</div>
            </div>
            <div className="image-container">
              <img src={images.phpLogo} alt="PHP logo" />
              <div className="overlay">PHP</div>
            </div>
            <div className="image-container">
              <img src={images.mysqlLogo} alt="MySQL logo" />
              <div className="overlay">MySQL</div>
            </div>
            <div className="image-container">
              <img src={images.jsLogo} alt="JS logo" />
              <div className="overlay">JavaScript</div>
            </div>
            <div className="image-container">
              <img src={images.jqueryLogo} alt="JQuery logo" />
              <div className="overlay">jQuery</div>
            </div>
            <div className="image-container">
              <img src={images.inertiaLogo} alt="Inertia logo" />
              <div className="overlay">Inertia</div>
            </div>
            <div className="image-container">
              <img src={images.htmlLogo} alt="HTML logo" />
              <div className="overlay">HTML</div>
            </div>
            <div className="image-container">
              <img src={images.firebaseLogo} alt="Firebase logo" />
              <div className="overlay">Firebase</div>
            </div>
            <div className="image-container">
              <img src={images.filamentLogo} alt="Filament logo" />
              <div className="overlay">Filament</div>
            </div>
            <div className="image-container">
              <img src={images.cssLogo} alt="CSS logo" />
              <div className="overlay">CSS</div>
            </div>
          </div>
        </section>

        <section className="Education-section">
          <div>
            <h2>Education</h2>
          </div>
          <div className='educations'>
            <div>
              <h3>Vidzeme Technology and Design Vocational School</h3>
              <p>Programming technician 01/09/2021-On going</p>
            </div>
            <div>
              <h3>Vecpiebalga secondary school</h3>
              <p>01/09/2018 – 12/06/2021</p>
            </div>
            <div>
              <h3>Inešu primary school</h3>
              <p>01/09/2009 – 31/05/2018</p>
            </div>
          </div>
        </section>

        <section className="projects-section">
          <div>
            <h2>Projects</h2>
          </div>
          <div className="projects-grid">
            {/* <div className="project-card">
              <div className='project-img'>
                <img src={images.eduscan} alt="EduSan Screenshot" loading="lazy" />
              </div>
              <div className='project-about'>
                <h3>EduScan</h3>
                <p>Mobile app created for sshool to allow student check in scholl</p>
              </div>
            </div> */}

            <div className="project-card">
              <div className='project-img'>
                <img src={images.knights} alt="(K)Night Runner Game Screenshot" loading="lazy" />
              </div>
              <div className='project-about'>
                <h3>(K)Night Runner</h3>
                <p>"(K)night Runner" is a 2D platformer game built using the Godot engine, where players control a brave knight on a thrilling adventure. The knight constantly runs forward, and players must guide him by timing jumps to avoid various obstacles, such as pits, spikes, and enemy creatures.
                  The game's focus is on precision and reflexes, challenging players to navigate increasingly difficult terrain while collecting power-ups and coins along the way.
                  The simple yet engaging mechanics, coupled with a medieval setting, make "(K)night Runner" an exciting, fast-paced challenge.</p>
              </div>
            </div>

            <div className="project-card">
              <div className='project-img'>
                <img src={images.rucka} alt="Rucka Manor Website Screenshot" loading="lazy" />
              </div>
              <div className='project-about'>
                <h3>Rucka Manor Website</h3>
                <p>Myself and five other contributors have created a website for Rucka Manor Park, the geographical heart of Cesis. It is safe to say that since 1577, the most beautiful monument of our antiquity has been proudly located at the very center of Cesis.</p>
                <div>
                  <a href='https://ruckasmuiza.lv'>Visit the site!</a>
                </div>
              </div>

            </div>

            <div className="project-card">
              <div className='project-img'>
                <img src={images.news} alt="News Website Screenshot" loading="lazy" />
              </div>
              <div className='project-about'>
                <h3>News Website</h3>
                <p>The News website project was a team experience where we worked together to create our vision of how a modern news platform should look. We aimed for a clean, user-friendly design that puts content at the forefront while ensuring easy navigation. It was a collaborative effort where we combined creativity with practicality to shape what we believe a news website should be</p>
                <div>
                  <a href='https://github.com/kp2129/news'>Look at the code!</a>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className='project-img'>
                <img src={images.todomist} alt="Jira Replacement Screenshot" loading="lazy" />
              </div>
              <div className='project-about'>
                <h3>Jira Replacement</h3>
                <p>Todomist was an ambitious project where, as a team, we set out to create a Jira alternative for task and issue tracking within a short time frame. Our goal was to build a simple yet effective tool that streamlines project management and helps teams stay organized.</p>
                <div>
                  <a href='https://github.com/kp2129/todomist'>Look at the code!</a>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className='project-img'>
                <img src={images.autoscam} alt="Online Car Shop Screenshot" loading="lazy" />
              </div>
              <div className='project-about'>
                <h3>Online Car Shop</h3>
                <p>Autoscam was my first team project, and it was an eye-opening experience. It showed me just how efficient work can be when you're part of a great team. The collaboration, communication, and shared vision we had made the project flow smoothly and helped us overcome challenges quickly. It was an excellent example of how a team with the right skills and mindset can achieve much more together than as individuals</p>
                <div>
                  <a href='https://github.com/TotoalNormie/autoscam'>Look at the code!</a>
                </div>
              </div>
            </div>
          </div>
        </section>


        <section className="App-section feedback-section">
          <div className='feedback-title'>
            <h2>Feedback</h2>
          </div>
          <div className='feedback'>
            <div className='feedback-box'>
              <div className='feedback-name'>
                <div className='perosons-info'>
                  <img src='https://i0.wp.com/majascesis.lv/wp-content/uploads/2024/02/skolotajs-jekabs-edited.jpeg?resize=479%2C852&ssl=1' />
                  <div>
                    <a href='https://www.linkedin.com/in/jekabs-krigerts/'><p>Jēkabs Krīgerts</p></a>
                    <div>
                      19/09/2024
                    </div>
                  </div>
                </div>
              </div>
              <div className='feedback-text'><p>Kristaps is a highly supportive person with great empathy. He not only manages his own work efficiently but has also demonstrated the ability to lead his classmates in challenging situations. He consistently completes tasks with precision and on time, which has enabled him to develop a strong knowledge base and skill set in React and Laravel.</p></div>
            </div>
            <div className='feedback-box'>
              <div className='feedback-name'>
                <div className='perosons-info'>
                  <img src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png' />
                  <div>
                    <a href='https://www.linkedin.com/in/jekabs-krigerts/'><p>Andris Lapsiņš</p></a>
                    <div>
                      21/09/2024
                    </div>
                  </div>
                </div>
              </div>
              <div className='feedback-text'><p>Kristaps is a talented and motivated student who quickly learned programming skills and was able to independently solve complex tasks. He is responsible, works precisely and cooperates effectively in a team.</p></div>
            </div>
          </div>
        </section>

        <section className="Contacts-section" id='contacts'>
          <h2>Contacts</h2>
          <div className='my-contacts'>

            <div className='contacts'>
              <IconMail />
              <p><a href="mailto:kristapspolis0@gmail.com">kristapspolis0@gmail.com</a></p>
            </div>
            <div className='contacts'>
              <IconBrandLinkedin />
              <p> <a href="https://www.linkedin.com/in/kristaps-polis-10064a299/"> Kristaps Polis</a></p>
            </div>
            <div className='contacts'>
              <IconBrandGithub />
              <p> <a href="https://github.com/kp2129">KP2129</a></p>
            </div>
          </div>

        </section>
      </main>


    </div>
  );
}

export default App;
