import React, { useEffect } from 'react'
import AOS from 'aos'
import age from '../Image/age.png'
import tic from '../Image/tic.png'
import netflix from '../Image/netflix.png'
import jupiter from '../Image/jupiter.png'
import hostel from '../Image/hostel.png'
import mantra from '../Image/mantraShop.png'

const Project = (props) => {
  useEffect(() => {
    AOS.init({
      duration: 1000
    });
  }, []);
  let live = "LIVE CODE"

  const mainpros = [
    {
      srcname: hostel,
      proroot: 'https://hostel-hop.netlify.app/'
    },
    {
      srcname: mantra,
      proroot: 'https://mantrashoping.netlify.app/'
    },
    {
      srcname: jupiter,
      proroot: 'https://rohitraj-put.github.io/Jupiter-animation/'
    },
    {
      srcname: age,
      proroot: 'https://rohitraj-put.github.io/Age-Calculator/'
    },
    {
      srcname: netflix,
      proroot: 'https://rohitraj-put.github.io/ToDo-List/'
    },
    {
      srcname: tic,
      proroot: 'https://rohitraj-put.github.io/Tic-tac-toe/'
    }


  ]

  let allpro = mainpros.map(mainpro => <div className='box-pro' key={mainpro.srcname}>
    <img src={mainpro.srcname} alt='project-img' data-aos="flip-left" rel="noopener" />
    <button className='live-code'><a href={mainpro.proroot} target='_blank' rel="noreferrer">{live}</a></button>
  </div>)

  return (
    <>
      {allpro}

    </>
  )
}

export default Project
