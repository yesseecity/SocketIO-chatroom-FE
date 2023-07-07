import React from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";
import {ThemeContext} from './context/theme.jsx';

export class YourCalss extends React.Component {
  static contextType = ThemeContext;
  constructor(props) {
    // console.log('Lifecycle - constructor')
    super(props);

    console.log('props.theme: ', this.props.theme);
    console.log('props.member: ', this.props.member);
    console.log('props.win: ', this.props.win);
    this.state = {'paramA': 1, 'paramB': 1};

  }
  componentDidMount() {
    console.log('Lifecycle - componentDidMount');
    console.log('contxt: ', this.context);
  }
  componentDidUpdate() {
    // console.log('Lifecycle - componentDidUpdate');
  }
  UNSAFE_componentWillReceiveProps() {
    // console.log('Lifecycle - UNSAFE_componentWillReceiveProps');
  }
  UNSAFE_componentDidUpdate() {
    // console.log('Lifecycle - UNSAFE_componentDidUpdate');
  }
  UNSAFE_componentWillUnmount() {
    // console.log('Lifecycle - UNSAFE_componentWillUnmount'); Z
  }
  apiAxiosGet() {
    axios.get('http://httpbin.org/get')
      .then((response)=>{
        console.log('response: ', response)
      })
      .catch((error)=>{
        console.error('error: ', error);
      });
  }
  apiAxiosPost() {
    var body = {
        firstName: 'testName',
        lastName: 'testLastName'
    };

    // for header Content-Type is application/json
    axios.post('http://httpbin.org/post', body)
      .then((response)=>{
        console.log('response: ', response);
      })
      .catch((error)=>{
        console.error('error: ', error);
      });

    // for header Content-Type is application/x-www-form-urlencoded
    var params = new URLSearchParams();
    params.append('user',JSON.stringify(body))
    axios.post('http://httpbin.org/post', params);
  }

  buttonAClick(mode) {
    switch(mode) {
      case 'plus':
        this.setState({paramA: this.state.paramA+1 });
        break;
      case 'minus':
        this.setState({paramA: this.state.paramA-1 });
        break;
    }
  }

  buttonBClick(mode) {
    switch(mode) {
      case 'plus':
        this.setState({paramB: this.state.paramB+1 });
        break;
      case 'minus':
        this.setState({paramB: this.state.paramB-1 });
        break;
    }
  }
  render() {
    // console.log('Lifecycle - render')
    return (
      <>
      <h1>Hello, this is sample for Class Obj</h1>
      <div>
        <h4>param A: <span>{this.state.paramA}</span></h4>
        <button onClick={()=>{this.buttonAClick('plus')}}>+</button>
        <button onClick={()=>{this.buttonAClick('minus')}}>-</button>
      </div>
      
      <div>
        <h4>param B: <span>{this.state.paramB}</span></h4>
    
        <button onClick={()=>{this.buttonBClick('plus')}}>+</button>
        <button onClick={()=>{this.buttonBClick('minus')}}>-</button>
      </div>
      <br />
      <ThemeContext.Consumer>
        {(props) => {
          return <p>ThemeContext value: <span>{props}</span></p>
        }}
      </ThemeContext.Consumer>
      
      <Link to="/func">example of function</Link>
      </>
    );
  }
}