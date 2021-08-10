import React, { Component } from 'react'
import './header.css'
 const textArray=['a Front-End Developer','a Fast Learner','a Problem Solver','a Faster Learner','Creative']
export default class Header extends Component {
    
    state={
        text:0
    }
    componentDidMount(){
        this.timeout = setInterval(() => {
            let currenTxt = this.state.text;
            this.setState({ text: currenTxt + 1 });
          }, 2500);
        }
        componentWillUnmount() {
            clearInterval(this.timeout);
          }
    render() {
        let textThatChanges = textArray[this.state.text % textArray.length];
        return (
            <div className='header'>
                <h1>Hi,I am Promise</h1>
                <p>I am <span>{textThatChanges} </span></p>
            </div>
        )
    }
}
