import React, {useState, useEffect, useContext} from 'react';
import {Link} from "react-router-dom";
import axios from 'axios';
import {ThemeContext} from './context/theme.jsx';

export function FunctionName() {
  const theme = useContext(ThemeContext);

  const [userInfo, setUserInfo] = useState({
    name: 'Mark',
    phone: '0912123123'
  });

  const [paramA, setParamA] = useState(1);
  const [paramB, setParamB] = useState(1);
  

  useEffect(()=> {
    console.log('Initial;')

    console.log('theme : ', theme)
  }, []);

  useEffect(()=> {
    console.log('After param A changed;')
  }, [paramA]);

  useEffect(()=> {
    console.log('After param B changed;')
  }, [paramB]);

  const buttonAClick = (mode) => {
    switch(mode) {
      case 'plus':
        setParamA(paramA+1);
        break;
      case 'minus':
        setParamA(paramA-1);
        break;
    }
  }

  const buttonBClick = (mode) => {
    switch(mode) {
      case 'plus':
        setParamB(paramB+1);
        break;
      case 'minus':
        setParamB(paramB-1);
        break;
    }
  }

  // In return obj, <> is Fragment
  return (
    <>
    <h1>Hello, this is sample for Function Obj</h1>
    <div>
      <h4>param A: <span>{paramA}</span></h4>
      <button onClick={()=>{buttonAClick('plus')}}>+</button>
      <button onClick={()=>{buttonAClick('minus')}}>-</button>
    </div>
    
    <div>
      <h4>param B: <span>{paramB}</span></h4>
  
      <button onClick={()=>{buttonBClick('plus')}}>+</button>
      <button onClick={()=>{buttonBClick('minus')}}>-</button>
    </div>
    
    <br />
    <Link to="/class">example of class</Link>
    </>
  );
}
