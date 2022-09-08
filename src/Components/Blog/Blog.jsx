import React, { Component } from 'react'
import './Blog.css'
import slider from '../../assets/image/slider.png'

export default class Blog extends Component {
  render() {
    return (
      <div className='blog'>
        <div className="post">
            <div className="post-title">
                <h1>Hetachain’s Blog</h1>
            </div>
            <div className="post-row">
                <div className="post-large">
                    <div className="post-item">
                        <div className="img">
                            <a href="#">
                                <img src={slider} alt="" />
                            </a>
                        </div>
                        <div className="post-detail">
                            <h4>HetaChain - Blockchain Platform for The Smart Economy</h4>
                            <p>HetaChain - The Blockchain 3.0 platform has brought this technology beyond the financial-economic arena, as a perfect application for essential areas of human life such as health, education, the arts, …</p>
                            <div className="float-right">
                                <a href="#" className='button'>read more</a>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className="post-small">
                    <div className="post-item">
                            <div className="img">
                                <a href="#">
                                    <img src={slider} alt="" />
                                </a>
                            </div>
                            <div className="post-detail">
                                <h4>Relam investment launches “Relam Star” program</h4>
                                <p>Relam investment launches “Relam Star” program to keep pace with world technologies changes</p>
                                <div>
                                    <a href="#" className='button'>read more</a>
                                </div>
                            </div>
                    </div>
                    <div className="post-item">
                            <div className="img">
                                <a href="#">
                                    <img src={slider} alt="" />
                                </a>
                            </div>
                            <div className="post-detail">
                                <h4>Hetachain & T-hub enters China</h4>
                                <p>Relam investment launches “Relam Star” program to keep pace with world technologies changes</p>
                                <div>
                                    <a href="#" className='button'>read more</a>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="center">
            <a href="" className="button">See More Here</a>
        </div>

        <div className="gallery">
            <div className="post-title">
                <h1>Gallery</h1>
            </div>

            <div className="gallery-row">
                <div className="gallery-item">
                    <img src={slider} alt="" />
                </div>
                <div className="gallery-item">
                    <img src={slider} alt="" />
                </div>
            </div>
            <div className="gallery-row">
                <div className="small-item">
                    <img src={slider} alt="" />
                </div>
                <div className="small-item">
                    <img src={slider} alt="" />
                </div>
                <div className="small-item">
                    <img src={slider} alt="" />
                </div>
                <div className="small-item">
                    <img src={slider} alt="" />
                </div>
                <div className="small-item">
                    <img src={slider} alt="" />
                </div>
                
            </div>
        </div>
      </div>
    )
  }
}
