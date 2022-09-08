import React, { Component } from 'react'
import './Banner.css'
import bgBanner from '../../assets/image/bg-banner.png'
import borderBefore from '../../assets/image/borderBefore.png'


export default class Banner extends Component {
  render() {
    return (
      <div className='banner'>
            <div className="txtBanner">
                <div className="titleText">
                    <h1>HetaChain Platform</h1>
                    <h1>Open Blockchain Financial Platform for Fintech and Crypto Business</h1>
                </div>
                <div className="bodyText">
                    <h4>New stage of global payment evolution</h4>
                </div>
            </div>
            <div className="borderBanner">
                <img src={borderBefore} alt="" />
            </div>
            <div className='btn-banner'>
                <a href='#' className='button'>Click to see detail</a>
            </div>
        
      </div>
    )
  }
}
