import React from 'react';
import HeroImage from '../assets/HeroImage.jpg';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { TypeAnimation } from 'react-type-animation';
import {useState } from 'react';

import { Link as ScrollLink } from 'react-scroll';
const Home = () => {
  const [nav, setNav] = useState(false);
  const blueStyle = {
    color: '#02ecff',
  
    display: 'inline-block'
  };
  const links = [
    {
      id: 1,
      link: 'portfolio',
    },

  ];


  const closeNav = () => {
    setNav(false);
  };

  return (
    <div name="home" className="w-full bg-gradient-to-b from-black via-black to-gray-800 mt-3">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center  h-full px-4 md:flex-row  justify-between">
        <div className="flex flex-col justify-center h-full pr-6 text-justify w-full ">
          <h2 className="text-xl sm:text-5xl font-bold text-white ">
            <span style={{ color: '#fff' }}>I'm</span> a {' '}
            <TypeAnimation
              sequence={[
                'Frontend Dev',
                1000,
                'App Dev',
                1000,
                'UI/UX Dev',
                1000,
                'AI/ML',
                1000
              ]}
              wrapper="span"
              speed={50}
              style={blueStyle}
              repeat={Infinity}
            />
          </h2>
          <p className="text-gray-500 py-4 max-w text-2xl mr-3">
            Hello, I'm Harrish Arun, a B.Tech Computer Science Engineering student at SRM Institute of Science and Technology. My academic journey has led me to explore diverse areas such as Development, Designing, Leadership, and Management. I specialize in App and Web development, UI/UX design, and AI/ML.
          </p>
         
           
            {links.map(({ id, link }) => (  <div><button  className="group text-white w-fit px-6 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to to-blue-500 cursor-pointer">
           
              <ScrollLink
                to={link}
                smooth={true}
                duration={500}
                onClick={closeNav}
              >
              Projects
              </ScrollLink>
              <span className="group-hover:rotate-90 duration-300"><MdOutlineKeyboardArrowRight size={25} /></span>
            </button></div>
          ))} 
          
        </div>
        <div className=''>
          <img  src={HeroImage} alt="my profile" className="rounded-2xl" />
        </div>
      </div>
    </div>
  );
};

export default Home;
