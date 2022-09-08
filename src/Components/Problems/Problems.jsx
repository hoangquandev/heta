import React, { Component } from 'react'
import './Problems.css'
import img1 from '../../assets/image/prob-1.png'
import img2 from '../../assets/image/prob-2.png'
import img3 from '../../assets/image/prob-3.png'
import img4 from '../../assets/image/prob-4.png'

export default class Problems extends Component {
  render() {
    return (
      <div className='problems'>
        <div className="title">
            <h1>Problems</h1>
        </div>
        <div className="service">
            <div className="service-item">
                <div className="center">
                    <img src={img1} alt="" />
                </div>
                <div className="center">
                    <h4>Transaction Speed</h4>
                </div>
                <p>Slow, impractical for retail transactions. The speed of current crypto transactions is very slow, difficult to meet user needs</p>
            </div>
            <div className="service-item">
                <div className="center">
                    <img src={img2} alt="" />
                </div>
                <div className="center">
                    <h4>Secure</h4>
                </div>
                <p>Security is always a top priority, but most of the current projects do not meet this requirement</p>
            </div>
            <div className="service-item">
                <div className="center">
                    <img src={img3} alt="" />
                </div>
                <div className="center">
                    <h4>Scalabilty</h4>
                </div>
                <p>The scalability of a project is one of the important things to develop the project, but many current projects have extremely low levels of scalability</p>
            </div>
        </div>
        <div className="row">
            <div className="prob-left">
                <img src={img4} alt="" />
            </div>
            <div className="prob-right">
                <h1>Heta Protocol - A Multichan Platfotm</h1>
                <p>HetaChain - The Blockchain 3.0 platform has brought this technology beyond the financial-economic arena, as a perfect application for essential areas of human life such as health, education, the arts, …</p>
                <p>A Muitichain Platform HetaChain is a multi-chain blockchain network having both Public and Private Chain capabilities for an effective business and governance system transactions built for industry-grade computational requirements which allow the efficient handling of commercial applications and economic events.</p>
            </div>
        </div>
      </div>
    )
  }
}
