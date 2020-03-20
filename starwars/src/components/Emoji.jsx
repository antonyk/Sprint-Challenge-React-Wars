import React from 'react';
// import { useState } from 'react';

const emojiLib = [
  {name: "rocket", icon: '🚀'},
  {name: "smiley", icon: '😊'},
  {name: "ufo", icon: '🛸'},
  {name: "satellite", icon: '🛰'}
];

// const mult = 100 / emojiLib.length;

function Emoji(props){
  // const idx = Math.floor((Math.random() * 100) / mult)

  return (
    <span>
      {/* {props.name === 'random' ? emojiLib[emojiLib.length] } */}
      {emojiLib.find(item => item.name === props.name).icon}
    </span>
  )
}


export default Emoji;