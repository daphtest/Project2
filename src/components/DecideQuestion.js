import React, { Component } from 'react'
import NavDesktop from './NavDesktop'
import {Link} from 'react-router-dom';




export class decideQuestion extends Component {
    // constructor (props) {
    //     super(props);
    //     this.state = {
    //       show: false,
    //     };
    //   }
    
    //   handleToggle = (e) => {
    //     e.target.focus();
    //     this.setState({ show: !this.state.show });
    //   }
    
    // handleChange = (question) => () => {
    //     this.setState({ value: question, show: false });
    //   }    
    
    
    render() {
        return (
            <>
            <NavDesktop/>
            <section className="question-section">
            <img className="guru-img-question" id="decide-guru" src="./images/guru1.png"/>

            <div className="baloon-container-decide">
            <Link to="/answer3"> <input id="baloon1" type="image" src="./images/questionimg6.png" alt="out tonight"/> </Link>
            <Link to="/eat"> <input id="baloon2" type="image" src="./images/questionimg7.png" alt="what to eat"/> </Link>
            <Link to="/answer8"> <input id="baloon3" type="image" src="./images/questionimg8.png" alt="what to watch"/></Link>
            <Link to="/answer9"> <input id="baloon4" type="image" src="./images/questionimg9.png" alt="what to listen"/></Link>
            <Link to="/answer7"> <input id="baloon5" type="image" src="./images/questionimg10.png" alt="what to do"/></Link>
            </div>

            {/* <Dropdown show={this.state.show} value={this.state.value} handleToggle={this.handleToggle} 
            handleChange={this.handleChange} options={questions}/> */}
            
            </section>   
            </>
        )
    }
}

export default decideQuestion
