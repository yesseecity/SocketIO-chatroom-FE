import React,{ useEffect, useRef, useState } from 'react';
import { io } from 'socket.io-client'
import { Log } from './log.jsx'
import './main.scss';


export function Main() {
  const [socket, setSocket] = useState();
  const [logs, setLogs] = useState([]);
  const messageLogDom = useRef();

  useEffect(()=>{
    let socketConnection = io('/');

    let msgObj = {
      roomId: "room_001",
    }
    socketConnection.emit('joinRoom', JSON.stringify(msgObj));
    setSocket(socketConnection);
  },[]);

  useEffect(()=>{
    messageLogDom.current.scrollTo({
      top: messageLogDom.current.scrollHeight,
      // left: 0,
      behavior: "smooth",
    });
  },[logs]);

  useEffect(()=>{
    if (socket == undefined) return; 
    socket.on('new message', (msg) => {
      let msgObj = JSON.parse(msg);
      // if (msgObj.sender == socket.id) return;
      setLogs(logs => [...logs, msgObj])
    });
  },[socket]);


  const submitMessage = (event) => {
    let data = null;
    event.preventDefault();
    event.stopPropagation();
    // console.log('submit message')
    // console.log(event)
    // One line if
    if (event.type == 'keydown') {
      data = new FormData(event.target.form);
      event.target.value = '';
    }

    if (event.type === 'submit') {
      data = new FormData(event.target);
    }

    const dataObj = Object.fromEntries(data.entries());
    let msgObj = {
      ...dataObj,
      roomId: "room_001",
    }
    
    const now = new Date();
    msgObj.time = now.toISOString();
    if (msgObj.username == "") msgObj.username="no name";
    console.log('msgObj: ', msgObj)
    socket.emit('new message', JSON.stringify(msgObj));
  };
  const keyboardCheck = (event) => {
    if (event.shiftKey && event.key == "Enter") {
      submitMessage(event);
    }
  };
  return (
    <div className="wrapper main">

      <div className="message-log" ref={messageLogDom}> 
        {logs.map(msgLog => <Log msgLog={msgLog} key={msgLog.time} />)}
      </div>

      <div className="send-box">
        send-box
        <form onSubmit={submitMessage}>
          <label>User name:</label>
          <input name="username" type='text' placeholder='user name'></input>
          <textarea name="message" onKeyDown={keyboardCheck} placeholder='Shift+Enter to send'>
          </textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}