import React, { Component } from 'react'
import './Team.css'
import user from '../../assets/image/user.png'
import pro1 from '../../assets/image/pro1.png'
import pro2 from '../../assets/image/pro2.png'
import pro3 from '../../assets/image/pro3.png'

export default class Team extends Component {
  render() {
    return (
      <div className='team'>
        <div className='team-info'>
            <div className="info-title">
                <h1><span>Our</span> Team</h1>
            </div>
            <div className="team-desc">
                <p>The Heta Team combines a passion for esports, industry experise & proven
                record in finance, development,
                marketing & licensing.</p>
            </div>
        </div>

        <div className="team-project">
            <div className="project-title">
                
                <h3><span>The</span> PROJECT'S <span>Team</span></h3>
                
            </div>
            <div className="project">
                <div className="project-item">
                    <img src={user} alt="" />
                    <h4>Mr. Sultan Ali Lootah</h4>
                    <p>Co-founder, Chairman & CEO</p>
                    <div className="social">
                    <i className="fa-brands fa-linkedin"></i>
                    </div>
                </div>
                <div className="project-item">
                    <img src={user} alt="" />
                    <h4>Mr. Abdulla Ali Lootah</h4>
                    <p>Co-founder</p>
                    <div className="social">
                    <i className="fa-brands fa-linkedin"></i>
                    </div>
                </div>
               
                <div className="project-item">
                    <img src={user} alt="" />
                    <h4>Mr. Mohammad Ahli</h4>
                    <p>CSO, Co-founder</p>
                    <div className="social">
                    <i className="fa-brands fa-linkedin"></i>
                    <i className="fa-brands fa-square-twitter"></i>
                    </div>
                </div>
                <div className="project-item">
                    <img src={user} alt="" />
                    <h4>Mr. Rajesh Gunani</h4>
                    <p>Co-founder</p>
                    <div className="social">
                    <i className="fa-brands fa-linkedin"></i>
                    </div>
                </div>
                <div className="project-item">
                    <img src={user} alt="" />
                    <h4>Mr. Nagesh Ananth Prabhu</h4>
                    <p>Co-founder & CTO</p>
                    <div className="social">
                    <i className="fa-brands fa-linkedin"></i>
                    <i className="fa-brands fa-square-twitter"></i>
                    <i className="fa-brands fa-facebook"></i>
                    </div>
                </div>
                <div className="project-item">
                    <img src={user} alt="" />
                    <h4>Mr. Ali Juma Alajme</h4>
                    <p>CFO, Co-founder</p>
                    <div className="social">
                    <i className="fa-brands fa-linkedin"></i>
                    <i className="fa-brands fa-square-twitter"></i>
                    </div>
                </div>
            </div>
        </div>

        <div className="team-project">
            <div className="project-title">
                
                <h3><span>The</span> ADVISORY <span>BOARD</span></h3>
                
            </div>
            <div className="project">
                <div className="project-item">
                    <img src={user} alt="" />
                    <img src={pro1} alt="" />
                    <h4>Mr. Michael Gord</h4>
                    <p>Founder and CEO of MLG Blockchain, anenterprise blockchain and ICO consulting and development firm.</p>
                    <div className="social">
                    <i className="fa-brands fa-linkedin"></i>
                    </div>
                </div>
                <div className="project-item">
                    <img src={user} alt="" />
                    <img src={pro2} alt="" />
                    <h4>Mr. Samer Obeidat</h4>
                    <p>Mr. Samer Obeidat is Managing Director at Stallion AI who has over 10 years experience as a global entrepreneur in Technology and Financial Markets Professional.</p>
                    <div className="social">
                    <i className="fa-brands fa-linkedin"></i>
                    </div>
                </div>
               
                <div className="project-item">
                    <img src={user} alt="" />
                    <img src={pro3} alt="" />
                    <h4>Mr. Shameer Thaha</h4>
                    <p>CEO of Accubits (MENA) a technology company that focuses on AI and Blockchain, is one of the world leaders in Blockchain and ICO technology.</p>
                    <div className="social">
                    <i className="fa-brands fa-linkedin"></i>
                    </div>
                </div>
                <div className="project-item">
                    <img src={user} alt="" />
                    <h4>Mr. Michael Gong</h4>
                    <p>More 20 years of experience managing companies in Shipping & Logistic, trading between China & Middle East, F&B hospitality.</p>
                    <div className="social">
                    <i className="fa-brands fa-linkedin"></i>
                    </div>
                </div>
                <div className="project-item">
                    <img src={user} alt="" />
                    <h4>Mr. Samer Obeidat</h4>
                    <p>Mr. Samer Obeidat is Managing Director at Stallion AI who has over 10 years experience as a global entrepreneur in Technology and Financial Markets Professional.</p>
                    <div className="social">
                    <i className="fa-brands fa-linkedin"></i>
                    </div>
                </div>
                <div className="project-item">
                    <img src={user} alt="" />
                    <h4>Bethany Kertzmann</h4>
                    <p>Community Advisor Board AGEcrypto Starup.</p>
                    <div className="social">
                    <i className="fa-brands fa-linkedin"></i>
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
  }
}
