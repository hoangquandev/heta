import React, { Component } from 'react'
import './BackToTop.css'

export default class BackToTop extends Component {

    topFunction() {
        document.documentElement.scrollTop = 0; 
      }
  render() {
    
    return (
        <button onclick="topFunction()" id="myBtn" title="Go to top" onClick={()=>this.topFunction()}>
            <i class="fas fa-arrow-up"></i>
        </button>
    )
  }
}
