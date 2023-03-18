import React from 'react';
import "./about.css";
import about from "../../assets/avatar-2.svg";
import AboutBox from './AboutBox';
const About = () => {
    return (
        <section className="about container section" id='about'>
            <h2 className="section__title">About Me</h2>
            <div className="about__container grid">
                <img src={about} alt="" className="about__img" />

                <div className="about__data grid">
                    <div className="about__info">
                        <p className="about__description">I am May Nguyen , web developer from Hanoi , VietNam. I have rich experience in website design and building and customization, also I am good at WordPress.</p>
                        <a href="" className="btn btn-down">Download CV</a>
                    </div>
                    <div className="about__skills gird">
                        <div className="skills__data">
                            <div className="skills_titles">
                                <h3 className="skill_name">Development</h3>
                                <span className="skill__number">90%</span>
                            </div>

                            <div className="skill__bar">
                                <span className="skill__percentage development"></span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills_titles">
                                <h3 className="skill_name">UI/UX design</h3>
                                <span className="skill__number ">80%</span>
                            </div>

                            <div className="skill__bar">
                                <span className="skill__percentage ui_desgin"></span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills_titles">
                                <h3 className="skill_name">Photography</h3>
                                <span className="skill__number ">70%</span>
                            </div>

                            <div className="skill__bar">
                                <span className="skill__percentage photography"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <AboutBox />
        </section>
    )
}


export default About