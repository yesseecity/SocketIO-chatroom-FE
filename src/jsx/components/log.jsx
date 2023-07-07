import React,{ useEffect } from 'react';
import './log.scss';

export function Log({ msgLog }) {
  // console.log('selfMsg: ', selfMsg)
  useEffect(()=>{
  },[]);

  return (
    <div className="log">
      <div className="msg-box">
        <div className="username">{msgLog.username}</div>
        <div className="message">{msgLog.message}</div>
      </div>
    </div>
  );
};
