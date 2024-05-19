import React from 'react'
import html5 from '../Image/HTML5.png'
import css3 from '../Image/CSS3.png'
import javascript from '../Image/javascript.png'
import react from '../Image/react.png'
import bootstrap from '../Image/Bootstrap.png'
import tailwind from '../Image/Tailwind.png'
import MUI from '../Image/MUI.png'
import sass from '../Image/Sass.png'
import git from '../Image/git.png'
import redux from '../Image/redux.png'


function Skills() {
    const skillImg = [html5, css3, javascript, react, bootstrap, tailwind, MUI, sass, redux, git]
    return (
        <>
            <h1 className='aboutme userText' id='skill' style={{ textAlign: 'center', marginBottom: '80px' }} data-aos={"zoom-in-down"}>Skills</h1>

            <div className='Skill_sec'>
                {
                    skillImg.map(item => <div key={item.id} className='skills_box'>
                        <img src={item} alt='Skill_Image' data-aos={"zoom-in-right"} />
                    </div>)
                }
            </div>
        </>
    )
}

export default Skills