import './App.css';
import { useState, useEffect } from 'react';

function App() {

const tuesday = [
    {
      text: "Q",
      name: "Intro",
      src: "https://docs.google.com/uc?export=open&id=128vr_Zs0S-mFJMNLwJ7TRNxHozAREVVm"
    },
    {
      text: "W",
      name: "Sunrise",
      src: "https://docs.google.com/uc?export=open&id=1SM_5IZviPThooQJ3HFP7-WTX83xXIORr",
    },
    {
      text: "E",
      name: "Breakfast",
      src: "https://docs.google.com/uc?export=open&id=1JrTtGniIL_I8gYu4L_FZ_A-yTQJjlZ71",
    },
    {
      text: "A",
      name: "Chatting With Birds",
      src: "https://docs.google.com/uc?export=open&id=1bNoUl0NChFir95Ne5eGuhMflhmqwVKdg",
    },
    {
      text: "S",
      name: "Emerging Hunger",
      src: "https://docs.google.com/uc?export=open&id=1PA2SQR_8yDeS-p8-jOYL3PQ0a6E8gtM3",
    },
    {
      text: "D",
      name: "Dinner",
      src: "https://docs.google.com/uc?export=open&id=1vEpOksTGkT4_zuytKf9VlgC3y3XB4Mu7",
    },
    {
      text: "Z",
      name: "Zoom",
      src: "https://docs.google.com/uc?export=open&id=1ZFnp69Iay8Ggi8b5mrpHM3NlGB85JDTX",
    },
    {
      text: "X",
      name: "The Perfect Blanket",
      src: "https://docs.google.com/uc?export=open&id=1duKnAyyldj6v10L6Wk2ktncJ447ing33",
    },
    {
      text: "C",
      name: "Watching Cars",
      src: "https://docs.google.com/uc?export=open&id=1-Tovv4KnxGGmDUQOOaCuxcJr24Qt8xL_",
    },
    {
      text: "V",
      name: "We Like It Here",
      src: "https://docs.google.com/uc?export=open&id=1BdBoKqtpf8zIQgk37CrE8bCwbFBI5Iyh",
    },
  ];  

function correlatedTitle(letter, arr) {
  let capLet = letter.toUpperCase();
  let foundIndex = arr.findIndex(element => element.text === capLet);
  let rightObj = arr[foundIndex];
  return rightObj.name;
};

useEffect(() => {
    document.addEventListener('keydown', (event) => playAudio(event.key.toUpperCase(), correlatedTitle(event.key, tuesday)), []);
  }) 

const [title, switchTitle] =  useState('');

   
function playAudio(selection, song) {
  const audio = document.getElementById(selection);
  audio.play();
  switchTitle(song);
};

  return (
    <div id="drum-machine">
      <header>Coming May 4000</header>
      <h1>Tuesday</h1>
      <div id="buttons">
      {tuesday.map((item) => (<button className="drum-pad" key={item.name} id={item.name} onClick={() => playAudio(item.text, item.name)}>
        {item.text}
        <audio src={item.src} key={item.text} id={item.text}></audio>
        </button>))}
        </div>
        <div id="display"><p>{title}</p></div>
        <footer>Spud in Transit</footer>
        </div>
  )
}
export default App;
