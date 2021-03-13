import React, { Component } from 'react';


class About extends Component {
  render() {
    return(
      
      <div><h1>About Page</h1>
      <hr style={{borderTop: '3px solid #833fb2', width: '15%'}}/>
      <p>
      Hello, my name is Rafi Samnan. I'm a full stack engineer with experience in HTML/CSS, Bootstrap, JavaScript, React,React Native, NodeJS, Express,MongoDB.</p>

    <p>My dream is to one day start my own business and become an entrepreneur (currently working on some ideas).</p>

    <p>I'm constantly learning new things. currently those things include gaining more experience with MongoDB, React, Express JS, and Node JS</p>

    <p>My latest project, Dev Grub, is a cookbook for developers. You can check it out <a href="https://github.com/rafi340" target="_blank" rel="noopener noreferrer">here</a>, or on the homepage. It is built with Angular, MongoDB, Express JS, and Node JS. However, I will be rebuilding it using React in the coming months</p>

      </div>
     
    )
  }
}

export default About;
