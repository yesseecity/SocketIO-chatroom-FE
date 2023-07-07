import React,{ useEffect } from 'react';
import './main.scss';

export function Main() {
  useEffect(()=>{

  },[]);

  const submitMessage = (event) => {
    let data = null;
    event.preventDefault();
    event.stopPropagation();
    console.log('submit message')
    // console.log(event)
    // One line if
    if (event.type == 'keydown') data = new FormData(event.target.form);

    if (event.type === 'submit') {
      data = new FormData(event.target);
    }

    const dataObj = Object.fromEntries(data.entries());
    console.log(dataObj)
  };
  const keyboardCheck = (event) => {
    // event.preventDefault();
    // event.stopPropagation();
    // console.log(event.target.form);
    if (event.shiftKey && event.key == "Enter") {
      // event.target.form.submit()
      submitMessage(event);
    }
  };
  return (
    <div className="wrapper main">
      wrapper main

      <div className="message-log"> 
        message log
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