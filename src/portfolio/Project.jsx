import React, { useEffect } from 'react'
import AOS from 'aos'
import age from '../Image/age.png'
import tic from '../Image/tic.png'
import netflix from '../Image/netflix.png'
import jupiter from '../Image/jupiter.png'
import hostel from '../Image/hostel.png'
import mantra from '../Image/mantraShop.png'
import jinle from '../Image/jingle.png'
import Caratglitz from '../Image/caratglitz.png'

const Project = (props) => {
  useEffect(() => {
    AOS.init({
      duration: 1000
    });
  }, []);
  let live = "LIVE CODE"

  const mainpros = [
    {
      srcname: Caratglitz,
      proroot: 'https://caratglitzwebsite.netlify.app/',
      conatnt: "“🎬 Excited to share my latest project for Namrata Universal - CaratGlitz is a sophisticated e-commerce platform designed for jewelry enthusiasts, showcasing a wide range of exquisite jewelry collections. Built using React.js, this project aims to provide a seamless shopping experience with a modern user interface.”"

    },
    {
      srcname: jinle,
      proroot: 'https://jingleholiday.netlify.app/',
      conatnt: " I specialize in developing dynamic and user-centric web solutions using HTML and CSS. The platform offers comprehensive travel services, including flights, tours, and hotel bookings, with a focus on providing the best price deals. My work ensures seamless navigation, engaging visuals, and an optimized user experience, facilitating easy access to popular domestic and international travel destinations."

    },
    {
      srcname: hostel,
      proroot: 'https://hostel-hop.netlify.app/',
      conatnt: " CaratGlitz is a sophisticated e-commerce platform designed for jewelry enthusiasts, showcasing a wide range of exquisite jewelry collections. Built using React.js, this project aims to provide a seamless shopping experience with a modern user interface."

    },
    {
      srcname: mantra,
      proroot: 'https://mantrashoping.netlify.app/',
      conatnt: "As the developer of the Mantra Shopping website, I utilized React.js to create a robust and dynamic e-commerce platform. The site offers an intuitive shopping experience with clear navigation, detailed product descriptions, and a seamless checkout process. My focus on responsive design ensures optimal performance on all devices, enhancing user engagement and satisfaction."

    },
    {
      srcname: jupiter,
      proroot: 'https://rohitraj-put.github.io/Jupiter-animation/',
      conatnt: "“🌌 Just created a mesmerizing animation of Jupiter complete with rotating craters using HTML & CSS! This project allowed me to explore keyframe animations and improve my design skills. Check out the spinning giant on my portfolio! #WebDevelopment #Animation #Jupiter”",
    },
    {
      srcname: age,
      proroot: 'https://rohitraj-put.github.io/Age-Calculator/',
      conatnt: "“🚀 Just created a simple yet functional Age Calculator using HTML, CSS, and JavaScript! This project helped me improve my understanding of date manipulation and DOM interactions. Check out the live demo! #WebDevelopment #Coding #JavaScript”"

    },
    {
      srcname: netflix,
      proroot: 'https://rohitraj-put.github.io/ToDo-List/',
      conatnt: "“🎬 Excited to share my project - a Netflix clone built with React JS! This was a great exercise in API integration and state management. Check out the live demo and the code repository. #ReactJS #FrontEndDevelopment #NetflixClone”"

    },
    {
      srcname: tic,
      proroot: 'https://rohitraj-put.github.io/Tic-tac-toe/',
      conatnt: "“🎉 Just built a classic Tic Tac Toe game using HTML, CSS, and JavaScript! This project helped me dive deeper into DOM manipulation and event handling. Check out the code and play a game or two! #WebDevelopment #JavaScript #TicTacToe”",

    }


  ]


  return (
    <>
      <div className='pro_section' >
        {
          mainpros.map((item, index) =>
            <div className='pro_mid' key={index}>
              <div className='pro_subSection' data-aos="fade-right">
                <img src={item.srcname} />
              </div>
              <div className='pro_subSection' style={{ padding: '40px' }} data-aos="fade-left">
                <p style={{ lineHeight: "28px", fontSize: "18px" }}>{item.conatnt}</p>
                <button className='live-code'><a href={item.proroot} target='_blank' rel="noreferrer">{live}</a></button>
              </div>
            </div>
          )
        }
      </div>
    </>
  )
}

export default Project
