import React, { Component } from 'react'
import './header.css'
import { init } from 'ityped'
export default class Hello extends Component {
    componentDidMount(){
      const myElement = document.querySelector('#myElement')
      init(myElement, { showCursor: false, strings: ['A Front-End Developer','A Problem Solver','A Fast Learner','Creative','A Web Developer' ] })
    }
    render(){
      return  (
      <div className='header'>
          <h1>Hi,I am Promise</h1>
          <p>I am<span id="myElement"></span><span className='cursor'></span></p>
       
      </div>
      )
    }
  }




