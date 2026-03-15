import React from 'react'
import './About.css'
import aboutImg from './about.png'

function About() {
    return (
        <section className="about">
            <div className="container">
                <div className="about-container">
                    <div className='about-title'>
                        <p className='about-title-subtitle'> Bizning</p>
                        <h1>LOYIHALARIMIZ</h1>
                        <div className="about-cards">
                            <div className="about-card">
                                <img className="about-card-img" src={aboutImg} alt="About" />
                                <div className="about-card-info">
                                    <h1 className='about-title-h1'>Osmondagi bolalar</h1>
                                <p className='about-subtitle'>
                                    Biz ko'plab saytlarbi dasturlash jarayonida shu va shu kabi <br /> ajoyib saytlarni tuzamiz, siz bizning saytlardan <br /> foydalanayotganingizda ozgacha qulaylikni va yengil <br /> his etasiz, oz beznesingizni internet orqali ham <br />rivojlantiring.
                                </p>
                                <div className='about-site'>
                                    <div className="about-card-number">
                                        <p className='about-number'>
                                             01
                                        </p>
                                        <p>
                                              Web Sayt
                                        </p>
                                    </div>
                                    <div className='about-card-number'>
                                        <p className='about-number'>
                                                02
                                        </p>
                                        <p>
                                            Admin Panel
                                        </p>
                                    </div>
                                    <div className='about-card-number'>
                                        <p className='about-number'>
                                                03
                                        </p>
                                        <p>
                                            Telegram bot
                                        </p>
                                    </div>
                                  </div>
                                   <a href="#">
                                      <button className='about-btn'>
                                     Ko'rish
                                      </button>
                                   </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="about-cards">

                    </div>
                </div>
            </div>
        </section>
    )
}

export default About