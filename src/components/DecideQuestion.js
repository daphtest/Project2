import React, { Component } from 'react'
import Dropdown from './Dropdown'
import NavDesktop from './NavDesktop'


const questions =[
  {question:"Should I go out tonight?", link:"/answer3"},
  {question:"I'm hungry, what should I eat?", link:"/eat" },
  {question:"Third question?", link:"/answer1"},
  {question: "Fourth question?", link:"/answer3"}]

export class decideQuestion extends Component {
    constructor (props) {
        super(props);
        this.state = {
          show: false,
        };
      }
    
      handleToggle = (e) => {
        e.target.focus();
        this.setState({ show: !this.state.show });
      }
    
    handleChange = (question) => () => {
        this.setState({ value: question, show: false });
      }    
    
    
    render() {
        return (
            <>
            <NavDesktop/>
            <section className="question-section">
            <img className="guru-img-question" src="./images/guru1.png"/>
            <span className="guru-word">Guru,</span>
            <Dropdown show={this.state.show} value={this.state.value} handleToggle={this.handleToggle} 
            handleChange={this.handleChange} options={questions}/></section>   
            </>
        )
    }
}

export default decideQuestion
