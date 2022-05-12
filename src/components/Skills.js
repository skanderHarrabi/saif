import React from 'react';
import PropTypes from 'prop-types';
import software from '../icons/software.png'
import frontend from '../icons/frontend.jpg'
import backend from '../icons/icons_pozitive_turcoaz+alb-03.png'
import base from '../icons/12063.png'
import mobile from '../icons/mobile.png'
import ps from '../icons/Ps.png'


const Skills = () => {
    return (
        <section className="page-section bg-skills text-white mb-0" id="skills">
            <div className="container">
                {/* About Section Heading*/}
                <h2 className="page-section-heading text-center text-uppercase text-white">
                    Skills
                </h2>
                {/* Icon Divider*/}
                <div className="divider-custom divider-light">
                    <div className="divider-custom-line" />
                    <div className="divider-custom-icon"><i className="fas fa-star" /></div>
                    <div className="divider-custom-line" />
                </div>
                {/* About Section Content*/}
                <div className="skillsContainer">
                    <div className="skills-box">
                        <div className='skills-title'>
                            <div className='img'>
                                <img src={software} className='skill-icon' />
                            </div>
                            <h3>Software Development</h3>
                            <p>Python , C# , JAVA/JAVA FX , C/C++ , PHP</p>
                        </div>
                    </div>
                    <div className="skills-box">
                        <div className='skills-title'>
                            <div className='img'>
                                <img src={frontend} className='skill-icon' />
                            </div>
                            <h3>Front-End Development</h3>
                            <p>HTML , CSS , SCSS , JS , Angular , React , Symfony</p>
                        </div>

                    </div>
                    <div className="skills-box">
                        <div className='skills-title'>
                            <div className='img'>
                                <img src={backend} className='skill-icon' />
                            </div>
                            <h3>Back-End Development</h3>
                            <p>NodeJs , PHP , Laravel , JEE</p>
                        </div>
                    </div>
                    <div className="skills-box">
                        <div className='skills-title'>
                            <div className='img'>
                                <img src={base} className='skill-icon' />
                            </div>
                            <h3>Database</h3>
                            <p>MongoDB , MySQL , PostgreSQL , Oracle</p>
                        </div>
                    </div>
                    <div className="skills-box">
                        <div className='skills-title'>
                            <div className='img'>
                                <img src={mobile} className='skill-icon' />
                            </div>
                            <h3>Mobile Development</h3>
                            <p>React Native</p>
                        </div>
                    </div>
                    <div className="skills-box">
                        <div className='skills-title'>
                            <div className='img'>
                                <img src={ps} className='skill-icon' />
                            </div>
                            <h3>personal interest</h3>
                            <p>BuildBox , Photoshop , AfterEffect</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};


Skills.propTypes = {

};


export default Skills;
