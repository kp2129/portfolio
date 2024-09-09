import React from 'react';
import CssLogo from "../logos/css.png";
import HTML from "../logos/html.png";
import PHP from "../logos/php.png";
import ReactLogo from "../logos/react.png";
import JavaScript from "../logos/JavaScript.png";
import laravel from "../logos/laravel.png";
import tailwind from "../logos/tailwind.png";
import inertiajs from "../logos/inertiajs.png";
import playwright from "../logos/playwright.png";
import phpunit from "../logos/phpunit.webp";


import { ReactComponent as Jquery } from "../logos/jquery.svg";
import { ReactComponent as Mysql } from "../logos/mysql.svg";

const Blogs = () => {
  return (
    <div className='myinfo'>
      <h1>Kristaps Polis</h1>
      <h2>Full Stack Developer</h2>
      <div className='details'>
        <div className='about'>
          <p>I am a skilled full-stack programmer with extensive experience in developing web applications using modern technologies. I specialize in JavaScript, React, Node.js, and have a strong understanding of both front-end and back-end development.</p>
          <p>I am passionate about coding and always eager to learn new technologies to keep up with the rapidly changing tech industry. My goal is to build efficient, scalable, and user-friendly applications that provide great value to users.</p>
        </div>
        <div className='skills'>
          <h3>Skills</h3>
          <div className='technologies'>
          <div>
            <img src={HTML} className='skill-logo' alt='HTML Logo' /></div>
            <div><img src={CssLogo} className='skill-logo' alt='CSS Logo' /></div>
            <div><Jquery className='skill-logo' alt='jQuery Logo' /></div>
            <div><Mysql className='skill-logo' alt='MySQL Logo' /></div>
            <div><img src={JavaScript} className='skill-logo' alt='Javascript Logo' /></div>
            <div><img src={ReactLogo} className='skill-logo' alt='React Logo' /></div>
            <div><img src={PHP} className='skill-logo' alt='PHP Logo' /></div>
            <div><img src={laravel} className='skill-logo' alt='laravel Logo' /></div>
            <div><img src={tailwind} className='skill-logo' alt='tailwind Logo' /></div>
            <div><img src={inertiajs} className='skill-logo' alt='inertiajs Logo' /></div>
            <div><img src={playwright} className='skill-logo' alt='playwright Logo' /></div>
            <div><img src={phpunit} className='skill-logo' alt='phpunit Logo' /></div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
